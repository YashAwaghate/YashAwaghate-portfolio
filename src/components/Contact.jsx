import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <p>
          {CONTACT.address}
        </p>
        <p>
          {CONTACT.phoneNo}
        </p>
        <p>
        Email: <a href={CONTACT.mailto}>{CONTACT.email}</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
