'use client';
import { useSearchParams } from 'next/navigation';
import dumbBlogPosts from '@/data/dumbBlogPosts.json';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';

const AuthorBlogPosts = () => {
  const author = useSearchParams().get('authorId');

  return (
    <div className=' min-h-screen relative'>
      <div className='opacity-50 -z-10  w-full h-screen absolute bg-[url(https://images.pexels.com/photos/33127482/pexels-photo-33127482.jpeg)] bg-cover bg-center bg-no-repeat'></div>
      <div className='container mx-auto py-10'>
        <div className='text-3xl font-bold mb-6 mx-auto bg-accent text-center p-4 rounded-lg flex items-center justify-center gap-4'>
          <h1>Blog Posts by {author}</h1>
          <Avatar className='inline-block ml-2 w-20 h-20 rounded-full'>
            <AvatarImage
              src={
                dumbBlogPosts.filter((post) => post.writer.name === author)[0]
                  .writer.avatar
              }
              className='w-full h-full rounded-full'
            />
          </Avatar>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {dumbBlogPosts
            .filter((post) => post.writer.name === author)
            .map((post, index) => (
              <div key={index} className='bg-white rounded-lg shadow-lg p-4'>
                <Link
                  href={`/blog/${post.id}`}
                  className='text-xl font-semibold mb-2'
                >
                  {post.title}
                </Link>
                <p className='text-gray-600 mb-4'>{post.post.slice(0, 150)}</p>
                <span className='text-sm text-gray-500'>
                  Posted on {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorBlogPosts;
