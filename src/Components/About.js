import React from "react";
import { aboutLogo } from "../assets"; // Make sure this is correctly exported
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

function About() {
  return (
    <section id="about" className="w-full h-fit mx-auto lg:h-screen">
      <div className={`${styles.paddingX}`}>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroHeadText} flex justify-center mb-20`}
        >
          About Us
        </motion.h1>

        <div className="flex w-full flex-col gap-10 lg:flex-row">
          <motion.div
            variants={slideIn("right", "spring", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sm:w-3/4 flex h-auto"
          >
            <img className="w-10/12 h-auto" src={aboutLogo} alt="about" /> {/* Reduced the width to 8/12 */}
          </motion.div>

          <motion.div
            variants={slideIn("left", "spring", 1.2, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center lg:w-7/12"
          >
            <p className={`${styles.sectionSubText} tracking-widest leading-9`}>
              At the Entrepreneurship Cell of SGGSIE&T, we are driven by a steadfast commitment to cultivating 
              a robust and sustainable start-up ecosystem on campus. Our core objective is to inspire and empower 
              students to transform their innovative ideas into impactful ventures by providing end-to-end support 
              throughout their entrepreneurial journey.
              <br /><br />
              We offer a comprehensive platform that includes structured mentorship from industry experts, access 
              to essential resources, hands-on workshops, investor connect programs, and incubation opportunities. 
              By fostering a culture of creativity, critical thinking, and calculated risk-taking, we aim to build 
              a community where entrepreneurial ambition is nurtured and innovation is celebrated.
              <br /><br />
              Through strategic collaborations with startups, corporates, and academic institutions, we ensure our 
              students stay aligned with real-world challenges and emerging market trends. At E-Cell SGGSIE&T, we 
              don't just promote entrepreneurship — we prepare future leaders to shape the world with their vision and resilience.                 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
