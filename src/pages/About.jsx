import React from 'react'

const About = () => {
  return (
    <div className='flex justify-around m-10 items-center'>
        <div className='w-96'>
            <h1 className='font-bold text-2xl'>#MAIN HEADING</h1>
            <p className='font-thin font-desc text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti corporis perferendis, beatae eum ab veniam? Laudantium blanditiis, nulla, quibusdam omnis consequatur aperiam earum ipsam dolorem unde itaque quos eius nisi iste praesentium sunt maxime impedit fuga saepe? Nobis corrupti, provident laborum quam ullam inventore itaque vel doloremque eos velit!
            </p>
        </div>
        <div>
            <img src="https://i.pinimg.com/1200x/94/ce/21/94ce21666dab75ec4bceb9c953073aca.jpg" alt="" className='h-[70svh] w-[40svw]'/>
        </div>
    </div>
  )
}

export default About