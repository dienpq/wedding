import { Typography } from '../ui';

interface SectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitle = ({ title, description }: SectionTitleProps) => {
  return (
    <div className="space-y-2 text-center">
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h2">{description}</Typography>
    </div>
  );
};
