'use client';

import { useState } from 'react';

export default function Dashboard({ projects, teams }) {
  const [projectList, setProjectList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [project, setProject] = useState('');
  const [team, setTeam] = useState('');

  function selectProject(id) {
    const selectedProject = projects.filter((proj) => id === proj._id);

    setTeamList(selectedProject[0].teams[0].name);
    setProject(selectedProject[0]);
    setTeam('');
    console.log(selectedProject[0].teams[0].name);
  }

  function selectTeam(id) {
    const selectedTeam = teams.filter((team) => id === team._id);

    setTeam(selectedTeam[0]);
    setProjectList(selectedTeam[0].projects[0].name);
    setProject('');
    console.log(selectedTeam);
  }

  return (
    <>
      <section className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-4'>
          <div className='dropdown dropdown-hover'>
            <label tabIndex={0} className='btn m-1'>
              Projects
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52'
            >
              {projects.map((project) => (
                <li key={project._id}>
                  <button onClick={() => selectProject(project._id)}>
                    <a>{project.name}</a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='dropdown dropdown-hover'>
            <label tabIndex={0} className='btn m-1'>
              Teams
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52'
            >
              {teams.map((team) => (
                <li key={team._id}>
                  <button onClick={() => selectTeam(team._id)}>
                    <a>{team.name}</a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className='flex items-center gap-4'>
          <div className='dropdown dropdown-hover'>
            <label
              tabIndex={0}
              className='btn m-1 flex items-center gap-2 hover:bg-accent-focus bg-slate-600'
            >
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
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
              Projects
            </label>
          </div>
          <div className='dropdown dropdown-hover'>
            <label
              tabIndex={0}
              className='btn m-1 flex items-center gap-2 hover:bg-accent-focus bg-slate-600'
            >
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
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
              Teams
            </label>
          </div>
        </section>
      </section>
      <hr className='h-[0.09rem] bg-success my-8' />
      <section>
        {project ? (
          <>
            <div className='flex gap-2 mb-4'>
              <h1 className='text-3xl  font-bold'>Project:</h1>
              <span className='text-3xl'>{project.name}</span>
            </div>
            <h2 className='text-xl font-bold'>Description:</h2>
            <p className='mb-4'>{project.description}</p>
            <div className='flex gap-2 mb-4'>
              <h2 className='text-xl font-bold'>Assigned to Team: </h2>
              <span className='text-xl'>{teamList}</span>
            </div>
          </>
        ) : team ? (
          <>
            <div className='flex gap-2 mb-4'>
              <h1 className='text-3xl  font-bold'>Team:</h1>
              <span className='text-3xl'>{team.name}</span>
            </div>

            <div className='flex gap-2 mb-4'>
              <h2 className='text-xl font-bold'>Assigned to Project: </h2>
              <span className='text-xl'>{projectList}</span>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
