import path from 'path';
import HoverLink from '../components/HoverLink';
import fs from 'fs';

export const dynamic = 'auto';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export type Post = {
  name: string;
  path: string;
};

const getPosts = () => {
  // Calculate path to posts folder (src/posts)
  const postsDirectory = path.join(process.cwd(), 'posts');
  // Get all file names in posts folder
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    name: fileName
  }));
};

export default function Posts() {
  const posts = getPosts();

  return (
    <div className='hero'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Posts</h1>
          <p className='py-6'>Some interesting stuff I{"'"}ve written about.</p>
          <ul>
            {posts?.map((post, i) => {
              const title = post.name.replace('.md', '');
              return (
                <li key={post.name}>
                  {'>'} <HoverLink title={title} href={`/posts/${title}`} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
