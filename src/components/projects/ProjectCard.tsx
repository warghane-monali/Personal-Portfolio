import type React from "react"

interface ProjectCardProps {
  icon: string;
  title: string;
  main: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({icon,title, main}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-950 rounded-2xl'>
      <img src={icon} className='h-40 rounded-lg m-2'/>
        <h3 className='px-4 text-xl md:text-2xl font-bold loading-normal'>{title}</h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        
        <div className="p-2 md:p-4 flex gap-2 md:gap-4">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Demo</button>
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Source Code</button>
        </div>
    </div>
  )
}
