import { Typography } from '../ui';

interface SectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="space-y-3 text-center">
      <Typography variant="h6" className="text-[#c8a898]">
        {title}
      </Typography>
      <Typography variant="h3" className="font-sail font-normal capitalize">
        {description}
      </Typography>
    </div>
  );
};
