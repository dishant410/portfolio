import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe, skills } from '../data/portfolioData';

const SkillCard = ({ category, skillList, itemVariants, icon, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
    className="bg-dark p-6 rounded-lg shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
  >
    {/* Icon */}
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
    
    {/* Category Title */}
    <h3 className="text-2xl font-bold text-white mb-2 capitalize text-center">
      {category}
    </h3>
    
    {/* Subtitle */}
    <p className="text-gray-400 text-sm text-center mb-6 uppercase tracking-wider">
      {subtitle}
    </p>
    
    {/* Skills */}
    <div className="flex flex-wrap gap-3 justify-center">
      {skillList.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="px-5 py-3 bg-darker border-2 border-primary/30 rounded-xl text-gray-200 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-medium"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-darker">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                y: -15,
                rotate: [-2, 2, -2, 0],
                scale: 1.08,
              }}
              style={{
                transition: "all 0.3s ease"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-xl opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-gradient-to-r from-primary to-secondary p-1 rounded-lg shadow-2xl">
                <div className="bg-dark p-8 rounded-lg">
                  <motion.div 
                    className="w-64 h-64 rounded-lg overflow-hidden relative"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
                    }}
                  >
                    <motion.img 
                      src="/dishant.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {aboutMe.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-gray-300">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-gray-300">Quick Learner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span className="text-gray-300">Team Player</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <SkillCard 
            category="frontend" 
            skillList={skills.frontend} 
            itemVariants={itemVariants}
            icon="</>"
            subtitle="User Interface & Experience"
          />
          <SkillCard 
            category="backend" 
            skillList={skills.backend} 
            itemVariants={itemVariants}
            icon="⚙️"
            subtitle="Server & Logic"
          />
          <SkillCard 
            category="databases" 
            skillList={skills.databases} 
            itemVariants={itemVariants}
            icon="🗄️"
            subtitle="Data Management"
          />
          <SkillCard 
            category="tools" 
            skillList={skills.tools} 
            itemVariants={itemVariants}
            icon="🛠️"
            subtitle="Development Tools"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
