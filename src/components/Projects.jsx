import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h1 className="my-20 text-center text-4xl">Meus Projetos</h1>
      <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <img src={project.image} width={150} height={150} alt={project.title} className="mb-10 rounded" />
                </div>
                <div className="w-full max-w-xl lg:w-3/4 flex">
                    <div>
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-10 text-neutral-500">{project.description}</p>
                        
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800 ">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <a href="https://efood-vercel.vercel.app/" className="bg-neutral-900 py-2 px-4 items-center self-start rounded mt-5">Acesse</a>
                </div>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
