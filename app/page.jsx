import { Inter } from 'next/font/google';

import { createClient } from 'next-sanity';

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

export default async function Home() {
  const projects = await client.fetch(`*[_type == 'projects']`);
  console.log(projects);

  return (
    <>
      {projects.map((project) => (
        <section key={project._id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </section>
      ))}
    </>
  );
}
