import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='text-accent bg-white w-fit flex justify-center items-center p-3 shadow-black rounded-full mx-auto cursor-pointer'
        whileHover={{scale:1.20}}
        initial={{x:0,y:0}}
        animate={{x:x,y:y}}
        transition={{duration: 1.5}}
        >
            {name}
        </motion.div>
    )
}

const MyTagcloud = () => {


  return (
    <div className=' h-full mt-52 mb-32'>
        <h2 className="
              xl:text-[42px] text-[26px] font-bold leading-none md:mb-20 text-accent w-full flex justify-center mb-10"
              >
                Our Skills
              </h2>


              {/* desktop view */}
              
            <div className='radial-gradient hidden xl:flex items-center justify-between w-screen h-full'>
                <motion.div className='text-accent bg-white flex justify-center items-center p-3 shadow-black rounded-full mx-auto cursor-pointer'
                whileHover={{scale:1.20}}
                initial={{x:0,y:0}}
                animate={{x:0,y:0}}
                >HTML</motion.div>

            </div>
            <div className='hidden xl:block'>
            <Skill name='CSS' x="-5vw" y='-10vw' />
            <Skill name='SASS' x="-20vw" y='-40vw' />
            <Skill name='Javascript' x="-30vw" y='-60vw' />
            <Skill name='React' x="40vw" y='-50vw' />
            <Skill name='Vue' x="20vw" y='-40vw' />
            <Skill name='Nuxt' x="5vw" y='-70vw' />
            <Skill name='NodeJs' x="-40vw" y='-40vw' />
            <Skill name='Babel' x="-38vw" y='-58vw' />
            <Skill name='Jquery' x="37vw" y='-50vw' />
            <Skill name='ES6' x="-7vw" y='-85vw' />
            <Skill name='GIT' x="14vw" y='-80vw' />
            <Skill name='Github' x="26vw" y='-56vw' />
            </div>

             {/* mobile view */}

             <div className='radial-gradient flex xl:hidden sp:hidden md:hidden items-center justify-between w-screen h-full'>
                <motion.div className='text-accent bg-white flex justify-center items-center p-3 shadow-black rounded-full mx-auto cursor-pointer'
                whileHover={{scale:1.20}}
                initial={{x:0,y:0}}
                animate={{x:0,y:0}}
                >HTML</motion.div>

            </div>
            <div className='block xl:hidden sp:hidden md:hidden'>
            <Skill name='CSS' x="-40vw" y='-80vw' />
            <Skill name='SASS' x="-20vw" y='-40vw' />
            <Skill name='Javascript' x="-30vw" y='-180vw' />
            <Skill name='React' x="40vw" y='-50vw' />
            <Skill name='Vue' x="20vw" y='-110vw' />
            <Skill name='Nuxt' x="5vw" y='-250vw' />
            <Skill name='NodeJs' x="-20vw" y='-150vw' />
            <Skill name='Babel' x="38vw" y='-230vw' />
            <Skill name='Jquery' x="30vw" y='-270vw' />
            <Skill name='ES6' x="-2vw" y='-265vw' />
            <Skill name='GIT' x="14vw" y='-166vw' />
            <Skill name='Github' x="30vw" y='-256vw' />
            </div>
{/* not responsive on 768-1024px && 540px  */} 

            {/* medium view */}

            <div className='radial-gradient md:flex sp:hidden xl:hidden hidden items-center justify-between w-screen h-full'>
                <motion.div className='text-accent bg-white flex justify-center items-center p-3 shadow-black rounded-full mx-auto cursor-pointer'
                whileHover={{scale:1.20}}
                initial={{x:0,y:0}}
                animate={{x:0,y:0}}
                >HTML</motion.div>

            </div>
            <div className='md:block xl:hidden sp:hidden hidden'>
            <Skill name='CSS' x="-40vw" y='-80vw' />
            <Skill name='SASS' x="-20vw" y='-40vw' />
            <Skill name='Javascript' x="-30vw" y='-150vw' />
            <Skill name='React' x="40vw" y='-50vw' />
            <Skill name='Vue' x="20vw" y='-110vw' />
            <Skill name='Nuxt' x="5vw" y='-166vw' />
            <Skill name='NodeJs' x="-20vw" y='-150vw' />
            <Skill name='Babel' x="38vw" y='-150vw' />
            <Skill name='Jquery' x="30vw" y='-100vw' />
            <Skill name='ES6' x="-2vw" y='-105vw' />
            <Skill name='GIT' x="14vw" y='-166vw' />
            <Skill name='Github' x="12vw" y='-90vw' />
            </div>

            {/* 540px */}

            <div className='radial-gradient md:hidden sp:flex xl:hidden hidden items-center justify-between w-screen h-full'>
                <motion.div className='text-accent bg-white flex justify-center items-center p-3 shadow-black rounded-full mx-auto cursor-pointer'
                whileHover={{scale:1.20}}
                initial={{x:0,y:0}}
                animate={{x:0,y:0}}
                >HTML</motion.div>

            </div>
            <div className='sp:block xl:hidden md:hidden hidden'>
            <Skill name='CSS' x="-40vw" y='-80vw' />
            <Skill name='SASS' x="-20vw" y='-40vw' />
            <Skill name='Javascript' x="-30vw" y='-150vw' />
            <Skill name='React' x="40vw" y='-50vw' />
            <Skill name='Vue' x="30vw" y='-170vw' />
            <Skill name='Nuxt' x="5vw" y='-166vw' />
            <Skill name='NodeJs' x="-20vw" y='-150vw' />
            <Skill name='Babel' x="38vw" y='-150vw' />
            <Skill name='Jquery' x="35vw" y='-130vw' />
            <Skill name='ES6' x="-2vw" y='-105vw' />
            <Skill name='GIT' x="14vw" y='-166vw' />
            <Skill name='Github' x="12vw" y='-90vw' />
            </div>


    </div>
    
  )
}

export default MyTagcloud