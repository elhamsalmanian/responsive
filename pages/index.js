
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import desktopImg from './images/desktop.jpg'


const test = () => {
  return (
    <div className='w-screen  min-h-screen  flex justify-center overflow-scroll m-auto'>
        <div className="mobile:w-[90%] tablet:w-[80%] desktop:w-[70%]  flex flex-col">
            <div className='w-full  relative 
                            mobile:bg-mobile-header-img  mobile:h-[200px]
                            tablet:bg-tablet-header-img  tablet:h-[300px]
                            desktop:bg-desktop-header-img  desktop:h-[400px]                            
                            bg-cover bg-no-repeat bg-center '>                
                <div className='absolute top-10 left-0  bg-white 
                                mobile:bg-mobile-logo-img  mobile:w-[120px] mobile:h-[60px]
                                tablet:bg-tablet-logo-img  tablet:w-[160px] tablet:h-[80px]
                                desktop:bg-desktop-logo-img  desktop:w-[200px] desktop:h-[100px]
                                bg-no-repeat bg-center bg-origin-content p-3 '
                                ></div>                 
            </div>
            <div className=' mobile:hidden tablet:block desktop:block w-full h-[40px] bg-[#69C2EA] py-2 px-10 text-gray-200 font-semibold '>
                <Link href="/" >
                    <a className='px-2'>ABOUT US</a>
                </Link>
                <Link href="/" >
                    <a className='px-2'>SERVICES</a>
                </Link>
                <Link href="/" >
                    <a className='px-2'>PORTFOLIO</a>
                </Link>
                <Link href="/" >
                    <a className='px-2'>CANTACT US</a>
                </Link>
            </div>
            <div className=' h-[100%] flex 
                             mobile:flex-col 
                             tablet:flex-row 
                             desktop:flex-row 
                             justify-between'>
                <div className='mobile:w-[100%]  tablet:w-[65%]  desktop:w-[65%]  p-5 flex flex-col'>
                    <div>
                        <h1 className='text-2xl font-bold '>Welcome</h1>
                        <p className=''>
                         Ability to manage multiple responsibilities, Great communication skills, Well-versed in JavaScript, HTML5, CSS3, TailwindCss, MaterialUi, React, Git, Next.js.
                         I am detail-orientated and I always keep my goals and tasks organized to maintain productivity.
                         Known as a self-starter, team player, and strive to consistently exceed expectations. Love to collaborate and share my ideas with team members to ship beautiful products within deadlines.
                        </p>
                    </div>
                    <div className='flex mobile:flex-col tablet:flex-row desktop:flex-row mt-10 '>
                        <div className='w-[50%] mobile:w-[80%] flex  mobile:flex-row tablet:flex-col desktop:flex-row  '>
                            <img src='/images/profile_1.jpg' className='w-[60px] h-[60px]' />
                            <div className='px-3 break-all' >
                                <h1 className='font-semibold mb-1 text-pink-600'>Elham Salmanian</h1>
                                <p className=''>
                                  Ability to manage multiple responsibilities, Great communication skills, Well-versed in JavaScript, HTML5, CSS3, TailwindCss, MaterialUi, React, Git, Next.js.
                                  I am detail-orientated and I always keep my goals and tasks organized to maintain productivity.
                                  Known as a self-starter, team player, and strive to consistently exceed expectations. Love to collaborate and share my ideas with team members to ship beautiful products within deadlines.
                                </p>
                            </div>
                        </div>
                        <div className='w-5  mobile:h-10'></div>
                        <div className='w-[50%] mobile:w-[80%] flex flex-row mobile:flex-row tablet:flex-col desktop:flex-row '>
                            <img src='/images/profile_2.jpg ' className='w-[60px] h-[60px]' />
                            <div className='px-3 break-all'>
                                <h1 className='font-semibold mb-1 text-pink-600'>Elham Salmanian</h1>
                                <p className=''>
                                  Ability to manage multiple responsibilities, Great communication skills, Well-versed in JavaScript, HTML5, CSS3, TailwindCss, MaterialUi, React, Git, Next.js.
                                  I am detail-orientated and I always keep my goals and tasks organized to maintain productivity.
                                  Known as a self-starter, team player, and strive to consistently exceed expectations. Love to collaborate and share my ideas with team members to ship beautiful products within deadlines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile:w-[90%] tablet:w-[40%] desktop:w-[35%]  flex flex-col p-5 flex justify-end px-11 '>
                  
                        <label className='mb-1'>First Name</label>
                        <input type='text' className='bg-gray-100 outline-none text-md mobile:w-[100%] tablet:w-[100%] desktop:w-[80%]  p-1 rounded-md' required />
                                     
                        <label className='mt-3 mb-1'>Last Name</label>
                        <input type='text' className='bg-gray-100 outline-none text-md mobile:w-[100%] tablet:w-[100%] desktop:w-[80%]  p-1 rounded-md' required />
                 
                        <label className='mt-3 mb-1'>Title</label>
                        <input type='text' className='bg-gray-100 outline-none text-md mobile:w-[100%] tablet:w-[100%] desktop:w-[80%]  p-1 rounded-md' required />
                  
                        <label className='mt-3 mb-1'>Email Address</label>
                        <input type='text' className='bg-gray-100 outline-none text-md mobile:w-[100%] tablet:w-[100%] desktop:w-[80%]  p-1 rounded-md' required />
               
                        <label className='mt-3 mb-1'>Phone</label>
                        <input type='text' className='bg-gray-100 outline-none text-md mobile:w-[100%] tablet:w-[100%] desktop:w-[80%]  p-1 rounded-md' required />
                   
                        <label className='mt-3 mb-1'>Already A Client</label>                      
                        <select  className='bg-gray-100 outline-none text-md w-[80%] mobile:w-[100%] tablet:w-[100%] desktop:w-[80%]  p-1 rounded-md '>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                       
                        <button className=' w-[80%]  bg-gray-200 p-2 my-5 py-top-7' >Contact Us</button>

                </div>
            </div>
            <div className=''>
            </div>
            <div className='w-full h-[40px]  mobile:bg-gray-200 py-2 px-10 text-pink-600  '>
                <p>copyright @ 2013</p>
            </div>
        </div>
        
    </div>
  )
}

export default test