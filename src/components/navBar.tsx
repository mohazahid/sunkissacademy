import React, {useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useNavigate, useLocation } from 'react-router-dom'

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
        <nav className={`sticky px-4 py-5 flex justify-start items-center top-0 w-full transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <button onClick={() => navigate('/')}>Sunkiss Academy</button>
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
              <button onClick={() => handleNav('/home')} >Home</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/discover' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/discover')}>Discover</button>
            </li>
            <li className={` border-gray-400 my-4 font-primary ${location.pathname === '/create-project' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}>
              <button onClick={() => handleNav('/create-project')}>Create</button>
            </li>
       
          </ul>
        </div>
      </section>

      <ul className='hidden absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-12 lg:mx-auto lg:flex lg:items-center lg:w-auto max-w-screen-xl z-50'>
        <li>
          <button 
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/home' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`} 
            onClick={() => navigate('/home')}>
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
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/discover' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/discover')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
            </svg>
            Discover
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/create-project' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/create-project')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            Create
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${location.pathname === '/inbox' ? 'text-indigo-600' : 'hover:text-slate-500'
            }`}
            onClick={() => navigate('/inbox')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none' viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z' />
            </svg>
            Inbox
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