import React from 'react'
import logo from '../assets/logo2.png'
import flag from '../assets/flag.jpg'

const Footer = () => {
    const links1 = ['Help','Contact','Security','Apps','Shop','Enterprise','Partners']
    const links2 = ['About','Newsroom','Jobs','Investor Relations','Values in Action','Public Policy','Sitemap']
    const links3 =['Accessibility','Privacy','Cookies','Legal']
  return (
    <div className='bg-white p-6'>
        <img 
        src={logo}
        className='h-12'
        alt='logo'
        />
        <div className='flex  gap-4 my-4 text-primary font-bold text-sm  lg:justify-between'>
            <div className='flex flex-wrap gap-2'>
                {links1.map((a)=>(
                    <p key={a}>{a}</p>
                ))}
            </div>
            <img 
            className='h-8 w-8'
            src={flag}
            alt='flag'/>
        </div>
        <hr className='w-full'/>
        <div className='flex justify-between my-4'>
            <div className='flex flex-col gap-3 text-sm  text-primary font-bold lg:flex-row'>
                    {links2.map((a)=>(
                         <p key={a}>{a}</p>
                    ))}
            </div>
            <div className='flex flex-col text-primary gap-3 text-sm  font-bold lg:flex-row'>
                    <p className=' font-medium text-gray-500'>&copy; 1999-2022</p>
                    {links3.map((a)=>(
                         <p key={a}>{a}</p>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Footer