import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import path from 'path';
import React from 'react';
import HoverLink from '../../components/HoverLink';
import NextImage from '../../components/NextImage';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const dynamic = 'auto';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

type PostsProps = { params: { pid: string } };

type UnknownComponentProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};

const getPost = (ptitle: string) => {
  if (!ptitle) return null;
  const file = decodeURI(ptitle);
  // Calculate path to posts folder (src/posts)
  const postsDirectory = path.join(process.cwd(), 'posts');
  // Get ptitle.md file contents in posts folder
  // Ensure it can read files with spaces in the name
  const fullPath = path.join(postsDirectory, `${file}.md`);
  const post = fs.readFileSync(fullPath, 'utf8');
  return post ?? null;
};

export default function Posts({ params }: PostsProps) {
  const post = getPost(params.pid);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className='justify-space-center flex w-full flex-col items-center'>
        <div className='pb-5'>
          <HoverLink href='/posts' title='< Go back' noPathCheck />
        </div>
        <article className='prose-white prose m-auto'>
          <Markdown
            options={{
              wrapper: React.Fragment,
              forceWrapper: false,
              overrides: {
                img: {
                  component: NextImage
                },
                code: {
                  component: ({ children, className, ...props }: UnknownComponentProps) => {
                    const match = /lang-(\w+)/.exec(className || '');
                    return match ? (
                      <SyntaxHighlighter
                        {...props}
                        style={vscDarkPlus}
                        customStyle={{
                          backgroundColor: 'var(--tw-prose-pre-bg)',
                          padding: 0
                        }}
                        PreTag='div'
                        language={match[1]}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...props}>{children}</code>
                    );
                  }
                }
              }
            }}
          >
            {post}
          </Markdown>
        </article>
      </div>
    </>
  );
}
