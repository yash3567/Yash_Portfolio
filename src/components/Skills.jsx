import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiJavascript, SiPython, SiC, SiGit } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaLinux } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (direction) => ({
    initial: { y: direction === 'up' ? -10 : 10 },
    animate: {
        y: direction === 'up' ? [10, -10] : [-10, 10],
        transition: {
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Skills = () => {
    return (
        <section id="skills" className="border-b border-transparent pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                 Key Skills
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('up')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.a>
                <motion.a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('down')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <SiExpress className="text-7xl text-white" />
                </motion.a>
                <motion.a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('up')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.a>
                <motion.a
                    href="https://nodejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('down')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.a>
                <motion.a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('up')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.a>
                <motion.a
                    href="https://redis.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('down')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.a>
                <motion.a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('up')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <SiJavascript className="text-7xl text-yellow-500" />
                </motion.a>
                <motion.a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('down')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <SiPython className="text-7xl text-blue-500" />
                </motion.a>
                <motion.a
                    href="https://en.wikipedia.org/wiki/C_(programming_language)"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('up')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <SiC className="text-7xl text-blue-500" />
                </motion.a>
                <motion.a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('down')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <SiGit className="text-7xl text-red-600" />
                </motion.a>
                <motion.a
                    href="https://www.linux.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconVariants('up')}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-transparent p-4">
                    <FaLinux className="text-7xl text-yellow-500" />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Skills;
