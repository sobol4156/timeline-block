import React from "react";
import {
  NavWrapper,
  CurrentSlide,
  ButtonsWrapper,
} from "./CircleNavigation.styled";
import Button from "@components/Button";

type NavigationProps = {
  segments: {
    date_1: string;
    date_2: string;
    sliderData: { date: number; text: string }[];
  }[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const CircleNavigation: React.FC<NavigationProps> = ({
  activeIndex,
  onSelect,
  segments,
}) => {
  return (
    <NavWrapper>
      <CurrentSlide>{`0${activeIndex + 1}/0${segments.length}`}</CurrentSlide>
      <ButtonsWrapper>
        <Button
          text=""
          border={1}
          border_color="#42567A"
          border_radius={50}
          bg="transparent"
          hover_bg="#FFF"
          icon="/assets/left_arr.svg"
          width="fit-content"
          padding="10px 12px"
          onClick={() => onSelect(activeIndex - 1)}
          disabled={activeIndex == 0}
        />
        <Button
          text=""
          border={1}
          border_color="#42567A"
          border_radius={50}
          bg="transparent"
          hover_bg="#FFF"
          icon="/assets/right_arr.svg"
          width="fit-content"
          padding="10px 12px"
          onClick={() => onSelect(activeIndex + 1)}
          disabled={activeIndex + 1 == segments.length}
        />
      </ButtonsWrapper>
    </NavWrapper>
  );
};

export default CircleNavigation;
