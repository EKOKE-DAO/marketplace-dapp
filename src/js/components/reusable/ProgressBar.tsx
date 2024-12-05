import * as React from 'react';

interface Props {
  progress: number;
  max: number;
  percentage?: boolean;
  bgColor?: string;
  textColor?: string;
}

const ProgressBar = (props: Props) => {
  const percentage = Math.round((props.progress * 100) / props.max);
  let label = `${props.progress}/${props.max}`;
  if (props.percentage) {
    label = `${percentage.toString()}%`;
  }

  const bgColor = props.bgColor || 'bg-brand';
  const textColor = props.textColor || 'text-gray-300';

  const className = `${
    props.progress > 0 ? bgColor : ''
  } text-lg font-medium ${textColor} text-center p-0.5 leading-none rounded-full`;

  const fillerStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div className={className} style={fillerStyles}>
        {label}
      </div>
    </div>
  );
};

export default ProgressBar;
