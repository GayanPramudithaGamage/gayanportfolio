import { CONTACT } from "../constants"
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="my-4 ">{CONTACT.address}</motion.p>
            <motion.p
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="my-4 ">{CONTACT.phoneNo}</motion.p>
            <a className="my-4 border-b">{CONTACT.email}</a>
            <div className="my-4">
              <a href="https://drive.google.com/file/d/13TWO6osg408rvlPNE45j87m4vZF7Kmaz/view?usp=sharing">Download Resume </a>            
            </div>
            
        </div>
    </div>
  )
}

export default Contact