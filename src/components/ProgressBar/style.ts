import styled from "styled-components";

type ProgressBarFillType = {
  percentage: number;
};

export const Bar = styled.div`
  position: relative;
  height: 50px;
  border: solid 1px grey;
  margin: 10px 0;
  @media (min-width: 320px) {
    width: 310px;
  }
  @media (min-width: 375px) {
    width: 350px;
  }
  @media (min-width: 425px) {
    width: 376px;
  }
  @media (min-width: 426px) {
    width: 425px;
  }
`;
export const ProgressBarFill = styled.div`
  display: block;
  width: ${(props: ProgressBarFillType) => props.percentage}%;
  max-width: 100%;
  height: 100%;
  background-color: ${(props: ProgressBarFillType) =>
    props.percentage > 100 ? `#fe0000` : `#afd8e5`};
  transition: 0.5s;
`;
export const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ControlButton = styled.button`
  margin-left: 10px;
`;
