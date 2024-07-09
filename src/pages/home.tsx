import React from 'react';
import NavBar from '../components/navBar';

export default function HomePage() {
    return (
        
        <div className='h-[200vh]'> 
            <NavBar />
            <div className='h-[100vh] bg-blue-500'>
                <h1>Home Page</h1>
            </div>
        
        </div>
    )
}
