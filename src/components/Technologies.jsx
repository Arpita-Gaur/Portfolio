import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMongodb} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { motion } from 'framer-motion';


const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}} 
        
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}

        
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"                        
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <IoLogoHtml5 className="text-7xl text-orange-400"/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <IoLogoCss3 className="text-7xl text-blue-700 "/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <TbBrandNextjs className="text-7xl "/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <FaNodeJs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <SiExpress className="text-7xl "/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <TbBrandCpp className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <FaJava className="text-7xl text-blue-300"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <AiOutlinePython className="text-7xl "/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <SiMysql className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-#F5F5F5 p-4">
            <SiOracle className="text-7xl text-red-500"/>
            </motion.div> 
    </motion.div>
    </div>
  );
};

export default Technologies;