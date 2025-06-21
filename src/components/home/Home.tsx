import avtarImg from "../../assets/images/7358602-removebg-preview.png"
import { TextChange } from "../TextChange";
const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Monali Warghane_Updated_v1.pdf'; 
    link.download = 'Monali_Warghane_Resume.pdf';
    link.click();
  };

  return (
    <div className='text-white flex w-full justify-between items-center p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex loading-normal tracking-tighter'>
          <TextChange/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2">
          I design and develop modern web and mobile interfaces using React & React Native.
          With 2+ years of hands-on experience, I turn ideas into smooth digital experiences.
        </p>
        <button 
          onClick={handleDownload}
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]
          ">
          Download CV
        </button>
      </div>
      <div>
        <img className="" src={avtarImg} alt=""/>
      </div>
    </div>
  )
  
}

export default Home