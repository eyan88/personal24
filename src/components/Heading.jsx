import { motion } from 'framer-motion';

export default function Heading({ title }) {
    return (
        <div className="flex items-center justify-center">
            <h2 className="text-tertiary-100 font-satoshi-bold text-[3rem] md:text-heading-2">
                <motion.span 
                initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: "true" }} transition={{ ease:"easeIn", duration: 0.2 }}
                className="">
                    {title}
                </motion.span>
            </h2>
        </div>
    )
}