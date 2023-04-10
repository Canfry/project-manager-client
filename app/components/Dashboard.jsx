'use client';

export default function Dashboard({ projects, teams }) {
  function selectProject(id) {
    const selectedProject = projects.filter((proj) => id === proj._id);

    console.log(selectedProject);
    return selectedProject;
  }

  return (
    <>
      <section className='flex items-center gap-4'>
        <div className='dropdown dropdown-hover'>
          <label tabIndex={0} className='btn m-1'>
            Projects
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
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
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            {teams.map((team) => (
              <li key={team._id}>
                <a>{team.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className='h-[0.09rem] bg-success mt-8' />
      <section></section>
    </>
  );
}
