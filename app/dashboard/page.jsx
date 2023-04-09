import { Inter } from 'next/font/google';
import { createClient } from 'next-sanity';
import { SignedIn } from '@clerk/nextjs/app-beta';

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

  return (
    <>
      <main className='w-full h-full'>
        <div className='max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] h-full m-auto'>
          {projects.map((project) => (
            <SignedIn>
              <section key={project._id}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </section>
            </SignedIn>
          ))}
        </div>
      </main>
    </>
  );
}
