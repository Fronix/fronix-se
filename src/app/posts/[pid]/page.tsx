import { type NextPage } from 'next';
import { type ParsedUrlQuery } from 'querystring';
import { Post } from '../page';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import HoverLink from '../../components/HoverLink';

export const dynamic = 'auto';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

type PostsProps = NextPage<Post> & { params: { pid: string } };

const getPost = (ptitle: string) => {
  // Calculate path to posts folder (src/posts)
  const postsDirectory = path.join(process.cwd(), 'posts');
  // Get ptitle.md file contents in posts folder
  const post = fs.readFileSync(path.join(postsDirectory, `${ptitle}.md`), 'utf8');
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
          <ReactMarkdown>{post}</ReactMarkdown>
        </article>
      </div>
    </>
  );
}
