import React from 'react';

interface IconSVGProps {
  id: string;
  svg: string;
}

const IconSVG: React.FC<IconSVGProps> = ({ id, svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default IconSVG;
