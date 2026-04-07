import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, GitBranch, Wrench } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <Code2 size={26} />,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Web Engineering",
      icon: <Layers size={26} />,
      items: ["Responsive Design", "Component Architecture", "API Integration"],
    },
    {
      title: "Tools & Platforms",
      icon: <GitBranch size={26} />,
      items: ["Git", "GitHub", "Figma", "Netlify", "Vercel"],
    },
    {
      title: "Practices",
      icon: <Wrench size={26} />,
      items: ["Debugging", "UAT", "Documentation"],
    },
  ];

  // container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // card animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="w-full bg-white text-black px-6 md:px-16 pt-10 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-4">
          Skills
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16 text-gray-900">
          What I Work With
        </h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative border border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10 
              hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* ✨ Neon Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/20 blur-2xl rounded-full"></div>
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="p-3 rounded-xl bg-gray-100 
                  group-hover:bg-black group-hover:text-white 
                  transition-all duration-300"
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              {/* Gradient Divider */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-gradient-to-r from-purple-500 via-yellow-400 to-transparent mb-6"
              />

              {/* Items */}
              <ul className="space-y-3 text-gray-600 relative z-10 max-w-sm">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover/item:bg-black transition"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;