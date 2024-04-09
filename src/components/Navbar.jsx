import React,{useState} from 'react'
import logo from '../assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const[open,setOpen] = useState(false);
    const[activeBtn,setActiveBtn]=useState('signup')

    const links = ['Personal','Business','Developer','Help']

  return (
    <div className='bg-white relative'>
        <div className=' border-b px-10 py-4 w-full flex justify-between'>
            <div className='flex gap-6 items-center text-lg last:flex last:gap-4'>
                <img className='w-16 h-16 mx-10' src={logo} alt='logo'/>
                <ul className=' gap-4 hidden lg:flex'>
                    {links.map((a)=>(
                        <li key={a}>{a}</li>
                    ))}
                </ul>
            </div>
            <div className=' items-center hidden lg:flex gap-4'>
                <button onClick={()=>setActiveBtn('login')} className={`text-primary rounded-full border px-6 py-1.5 border-primary ${activeBtn==='login' ? ' text-white bg-primary':''}`}>Log In</button>
                <button onClick={()=>setActiveBtn('signup')} className={`text-primary rounded-full border px-6 py-1.5 border-primary ${activeBtn==='signup' ? ' text-white bg-primary':''}`}>Sign Up </button>
            </div>
            <button onClick={()=>setOpen(!open)} className=' transform duration-150 after:translate-x-1 lg:hidden text-xl w-10 h-10 rounded-full text-center flex items-center justify-center shadow-xl border '>
                {
                open ? <span className='text-2xl mb-2'>x</span> :   <FontAwesomeIcon icon={faBars} />
                }
            </button>
        
        </div>
        {open && (
                <div className='flex justify-end mx-10'>

                    <div className=" translate-y-2 duration-100 transition-all after:translate-x-3 font-semibold flex flex-col gap-3 mt-4 lg:hidden justify-center items-center">
                    {links.map((a)=>(
                        <li className='hover:underline list-none' key={a}>{a}</li>
                    ))} 
                    <button onClick={()=>setActiveBtn('login')} className={`text-primary rounded-full border px-6 py-1.5 border-primary ${activeBtn==='login' ? ' text-white bg-primary':''}`}>Log In</button>
                <button onClick={()=>setActiveBtn('signup')} className={`text-primary rounded-full border px-6 py-1.5 border-primary ${activeBtn==='signup' ? ' text-white bg-primary':''}`}>Sign Up </button>
                    </div>
                </div>
        )}
    </div>
  )
}

export default Navbar