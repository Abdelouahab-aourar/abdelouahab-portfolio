import { useState } from "react"
import { motion } from "motion/react"

export const SkillsCards = () => {
  const skills = {
    frontend: [
      { name: "HTML/CSS", level: "90" },
      { name: "JavaScript", level: "75" },
      { name: "Typescript", level: "70" },
      { name: "React", level: "85" },
      { name: "Tailwind CSS", level: "80" },
    ],

    backend: [
      { name: "Node.js", level: "70" },
      { name: "Express", level: "70" },
      { name: "MySQL", level: "80" },
      { name: "MongoDB", level: "75" },
    ],

    tools: [
      { name: "Git/Github", level: "90" },
      { name: "Linux", level: "88" },
      { name: "Postman", level: "85" },
    ],

    design: [
      { name: "Adobe Illustrator", level: "85" },
      { name: "Adobe Photoshop", level: "80" },
      { name: "Figma", level: "75" },
    ],
  };

  const categories = ["all", "frontend", "backend", "design", "tools"];
  const [activeCategory, setActiveCategory] = useState("all");

  // Which categories to render
  const displayedCategories =
    activeCategory === "all" ? Object.keys(skills) : [activeCategory];

  return (
    <section className="px-30 max-md:px-20 max-sm:px-10 py-10 overflow-x-hidden">
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-12 mt-5 max-sm:gap-1">
        {categories.map((category, key) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, x: key > 2 ? 20 : key === 2 ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              ease: [0.5, 0.6, 0.8, 1],
              delay: (key % 2) * 0.2,
            }}
            viewport={{ once: false, amount: 0.4 }}
            className={`max-sm:text-xs z-30 px-5 py-2 max-sm:px-3 max-sm:py-1 rounded-full border-2 border-primary capitalize cursor-pointer card-hover hover:bg-primary transition-all duration-500 ease-in-out
              ${activeCategory === category ? "bg-primary" : "backdrop-blur-lg bg-primary/1"}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Category Groups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayedCategories.map((category, i) => (
          <motion.div
            key={i}
            className="bg-primary/5 p-6 rounded-2xl z-30 backdrop-blur-lg border-1 border-primary card-shadow card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.5, 0.6, 0.8, 1], delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4 capitalize text-primary">
              {category}
            </h2>

            <div className="space-y-4">
              {skills[category].map((skill, key) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-primary h-full rounded-full origin-left"
                      style={{ width: skill.level + "%" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};