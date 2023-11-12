import React from 'react'



export default function Header() {
  return (

    
    <header className='bg-slate-950 shadow-md'>

        <div className='flex justify-between items-center max-w-6xl p-6 mx-auto'>

            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-white'>Propiedades</span>
                <span className='text-yellow-300'>WEB.fel</span>
            </h1>

            <form>
                 <input type="text" placeholder="Search..." />
            </form>

            

        </div>
        
        

    </header>
  );
}
