import { Inter } from 'next/font/google';
import { createClient } from 'next-sanity';
import { SignedIn } from '@clerk/nextjs/app-beta';
import Dashboard from '../components/Dashboard';

const inter = Inter({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

const client = createClient({
  projectId: 'oneonqrw',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export default async function Dashboardpage() {
  const projects = await client.fetch(`*[_type == 'projects']`);
  const teams = await client.fetch(`*[_type == 'teams']`);

  return (
    <>
      <SignedIn>
        <main className='w-full h-full'>
          <div className='max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] h-full m-auto mt-10'>
            <Dashboard projects={projects} teams={teams} />
          </div>
        </main>
      </SignedIn>
    </>
  );
}
