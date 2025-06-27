
import htmlImg from "../../assets/images/html5-svgrepo-com.svg";
import cssImg from "../../assets/images/css-3-svgrepo-com.svg"
import reactImg from "../../assets/images/react-logo-svgrepo-com.svg"
import typescriptImg from "../../assets/images/typescript-svgrepo-com.svg"
import tailwindImg from "../../assets/images/tailwindcss-icon-svgrepo-com.svg"
import javascriptImg from "../../assets/images/javascript-svgrepo-com.svg"
import reactNativeImg from "../../assets/images/react-svgrepo-com.svg"

export const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap gap-8 md:p-12 py-10">
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={htmlImg}/>
                    <p className="text-white text-sm font-bold p-2">HTML5</p>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={cssImg} alt="HTML Icon" />
                    <p className="text-white text-sm font-bold p-2">CSS3</p>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={javascriptImg} alt="HTML Icon" />
                    <p className="text-white text-sm font-bold p-2">Javascript</p>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={reactImg} alt="HTML Icon" />
                    <p className="text-white text-sm font-bold p-2">ReactJs</p>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={reactNativeImg} alt="HTML Icon" />
                    <p className="text-white text-sm font-bold p-2">React Native</p>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={tailwindImg} alt="HTML Icon" />
                    <p className="text-white text-sm font-bold p-2">Tailwind CSS</p>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:opacity-85 duration-300 hover:scale-105 flex-col">
                    <img className="h-10" src={typescriptImg} alt="HTML Icon" />
                    <p className="text-white text-sm font-bold p-2">Typescript</p>
                </span>
            </div>

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4">
                <span className="text-white">
                    <h2 className="text-md md:text-lg leading-tight">Solution Developer</h2>
                    <p className="text-sm leading-tight font-thin">April 2023 - June 2025</p>
                    <ul className="text-md md:text-lg p-2">
                        <li>• Developed responsive web and mobile UIs using ReactJS and React Native.</li>
                        <li>• Managed state with Redux to ensure smooth user experiences.</li>
                        <li>• Integrated backend APIs for efficient data handling and real-time updates.</li>
                        <li>• Maintained clean code standards and used Git for effective version control and debugging.</li>
                    </ul>
                </span>
            </div>

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 mt-4">
                <span className="text-white">
                    <h2 className="text-md md:text-lg leading-tight">Frontend Developer Intern</h2>
                    <p className="text-sm leading-tight font-thin">June 2022 - April 2023</p>
                    <ul className="text-md md:text-lg p-2">
                        <li>• Assisted in developing responsive user interfaces using ReactJS and React Native.</li>
                        <li>• Gained hands-on experience in managing state with Redux for seamless UI interactions.</li>
                        <li>• Contributed to integrating RESTful APIs to support dynamic data rendering.</li>
                        <li>• Followed clean code practices and collaborated using Git for version control.</li>
                        </ul>
                </span>
            </div>
        </div>
    </div>
  )
}
