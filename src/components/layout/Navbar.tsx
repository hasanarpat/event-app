import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className='bg-secondary text-secondary-foreground shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Button className='flex items-center'>
            <Link href='/' className='text-xl font-bold text-gray-900'>
              Event App
            </Link>
          </Button>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                href='/blog'
                className='text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium'
              >
                Blog
              </Link>
              <Link
                href='/events'
                className='text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium'
              >
                Events
              </Link>
              <Link
                href='/about'
                className='text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium'
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
