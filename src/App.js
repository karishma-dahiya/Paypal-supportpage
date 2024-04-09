
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleQuestion, faHandshakeSimple, faMagnifyingGlass, faUserGroup, faXmark } from '@fortawesome/free-solid-svg-icons'
import hands from './assets/hands.png'
import messageicon from './assets/message-icon.png'
import hearthands from './assets/heart-hands.png'
import Footer from './components/Footer';
import Questions from './components/Questions';

function App() {
  const[showPopup,setShowPopup]=useState(true)
  const[activeHelpLink,setActiveHelpLink] = useState('Personal Help')
  const helps = ['Personal Help','Business Help','Technical Help']
  return (
    <>
      <Navbar/>
      <div className='px-10 lg:px-28 py-6'>
          <p className='text-sm font-medium text-blue-500'>Help Center</p>
          <div className='flex flex-col items-center my-4 '>
            <h3 className='text-2xl text-center mb-2 font-medium'>How can we help?</h3>
            <div className='w-full flex justify-center'>
              <div className='relative'>
                <input 
                  type='text'
                  placeholder='Search by keyword'
                  className='rounded-full lg:min-w-96 px-4 lg:w-1/2 my-2 border border-gray-600 py-1.5 pl-10'
                />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
            </div>
            {showPopup && (
              <div className='bg-[#fff0a8] flex gap-4 text-[#684b00] text-sm rounded-md p-4 lg:mx-10 my-4'>
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p >
                  Received a suspicious email, fake invoice or message? Don't reply, open links, download attachments, or call any listed phone numbers. We'll never ask for your PayPal password or financial details by email or message, or over the phone. Forward suspicious messages to <span className='hover:underline text-blue-600'>phishing@paypal.com</span> and then delete them.
                </p>
                <button onClick={()=>setShowPopup(!showPopup)} className=' max-h-fit flex items-start'>
                  <FontAwesomeIcon className='text-lg' icon={faXmark} />
                </button>
              </div>
            )}
            <div className='flex my-4 flex-col lg:flex-row w-full items-center gap-4 lg:justify-around'>
              <div className='border rounded-lg max-w-72 shadow-lg py-4 px-2 gap-4 flex'>
                <div className='bg-gray-100 h-12 w-12 rounded-full flex justify-center p-2'>
                  <img className='h-8 w-8' src={hands} alt='img'/>
                </div>
                <div>
                  <h5 className='font-semibold'>Resolution Center</h5>
                  <p>Resolve transaction or account issues</p>
                </div>
              </div>
              <div className='border rounded-lg max-w-72 shadow-lg py-4 px-2 gap-4 flex'>
                <div className='bg-gray-100 h-12 w-12 rounded-full flex justify-center p-2'>
                  <img className='h-8 w-8' src={hearthands} alt='img'/>
                </div>
                <div>
                <h5 className='font-semibold'>Ask the Community</h5>
                  <p>Find answers or join the conversation</p>
                </div>
              </div>
              <div className='border rounded-lg max-w-72 shadow-lg py-4 px-2 gap-4 flex'>
                <div className='bg-gray-100 h-12 w-12 rounded-full flex justify-center p-2'>
                  <img className='h-8 w-8' src={messageicon} alt='img'/>
                </div>
                <div>
                <h5 className='font-semibold'>Message Center</h5>
                  <p>Send, receive, and view your PayPal messages</p>
                </div>
              </div>
            </div>
            <div className='rounded-full my-4 border flex lg:w-1/2 text-gray-700 bg-gray-200'>
              {helps.map((a)=>(
                <button 
                onClick={()=>setActiveHelpLink(a)}
                key={a} 
                className={`${activeHelpLink===a ? 'bg-white text-blue-900 font-bold':''} p-2 font-semibold rounded-full lg:w-1/3 px-4 text-sm`}>{a}</button>
              ))}
            </div>
            <Questions/>
            <div className='my-8'>
              <h4 className='text-center text-2xl text-gray-700 my-4 mb-8'>More Ways to get help</h4>
                <div className='my-6 flex justify-center gap-10  flex-col lg:flex-row'>
                  <div className='flex flex-col gap-2 items-center'>
                    <div>
                    <FontAwesomeIcon icon={faUserGroup} className='text-3xl' />
                    </div>
                    <p className='font-semibold text-blue-700'>Community Forum</p>
                    <p className='max-w-40 text-sm text-gray-500 text-wrap text-center'>Find answers or join the conversation</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center'>
                    <div>
                    <FontAwesomeIcon icon={faHandshakeSimple} className='text-3xl' />
                    </div>
                    <p className='font-semibold text-blue-700'>Resolution Center</p>
                    <p className='max-w-40 text-sm text-gray-500 text-wrap text-center'>Resolve transaction or account issues</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center'>
                    <div>
                    <FontAwesomeIcon icon={faCircleQuestion} className='text-3xl' />
                    </div>
                    <p className='font-semibold  text-blue-700'>Contact us</p>
                    <p className='max-w-40 text-gray-500 text-sm  text-wrap text-center'>Contact Customer Service</p>
                  </div>
                </div>
            </div>
            <div className='bg-gray-200 w-full lg:w-2/3 rounded-sm p-8  lg:px-20 flex justify-between content-center items-center'>
                <div className='max-w-44'>
                  <h5 className='font-medium text-lg my-2'>How are we doing?</h5>
                  <p className='text-sm'>Help improve the 
                    <b> PayPal Help Center experience </b>
                    with some quick feedback.
                  </p>
                </div>
                <button className='bg-primary hover:bg-blue-950 text-nowrap text-xs sm:text-sm md:text-base lg:text-base text-white rounded-full max-h-10 px-4 py-2'>Take the survey</button>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
