import { HERO_CONTENT } from "../constants";
import portfolio from "../assets/profile1.jpg";
import resume from "../assets/YASH-Resume.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, opacity: 1, transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center border-b border-transparent pb-4 lg:mb-35">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Yash Nandeshwar
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.div
                        variants={container(1.2)}
                        initial="hidden"
                        animate="visible"
                        className="w-full flex justify-center lg:justify-start mt-4">
                        <a
                            href={resume}
                            download
                            className="block mt-4 w-15 lg:w-auto rounded bg-blue-500 px-6 py-2 text-white font-medium hover:bg-blue-600 text-center m-8">
                            Download Resume
                        </a>

                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={portfolio}
                        width={550}
                        height={550}
                        alt="Yash Nandeshwar"
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
