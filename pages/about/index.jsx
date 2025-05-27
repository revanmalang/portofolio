import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaServer,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "keahlian",
    info: [
      {
        title: "Pengembangan Web",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer, FaWordpress],
      },
      {
        title: "Desain UI/UX",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
      {
        title: "IT Support",
        icons: [FaServer],
      },
    ],
  },
  {
    title: "penghargaan",
    info: [
      {
        title: "Badan Siber dan Sandi Negara",
        stage: "2019",
      },
      {
        title: "Certified Network Security Practitioner (CNSP)",
        stage: "2024",
      },
    ],
  },
  {
    title: "pengalaman",
    info: [
      {
        title: "Magang IT Support - STPP Polbangtan Malang",
        stage: "2019",
      },
      {
        title: "Magang Digital Marketing - IMPRO Digital Malang",
        stage: "2023",
      },
      {
        title: "IT Support Profesional - Hawai Group Malang",
        stage: "2025",
      },
    ],
  },
  {
    title: "pendidikan",
    info: [
	{
        title: "SMKN 2 Singosari - Rekayasa Perangkat Lunak",
        stage: "2020",
      },
      {
        title: "Institut Teknologi Nasional Malang - Teknik Informatika",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left relative">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Deskripsi */}
        <div className="flex-1 flex flex-col justify-center px-4 xl:px-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Tentang <span className="text-accent">Saya</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12"
          >
            Saya sudah menjalani pengalaman kerja selama kurang dari 1 tahun di
            berbagai bidang mulai dari IT Support, Digital Marketing, hingga IT
            Security. Saya selalu bersemangat untuk terus belajar dan berkembang
            di bidang teknologi, desain, dan keamanan.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Tahun pengalaman
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Penghargaan
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detail Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, idx) => (
              <div
                key={idx}
                className={`${
                  index === idx
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : ""
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(idx)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Konten Info */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto">
            {aboutData[index].info.map((item, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/80"
              >
                <div className="font-light mb-2 md:mb-0 min-w-[230px] text-left">
                  {item.title}
                </div>
                {item.stage && <div className="hidden md:flex">-</div>}
                <div>{item.stage}</div>

                <div className="flex gap-x-4 ml-4">
                  {item.icons?.map((Icon, iconIdx) => (
                    <div key={iconIdx} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
