
import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/projects'

export const Projects:React.FC = () => {

  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h2 className='text-2xl md:text-4xl font-bold'>Projects</h2>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
          {
            projects.map((items)=>{
              return <ProjectCard 
              key={items.id}
              icon={items.icon}
              title={items.title} 
              main={items.main}/>
            })
          }
        </div>
    </div>
  )
}
