import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/assets/IMG_1467.jpg";
import { motion } from "framer-motion";

const container= (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{delay:delay, duration:0.5}
    },
});


const Hero=()=>{
    return(
        <div className="border-b border-white pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                initial="hidden"
                animate="visible"
                variants={container(0)}
                className="pd-16 text-6xl font-thick tracking-tight lg:mt-16 lg:text-8xl fontWeight:bold ">Arpita Gaur</motion.h1>
                <motion.span
                initial="hidden"
                animate="visible"
                variants={container(0.5)} 
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Mern Stack Developer
                </motion.span>
                <motion.p 
                initial="hidden"
                animate="visible"
                variants={container(1)}
                className="my-2 max-w-xl py-6 font-dark fontSize:200px tracking-tighter">{HERO_CONTENT}</motion.p>


                </div>

                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{delay:1.2, duration:1}}
                    src={profilePic} alt="Arpita Gaur"/>
                    </div></div>
            </div>
        </div>
    );

};

export default Hero;