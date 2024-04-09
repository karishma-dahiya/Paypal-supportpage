import React from 'react'
import { useState } from 'react'

const Questions = () => {
    const[quesType,setQuestype]=useState('Common Questions')

    const questions = ['How do I open a case with a seller?','I forgot my password. How do I reset it?','Why is my payment on hold or unavailable?','I want my money back. Can I cancel a payment?',"Why am I receiving emails from PayPal when I don't have an account?","How do I report an unauthorized transaction or account activity?","Why is the payment I sent pending? Can I cancel it?","How do I request a refund?","Why was my payment declined?","How do I change the name on my PayPal account?"]
    const types = ['Common Questions','PayPal Help Guides','Payments & Transfers','Disputes & Limitations','My Account','My Wallet','Login & Security','Seller Tools']

    return (
    <div className='flex flex-wrap gap-4 lg:justify-between  justify-center my-6 w-full lg:px-20 '>
        <div className=''>
            {types.map((a)=>(
                <div   key={a} >

                    <button 
                    onClick={()=>setQuestype(a)}
                  
                    className={`${quesType===a ? '  border-s-2 text-primary font-bold bg-blue-100  border-blue-600 ':'text-gray-600'}   my-3 text-sm lg:text-base font-medium p-2`}>{a}</button>
                </div>
            ))}
        </div>
        <div className='max-w-1/2'>
            <h2 className='lg:text-2xl text-xl font-semibold my-2 mb-6'>{quesType}</h2>
            {questions.map((a)=>(
                <div className='text-wrap font-bold text-blue-600 lg:text-base text-sm max-w-52 lg:max-w-80 my-2 p ' key={a}>{a}</div>
            ))}
        </div>
        <div className='bg-gray-100  flex flex-col items-center justify-center max-w-60 p-4 px-6 max-h-60 lg:max-h-56 rounded-sm'>
                <p className='text-wrap text-center font-bold font-serif '>Get customized help with your account and access your message center</p>
                <button className='px-4 p-1.5 text-primary font-medium border hover:text-white hover:bg-primary border-primary rounded-full my-2'>Log In</button>
        </div>
    </div>
  )
}

export default Questions