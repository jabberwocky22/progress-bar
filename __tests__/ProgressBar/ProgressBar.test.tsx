import React from "react";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import { ProgressBar } from "@/components/ProgressBar";
import { ProgressBars } from "@/components/ProgressBar";
import { flushSync } from "react-dom";

describe("ProgressBar", () => {
  test("renders a progress bar with the correct percentage", () => {
    const percentage = 50;
    render(<ProgressBar percentage={percentage} />);

    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toBeInTheDocument();

    const progressBarFill = screen.getByTestId("progress-bar-fill");
    expect(progressBarFill).toBeInTheDocument();
    expect(progressBarFill).toHaveStyle(`width: ${percentage}%`);
  });
});
describe("ProgressBars", () => {
  test("renders 3 progress bar ", () => {
    render(<ProgressBars />);

    const progressBar = screen.getAllByTestId("progress-bar");
    expect(progressBar[0]).toBeInTheDocument();
    expect(progressBar[1]).toBeInTheDocument();
    expect(progressBar[2]).toBeInTheDocument();
  });
  test("Progress Bar 2 should -10 and have value 40%", () => {
    render(<ProgressBars />);

    const selector = screen.getByTestId("bar-selector");
    const buttonToMinus10 = screen.getByTestId("controller-1");
    expect(buttonToMinus10).toHaveTextContent("-10");

    fireEvent.change(selector, { target: { value: "1" } });
    expect(selector).toHaveTextContent("#progress2");
    fireEvent.click(buttonToMinus10);
    expect(screen.getAllByTestId("progress-bar")[1]).toHaveTextContent("40 %");
  });
});
