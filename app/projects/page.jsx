"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
    stack: ["Next.js", "TypeScript", "Appwrite", "Plaid", "Dwolla", "TailwindCSS"],
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
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:mx-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
