// src/components/ServiceSlider.js
import React from "react";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxLaptop,
} from "react-icons/rx";
import { FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Branding",
    description:
      "Kami membantu membangun identitas merek yang kuat, konsisten, dan menarik untuk meningkatkan kepercayaan serta daya tarik bisnis Anda.",
  },
  {
    Icon: RxPencil2,
    title: "Desain Grafis",
    description:
      "Menyediakan solusi desain kreatif mulai dari logo, brosur, hingga konten visual digital yang mendukung strategi komunikasi Anda.",
  },
  {
    Icon: RxDesktop,
    title: "Pengembangan Web",
    description:
      "Membangun dan mengelola website profesional dengan tampilan menarik, cepat, dan responsif untuk semua perangkat.",
  },
  {
    Icon: RxReader,
    title: "Copywriting",
    description:
      "Menulis konten yang menarik, relevan, dan persuasif untuk meningkatkan konversi dan memperkuat branding Anda.",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description:
      "Optimasi mesin pencari agar website Anda mudah ditemukan di Google dan mendatangkan lebih banyak pengunjung.",
  },
  {
    Icon: RxLaptop,
    title: "IT Support",
    description:
      "Layanan dukungan teknis seperti instalasi software, troubleshooting jaringan, serta perawatan sistem komputer dan server.",
  },
  {
    Icon: FaTools,
    title: "Perbaikan Komputer & CCTV",
    description:
      "Melayani perbaikan komputer, laptop, dan instalasi serta pemeliharaan sistem CCTV untuk keamanan dan kenyamanan Anda.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        const { Icon, title, description } = item;
        return (
          <SwiperSlide key={index}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl h-full px-6 py-8 flex flex-col gap-4 text-white">
              <Icon className="text-4xl text-accent" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed">{description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
