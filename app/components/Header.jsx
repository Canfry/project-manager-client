import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/app-beta';
import { UserButton } from '@clerk/nextjs/app-beta';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';

export default async function Header() {
  const user = await currentUser();
  console.log(user);
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

            {/* <li>
              <SignedOut>
                <Link href='/signin'>
                  <button className='border border-success rounded-lg px-3 py-1 hover:border-transparent hover:text-success '>
                    Sign In
                  </button>
                </Link>
              </SignedOut>
            </li> */}

            <>
              {/* <li>
                  <Link href='/user'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </Link>
                </li> */}

              <SignedIn>
                <li>
                  <UserButton />
                </li>
                <li>Welcome </li>
              </SignedIn>
            </>
          </ul>
        </nav>
      </div>
    </>
  );
}
