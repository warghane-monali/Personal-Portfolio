import { MoveRight } from 'lucide-react'
import aboutImg from '../../assets/images/7358653-removebg-preview.png'

export const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80' src={aboutImg}/>

                <ul>
                    <div className='flex gap-3 py-4'>
                        <span className='w-100'>
                            <div className='flex flex-row items-center gap-2'>
                                <MoveRight/>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                                    Frontend Developer
                                </h1>
                            </div>
                        
                        <p className='text-md md:text-lg leading-tight'>
                            Frontend Developer specialized in ReactJS & React Native with 2+ years of hands-on experience in developing scalable, high-performance web and mobile applications. Strong expertise in building reusable UI components, managing state with Redux Toolkit, and integrating REST APIs. Proficient in delivering end-to-end solutions using ReactJS, React Native. Passionate about building user-centric products and optimizing user experience.</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}
