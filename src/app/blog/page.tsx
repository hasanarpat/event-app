import { AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar } from '@radix-ui/react-avatar';
import Link from 'next/link';
import dumbBlogPosts from '@/data/dumbBlogPosts.json';

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { tag, authorId } = await searchParams;
  let posts = dumbBlogPosts;
  // If a tag is provided in the search parameters, filter the posts by that tag
  if (authorId)
    posts = dumbBlogPosts.filter((post) => post.id == (authorId as string));
  if (tag)
    posts = dumbBlogPosts.filter((post) => post.tags.includes(tag as string));

  return (
    <section className=''>
      <div className='container mx-auto py-10'>
        <h1 className='text-3xl font-bold mb-6 mx-auto bg-accent text-center p-4 rounded-lg'>
          Latest Blog Posts
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map(
            (
              post: {
                id: string;
                title: string;
                date: string;
                writer: { name: string; avatar: string };
                post: string;
                tags: string[];
              },
              index: number
            ) => (
              <Card key={index} className='bg-white rounded-lg shadow-lg p-4'>
                <CardHeader className='text-xl font-semibold mb-2'>
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  <CardTitle className='text-gray-600 flex items-center gap-4'>
                    <Avatar className='inline-block ml-2 w-12 h-12 rounded-full'>
                      <AvatarImage
                        src={post.writer.avatar}
                        className='w-full h-full rounded-full'
                      />
                    </Avatar>
                    <Link
                      href={
                        tag
                          ? `/blog?authorId=${post.id}&tag=${tag}`
                          : `/blog?authorId=${post.id}`
                      }
                      className='font-medium'
                    >
                      {post.writer.name}
                    </Link>{' '}
                    - {new Date(post.date).toLocaleDateString()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-popover-foreground mb-4'>
                    {post.post.slice(0, 150).concat('...')}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className='flex flex-wrap gap-2'>
                    {post.tags.map((tag, tagIndex) => (
                      <Link
                        href={
                          authorId
                            ? `/blog?tag=${tag}&authorId=${authorId}`
                            : `/blog?tag=${tag}`
                        }
                        key={tagIndex}
                        className='bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-mono'
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
