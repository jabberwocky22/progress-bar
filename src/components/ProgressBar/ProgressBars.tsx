import React, { useCallback, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { ControlButton } from "./style";

const INITIAL_STATE = {
  "0": 25,
  "1": 50,
  "2": 75,
};
const PROGRESS_BAR_AMOUNT = Object.keys(INITIAL_STATE).length;
const BUTTON_CONFIG = [-25, -10, 10, 25];

export const ProgressBars = () => {
  const [progress, setProgress] = useState<{ [key: string]: number }>(
    INITIAL_STATE
  );
  const [dropDownValue, setDropDownValue] = useState<string>("0");

  const handleButtonClick = useCallback(
    (calculation: number) => {
      setProgress((current) => {
        const currentValue = current[dropDownValue] || 0;
        const resultToUpdate =
          currentValue + calculation > 0 ? currentValue + calculation : 0;
        return { ...current, [dropDownValue]: resultToUpdate };
      });
    },
    [dropDownValue]
  );

  return (
    <div>
      {Array.from({ length: PROGRESS_BAR_AMOUNT }).map((e, index) => {
        return <ProgressBar percentage={progress[index]} key={index} />;
      })}
      <select
        value={dropDownValue}
        onChange={(e) => setDropDownValue(e.target.value)}
        data-testid="bar-selector"
      >
        {/* TODO: Move selectors to a different component */}
        {Array.from({ length: PROGRESS_BAR_AMOUNT }).map((_, index) => {
          return (
            <option key={index} value={index}>{`#progress${index + 1}`}</option>
          );
        })}
      </select>
      {BUTTON_CONFIG.map((calculation, index) => {
        return (
          // TODO: Move Buttons to a different component
          <ControlButton
            onClick={() => handleButtonClick(calculation)}
            key={index}
            data-testid={`controller-${index}`}
          >
            {calculation > 0 ? `+${calculation}` : calculation}
          </ControlButton>
        );
      })}
    </div>
  );
};
