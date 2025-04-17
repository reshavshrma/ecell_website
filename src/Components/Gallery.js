import React, { useState } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import Img2 from "../assets/Gallery/team1.jpg";
import Img3 from "../assets/Gallery/pica1.jpg";
import Img4 from "../assets/Gallery/pica3.jpg";
import Img5 from "../assets/Gallery/pica4.jpg";
import Img6 from "../assets/Gallery/pica5.jpg";
import Img7 from "../assets/Gallery/pica6.jpg";
import Img8 from "../assets/Gallery/pica7.jpg";
import Img9 from "../assets/Gallery/pica2.jpg"; // <- pica2
import Img11 from "../assets/Gallery/pica9.jpeg";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

const Gallery = () => {
  let data = [
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 9,
      imgSrc: Img9, // <- pica2
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <section id="gallery" className="w-full h-fit mx-auto my-20">
      <div id="gallery" className={`${styles.paddingX}`}>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroHeadText} flex justify-center`}
        >
          Gallery
        </motion.h1>
        <motion.h5
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroSubText} flex justify-center mb-10`}
        >
          Memories of our Journey
        </motion.h5>
      </div>

      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{
                  width: "100%",
                  height: item.id === 9 ? "375px" : "auto", // 👈 Only pica2 is shorter
                  objectFit: "cover", // optional: keeps the image neat in the frame
                  margin: "0 auto",
                }}
              />

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
