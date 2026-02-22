"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "ai/ml",
    name: "Deepfake Detection System",
    description:
      "Built using PyTorch with CNNs and LSTMs. Achieved 93.78% accuracy on mixed datasets including FaceForensics++.",
    link: "/",
    github: "https://github.com/owais-nawaz/Deepfake-Detection-System",
    stack: ["Python", "PyTorch", "OpenCV", "ResNeXt", "LSTM", "Streamlit"],
  },
  {
    image: "/work/1.png",
    category: "full stack",
    name: "AI Voice Detection",
    description:
      "Real-time AI-generated voice detection using CatBoost achieving 93% accuracy with 0.002s inference.",
    link: "https://realvoiceai.buildnex.in/",
    github: "https://github.com/owais-nawaz",
    stack: ["Python", "CatBoost", "XGBoost", "Streamlit", "NMF"],
  },
  {
    image: "/work/4.png",
    category: "ai/ml",
    name: "Duplicate Question Predictor",
    description:
      "ML/DL system using BiLSTM model achieving 88% accuracy for duplicate question pair detection.",
    link: "/",
    github: "https://github.com/owais-nawaz/Duplicate-Question-Pairs",
    stack: ["Python", "TensorFlow", "Scikit-Learn", "BiLSTM", "Streamlit"],
  },
  {
    image: "/work/2.png",
    category: "full stack",
    name: "VaultGuard Banking Platform",
    description:
      "SaaS banking platform with Plaid & Dwolla integration for bank linking and funds transfer.",
    link: "https://vaultguard.vercel.app/",
    github: "https://github.com/owais-nawaz/banking_app",
    stack: [
      "Next.js",
      "TypeScript",
      "Appwrite",
      "Plaid",
      "Dwolla",
      "TailwindCSS",
    ],
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[500px] flex flex-col justify-center 
       items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Showcasing my work in AI/ML, Deep Learning, and Full Stack
            Development with real-world applications.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[580px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* 1st 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
