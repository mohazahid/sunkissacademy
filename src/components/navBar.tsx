import React, {useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useNavigate, useLocation } from 'react-router-dom'
import MomBorder from '../img/MomBorder.png'
export default function NavBar () {
    // const [BurgerOpen, setBurgerOpen] = useState(false)

    // const toggleBurger = () => {
    //     setBurgerOpen(false)
    // }

    // const handleScroll = (_id: any) => {
    //     const element = document.getElementById(_id)
    //     if(element) {
    //     element.scrollIntoView({behavior: 'smooth'})
    //     }
    //     toggleBurger()
    // }
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()
    const [BurgerOpen, setBurgerOpen] = useState(false)
  

  const toggleBurger = () => {
    setBurgerOpen(false)
  }
  const handleNav = (_id: string) => {
    navigate(`${_id}`)
    toggleBurger()
  }

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

    return (
        <nav style={{ userSelect: "none" }} className={`bg-[#9cdee7] font-BubblyBold sticky px-4 py-5 flex justify-start items-center top-0 w-full transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <button className = {'text-2xl'}onClick={() => navigate('/')}>Sunkiss Academy</button>
            <section>
            <div className='lg:hidden' onClick={() => setBurgerOpen((prev) => !prev)}>
          <button className='navbar-burger flex items-center text-black absolute -right-2 transform -translate-y-1/2 -translate-x-1/2'>
            {BurgerOpen ? <XMarkIcon className='h-8 w-8 text-gray-600' /> : <Bars3Icon className='h-8 w-8 text-gray-600' />}
          </button>
        </div>
        <div className={BurgerOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div className='absolute top-0 right-0 px-8 py-8' onClick={() => setBurgerOpen(false)} >
            
            <svg
              className='h-8 w-8 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='flex flex-col items-center justify-between min-h-[250px]'>
            <li className={` border-gray-400 mb-4 font-primary ${location.pathname === '/home' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/')} >Home</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/about' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/about')}>About Us</button>
            </li>
           
       
          </ul>
        </div>
      </section>

      <ul className='hidden absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-12 lg:mx-auto lg:flex lg:items-center lg:w-auto max-w-screen-xl z-50'>
        <li>
          <button 
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`} 
            onClick={() => navigate('/')}>
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              fill='none' viewBox='0 0 24 24' 
              strokeWidth={1.5} 
              stroke='currentColor' 
              className='w-7 h-7'>
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
            </svg>
          Home
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/about' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/about')}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className='w-7 h-7'
            >
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
            
            About us
          </button>
        </li>
      </ul>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
        </nav>
        );
}