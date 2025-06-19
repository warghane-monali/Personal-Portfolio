import { contactData } from "../../data/contact"

export const Footer = () => {

  return (
    <div id="Contact" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To reach out !</h3>
        </div>

        <ul className='text-sm md:text-xl'>
            {
                contactData.length && contactData.map((item) =>{
                    return (
                        <>
                            <li className="flex gap-2 items-center p-2">
                                <img src={item?.icon} className="h-5"/>
                                <span>{item?.contactName}</span>
                            </li>
                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}
