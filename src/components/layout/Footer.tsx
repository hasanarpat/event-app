import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground py-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Event App. All rights reserved.
          </p>
          <div className='flex space-x-4'>
            <Link href='/privacy' className='text-sm hover:underline'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='text-sm hover:underline'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
