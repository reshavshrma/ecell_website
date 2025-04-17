import React from "react";
import "../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { update } from "../Constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

function Update() {
  return (
    <section className="text-gray-400 body-font max-h-[600px] flex items-center justify-center">
      <div className="container px-6 py-12 mx-auto text-center">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <img
            src="/ecell.png"
            alt="E-Cell Logo"
            className="inline-block w-20 h-20 mb-8"
          />

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center`}
          >
            Upcoming Event
          </motion.h1>

          <div className="flex flex-col justify-center items-center w-full h-full">
            <VerticalTimelineElement
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "5px solid #232631" }}
              date={update.date}
              iconStyle={{ background: update.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={update.icon}
                    alt="event-image"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <p className="leading-relaxed title-font tracking-wider font-45px text-lg font-large">
                <h1 className="font size text-md">
                  E-Cell Annual Report 2024 Presentation
                </h1>
              </p>
              <span className="h-1 w-10 rounded mt-10 mb-8">
                Date: 18-04-2025
              </span>
              <p>
                We are excited to announce the upcoming presentation of the
                E-Cell Annual Report 2024. This event will showcase the
                highlights of our journey throughout the year, including the
                initiatives we undertook, the impact we made, and the milestones
                we achieved. It will provide a comprehensive overview of our
                activities, workshops, collaborations, and the entrepreneurial
                ecosystem we've helped nurture at SGGSIE&T Nanded. Students,
                faculty, alumni, and mentors are all invited to be a part of
                this insightful session as we reflect on our accomplishments and
                share our vision for the future. Join us in celebrating
                innovation, creativity, and the spirit of entrepreneurship.
                <br />
              </p>
              <br />
              <h2 className="font-small title-font text-lg"><b>Ms. Aditi Khetan</b></h2>
              <p className="text-lg title-font tracking-wider">
                President, E-Cell, SGGSIE&T, Nanded
              </p>
            </VerticalTimelineElement>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Update;
