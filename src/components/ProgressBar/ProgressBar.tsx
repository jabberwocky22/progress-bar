import React from "react";
import { Bar, ProgressBarFill, Text } from "./style";

type Props = {
  percentage: number;
};

export const ProgressBar = ({ percentage }: Props) => {
  return (
    <Bar className="progress-bar" data-testid="progress-bar">
      <ProgressBarFill
        className="progress-bar-fill"
        data-testid="progress-bar-fill"
        percentage={percentage}
      />
      <Text>{`${percentage} %`}</Text>
    </Bar>
  );
};
