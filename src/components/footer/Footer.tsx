import { contactData } from "../../data/contact"

export const Footer = () => {

  return (
    <div id="Contact" className='flex md:flex-row flex-col justify-center items-center md:justify-around bg-[#465697] text-white p-10 md:p-12'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To reach out !</h3>
        </div>

        <ul className='text-sm md:text-xl'>
            {
                contactData.length && contactData.map((item) =>{
                    return (
                        <>
                            <li  key={item.id} className="p-2 cursor-pointer">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row gap-2 items-center "
                                    >
                                    <img src={item.icon} className="h-6" alt="icon" />
                                    <span>{item.contactName}</span>
                                </a>
                            </li>
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}
