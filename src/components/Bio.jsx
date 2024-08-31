import { BIO } from "../constants"
import { motion } from "framer-motion"

const Bio = () => {
    return (
        <section className="flex max-w-4xl flex-col gap-12 pt-20" id="about">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-3xl lg:text-4xl">About Me</motion.h2>
            < motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
            >

                {BIO.map((bio, index) => (
                    <p key={index} className="mb-4 text-lg lg:text-xl">
                        {bio}
                    </p>
                ))}
            </motion.div>

        </section>
    )
}

export default Bio
