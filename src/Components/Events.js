import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { StarsCanvas } from "./canvas";
import { styles } from "../styles";
import { events } from "../Constants";
import { textVariant } from "../utils/motion";

const EventCard = ({ event }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={event.date}
      iconStyle={{ background: event.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={event.icon}
            alt="event-image"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h3 className="text-white text-[42px]">{event.title}</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {event.points.map((point, index) => (
            <li
              key={`event-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>

        {event.pdfLink && (
          <div className="mt-5">
            <a
              href={event.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#007AFF] rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#623bef] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative text-white">View Report</span>
            </a>
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Event = () => {
  return (
    <>
      <div>
        <marquee className="tag" scrollAmount="15">
          <pre>
            Notice: As our current tenure comes to a close, we’re excited to
            announce the upcoming elections for the new E-Cell core team for
            2025–26! Stay tuned for details on nominations and voting.
          </pre>
        </marquee>
      </div>
      <div id="event" className={`${styles.paddingX}`}>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroHeadText} flex justify-center`}
        >
          Events
        </motion.h1>
        <motion.h5
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroSubText} flex justify-center mb-10`}
        >
          The Milestones Achieved by E-Cell in 2024-25
        </motion.h5>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </VerticalTimeline>
      </div>
      {/* <StarsCanvas/> */}
    </>
  );
};

export default Event;
