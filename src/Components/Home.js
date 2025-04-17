import React from "react";
import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";

function Home() {
  return (
    <section id="home" className="relative w-screen h-[120vh] mx-auto mt-20"> {/* Increased height */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5 my-19`}
      >
        <motion.div
          variants={slideIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Increased logo size here */}
          <img className="h-60" src={logo} alt="Logo" />

          <motion.h1 className={`${styles.heroHeadText} text-white-100`}>
            Entrepreneurship Cell | SGGSIE&T, Nanded
          </motion.h1>

          <h2 className={`${styles.heroSubText} mt-2 text-white-100`}>
            <i>
              At the Entrepreneurship Cell of SGGSIE&T, we strive to build a thriving start-up ecosystem by empowering 
              students to turn innovative ideas into impactful ventures. Through expert mentorship, resources, and strategic 
              industry connections, we nurture entrepreneurial talent and guide aspiring founders from concept to creation.
              <br /><br />
              We regularly organize workshops, speaker sessions, ideation challenges, and incubation drives to instill a 
              start-up mindset and provide real-world exposure. Our goal is to equip students with the confidence, skills,
              and network needed to become successful innovators and changemakers.
              <br /><br />
              Whether you're just exploring entrepreneurship or ready to launch your start-up, E-Cell SGGSIE&T is your 
              launchpad to success.
              <br /><br />
            </i>
          </h2>
        </motion.div>

        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-none text-lg shadow"
          whileHover={{ transition: { delay: 1 } }}
          style={{ border: "1px solid white" }}
        >
          <div className="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <a
            className={`${styles.sectionSubText} hover:text-white`}
            href="#about"
          >
            <span className="flex mt-2 place-content-center relative text-white group-hover:text-black font-serif">
              Explore
            </span>
          </a>
        </motion.div>
      </div>

      <StarsCanvas />
    </section>
  );
}

export default Home;
