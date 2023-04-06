import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className='w-full py-8 px-8 flex items-center justify-between shadow-zinc-900 shadow-lg lg:px-32 xl:px-64'>
        <div>
          <h1 className='text-5xl text-success'>Project Manager</h1>
        </div>
        <nav>
          <ul className='flex items-center gap-4'>
            <li>
              <Link href='/' className='text-xl hover:text-accent-focus'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href='/contact' className='text-xl hover:text-accent-focus'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
