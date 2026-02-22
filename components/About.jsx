import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Mail,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Syed Owais Nawaz",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+61 435-134-775",
  },
  {
    icon: <MailIcon size={20} />,
    text: "owaisnawaz17@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "DOB: 01/10/2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "M.Cyber Security (QUT) | B.Tech CE",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Brisbane, Australia",
  },

  // {
  //   icon: <User2 size={20} />,
  //   text: "Syed Owais Nawaz",
  // },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Queensland University of Technology",
        qualification: "Master of Cyber Security",
        years: "Feb 2026 - Present",
      },
      {
        university: "Jamia Millia Islamia",
        qualification: "B.Tech Computer Engineering - CGPA: 9.08",
        years: "Aug 2021 - June 2025",
      },
      {
        university: "Don Bosco School",
        qualification: "Senior Secondary Education - 94.6%",
        years: "May 2020 - April 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Jamia Millia Islamia",
        role: "Research Intern - AI Voice Detection",
        years: "Mar 2025 - June 2025",
      },
      {
        company: "Sprintx Solutions",
        role: "Software Developer Intern",
        years: "Jan 2025 - Feb 2025",
      },
      {
        company: "ALD Car Rentals",
        role: "Web Developer",
        years: "June 2024 - July 2024",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "Python, JavaScript, TypeScript, C/C++, Java",
      },
      {
        name: "React, Next.js, Express.js, Flask",
      },
      {
        name: "TensorFlow, PyTorch, Scikit-Learn, OpenCV",
      },
      {
        name: "Machine Learning, Deep Learning, NLP, Computer Vision",
      },
      {
        name: "MySQL, MongoDB, Docker, AWS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const publicationsData = [
  {
    title: "A Hybrid Knowledge Graph-Deep Learning Model for Predictive Analytics in Healthcare Worker Stress Management with Cloud Environments",
    conference: "IEEE ICSSAS 2025",
    authors: "H. Faizvi, S. O. Nawaz, K. Ibrahim, F. Siddiqui, A. Siddiqui, K. Anandakumar",
    doi: "10.1109/ICSSAS66150.2025.11080772",
  },
  {
    title: "Automated Detection of Plagiarisms in Online Assessments and Source Code",
    conference: "SARC International Conference, Ambala, India",
    authors: "H. Faizvi, M. A. M. Rizvi, S. O. Nawaz, K. Ibrahim, R. Ahmad, F. Siddiqui",
    doi: "",
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16  sm:mt-8 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/coding.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-640px xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="publications">
                  Publications
                </TabsTrigger>
              </TabsList>
              {/* Tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched service quality</h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in Machine Learning, Deep Learning, and Full
                      Stack Development with expertise in PyTorch, TensorFlow,
                      React, and Next.js.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My awesome journey
                    </h3>
                    {/* experience and education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  {/* skills & tools*/}
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use Every day</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="publications">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Research Publications</h3>
                    <div className="flex flex-col gap-y-6">
                      {publicationsData.map((pub, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-primary pl-4 py-2"
                        >
                          <h4 className="font-semibold text-lg leading-tight mb-2">
                            {pub.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-1">
                            {pub.conference}
                          </p>
                          <p className="text-sm text-muted-foreground mb-1">
                            {pub.authors}
                          </p>
                          {pub.doi && (
                            <p className="text-xs text-primary">
                              DOI: {pub.doi}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
