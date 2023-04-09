import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/app-beta';
import { UserButton } from '@clerk/nextjs/app-beta';
import { SignedIn } from '@clerk/nextjs/app-beta';

export default async function Header() {
  const user = await currentUser();
  return (
    <>
      <div className='w-full py-8 shadow-zinc-900 shadow-lg'>
        <div className='max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] h-full m-auto flex items-center justify-between'>
          <div>
            <h1 className='text-4xl text-success'>Project Manager</h1>
          </div>
          <nav>
            <ul className='flex items-center gap-4'>
              <li>
                <Link
                  href='/dashboard'
                  className='text-xl hover:text-accent-focus'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-xl hover:text-accent-focus'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className='flex items-center'>
            <SignedIn>
              <li>
                <UserButton />
              </li>
              <li className='ml-4 hidden lg:block'>
                Welcome {user.firstName} {user.lastName}{' '}
              </li>
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  );
}
