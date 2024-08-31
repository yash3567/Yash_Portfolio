import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const WorkExperience = () => {
    return (
        <section className="pt-20" id="work">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-4xl font-semibold tracking-tighter">Work Experience</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="space-y-8 p-10">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                        key={index} className="rounded-xl border border-stone-50/30 bg-white/10 p-4">
                        <h3 className="text-2xl font-semibold">{experience.title}</h3>
                        <p className="text-xl">{experience.company}</p>
                        <p className="text-sm text-stone-300">{experience.duration}</p>
                        <p className="mt-2 text-base">{experience.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default WorkExperience
