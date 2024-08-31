import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const EducationSection = () => {
    return (
        <section className="py-8" id="education">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-4 text-center text-3xl font-bold">Education</motion.h2>
            {EDUCATION.map((edu, index) => (
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    key={index} className="mb-6 p-10">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="teext-lg ">{edu.institution}</p>
                    <p className="text-sm text-stone-300">{edu.duration}</p>
                    <p className="mt-2">{edu.description}</p>
                </motion.div>
            ))}
        </section>
    )
}

export default EducationSection
