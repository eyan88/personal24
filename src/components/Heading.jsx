import { motion } from 'framer-motion';

export default function Heading({ title }) {
    return (
        <div className="relative flex items-center justify-center">
            <h1 className="text-tertiary-100">
                <motion.span 
                initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: "true" }} transition={{ ease:"easeIn", duration: 0.2 }}
                className="">
                    {title}
                </motion.span>
            </h1>
        </div>
    )
}