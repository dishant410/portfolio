import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className={`flex items-center mb-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <div className="w-full md:w-5/12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-dark p-6 rounded-lg shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300"
          >
            {/* Type Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                item.type === 'education' 
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : item.type === 'internship'
                  ? 'bg-secondary/10 text-secondary border border-secondary/20'
                  : 'bg-green-500/10 text-green-400 border border-green-500/20'
              }`}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
              <span className="text-gray-400 text-sm">
                {item.startDate} - {item.endDate}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            
            {/* Organization */}
            <p className="text-primary font-semibold mb-1">{item.organization}</p>
            <p className="text-gray-400 text-sm mb-3">{item.location}</p>

            {/* Description */}
            <p className="text-gray-300 mb-4">{item.description}</p>

            {/* Achievements */}
            {item.achievements && item.achievements.length > 0 && (
              <div className="space-y-2">
                {item.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-400 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Timeline dot */}
        <div className="hidden md:flex w-2/12 justify-center">
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full border-4 border-darker"></div>
            {index < experience.length - 1 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent"></div>
            )}
          </div>
        </div>

        {/* Spacing for alternating layout */}
        <div className="hidden md:block w-5/12"></div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-darker">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and professional journey in the world of technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-0">
            {experience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
