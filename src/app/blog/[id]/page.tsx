import dumbBlogPosts from '@/data/dumbBlogPosts.json';
import Link from 'next/link';
import Image from 'next/image';
const BlogPost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = dumbBlogPosts.find((post) => post.id === id) || undefined;
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center py-10 max-w-3xl mx-auto mt-12'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-6 w-full'>
          <div className=''>
            <h1 className='p-2 md:p-0 text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4 text-accent-foreground'>
              {post?.title}
            </h1>
            <p className='mb-2 ml-auto md:w-fit text-center bg-muted text-muted-foreground p-2 rounded-sm md:mr-4'>
              {post?.date}
            </p>
            <p className='ml-auto md:w-fit text-center bg-muted text-muted-foreground p-2 rounded-sm md:mr-4 mb-4 md:mb-0'>
              <Link href={`/blog/author?authorId=${post?.writer.name}`}>
                {post?.writer?.name}
              </Link>
            </p>
          </div>
          <Image
            src={post?.writer?.avatar || ''}
            alt={post?.writer?.name || 'Author Avatar'}
            width={100}
            height={100}
            className='w-52 h-52 object-cover rounded-sm'
          />
        </div>
        <div className='px-4 md:px-0'>
          <p className='text-lg text-secondary-foreground mb-4 font-sans font-medium text-justify'>
            Ea nisi consectetur velit Lorem aliquip. Nulla deserunt qui velit
            irure eu sint officia occaecat aliqua. Sint occaecat id do deserunt
            amet anim adipisicing consequat laboris deserunt. Nisi elit ex
            cupidatat laboris sint id. Est est ad ad eiusmod velit occaecat
            fugiat. Commodo culpa elit consequat voluptate consequat eiusmod
            nulla.Mollit mollit deserunt cupidatat cillum officia ad
            reprehenderit dolore. Nulla labore elit laboris velit occaecat.
            <br />
            <br />
            Anim aute amet amet excepteur deserunt irure sunt incididunt est
            duis labore. Reprehenderit fugiat aute sit id labore labore
            consectetur ea. Enim commodo labore cillum eiusmod do sunt pariatur
            veniam voluptate. Sint incididunt sint ipsum cillum magna excepteur
            sit in eu laborum aliquip non ea Lorem. Mollit ex laborum consequat
            nisi non. Magna quis tempor aute duis elit cupidatat velit cupidatat
            cupidatat ad aliquip pariatur. Irure consequat amet elit labore.
            Culpa laborum laboris sunt culpa minim amet consequat anim aliquip.
            Voluptate est consequat velit et cillum excepteur ullamco veniam ea
            nisi amet eiusmod labore elit. Reprehenderit aliquip excepteur
            excepteur amet. Et anim Lorem consequat excepteur reprehenderit
            proident esse excepteur enim labore. Dolor sit tempor sint sint esse
            Lorem consectetur irure aute fugiat elit eiusmod deserunt tempor.
            <br />
            <br />
            Exercitation Lorem occaecat est nisi est occaecat id dolor in. Sunt
            sint ad est voluptate. Minim sint officia sit aliquip do laborum
            labore reprehenderit adipisicing sit. Aliquip amet consectetur est
            ex commodo magna cupidatat ex ea. Mollit occaecat voluptate anim
            cillum id exercitation velit. Laborum amet adipisicing elit Lorem
            fugiat officia labore. Ullamco laborum amet est enim elit elit id
            ipsum laborum. Aute eiusmod et deserunt elit laborum irure cupidatat
            laborum eiusmod sint aliquip anim ex ad. Minim veniam proident ea et
            veniam laboris. Aute sunt cillum aliquip et elit aliqua voluptate
            dolor irure ut. Culpa in est esse anim elit. Aliquip nulla nulla ad
            tempor. Laborum qui esse ullamco aute nostrud sint sint minim non
            officia proident eiusmod. Tempor in do labore sint in proident. Sit
            ut qui proident cillum culpa cupidatat mollit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
