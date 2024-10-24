import { motion } from 'framer-motion';

import { Typography } from '../ui';

interface SectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="space-y-3 text-center"
    >
      <Typography variant="h6" className="text-[#c8a898]">
        {title}
      </Typography>
      <Typography variant="h3" className="font-sail font-normal capitalize">
        {description}
      </Typography>
    </motion.div>
  );
};
