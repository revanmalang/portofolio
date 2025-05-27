// src/pages/Services.js
import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

// Data layanan
export const serviceData = [
  {
    title: "Branding",
    description:
      "Membangun identitas merek yang kuat dan konsisten agar bisnis Anda mudah dikenali dan menarik perhatian pelanggan dengan desain kreatif dan strategi pemasaran yang efektif.",
  },
  {
    title: "Desain Grafis",
    description:
      "Menciptakan visual yang menarik dan komunikatif untuk berbagai kebutuhan, mulai dari logo, materi promosi, hingga konten digital yang memperkuat citra bisnis Anda.",
  },
  {
    title: "Pemasaran Digital",
    description:
      "Merancang dan menjalankan kampanye pemasaran online yang tepat sasaran melalui media sosial, SEO, dan iklan berbayar untuk meningkatkan jangkauan dan penjualan produk atau jasa Anda.",
  },
  {
    title: "IT Support",
    description:
      "Menyediakan dukungan teknis untuk perangkat keras dan lunak, membantu instalasi, konfigurasi jaringan, hingga troubleshooting sistem IT perusahaan atau personal.",
  },
  {
    title: "Perbaikan Komputer & Laptop",
    description:
      "Melayani perbaikan dan perawatan komputer dan laptop, termasuk instalasi ulang sistem operasi, peningkatan performa perangkat, serta penggantian komponen.",
  },
  {
    title: "Instalasi & Perawatan CCTV",
    description:
      "Menyediakan layanan pemasangan dan perawatan CCTV untuk keamanan rumah, kantor, maupun area publik, lengkap dengan konfigurasi dan pemantauan jarak jauh.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative">
      <Bulb />
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Layanan Kami<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Kami menyediakan berbagai layanan yang mendukung kebutuhan digital dan teknis Anda, mulai dari branding hingga solusi IT profesional.
            </motion.p>
          </div>
          {/* Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
