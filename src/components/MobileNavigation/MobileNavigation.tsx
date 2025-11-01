import React from "react";
import CircleNavigation from "@components/CircleNavigation/CircleNavigation";
import { Wrapper, PaginationWrapper } from "./MobileNavigation.styled";
import Button from "../Button/Button";

type NavigationProps = {
  segments: {
    name: string;
    date_1: string;
    date_2: string;
    sliderData: { date: number; text: string }[];
  }[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const MobileNavigation: React.FC<NavigationProps> = ({
  activeIndex,
  onSelect,
  segments,
}) => {
  return (
    <Wrapper>
      <CircleNavigation
        segments={segments}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
      <PaginationWrapper>
        {segments.map((tipic, index) => {
          return (
            <Button
              key={tipic.name}
              text=""
              border={0}
              border_color="#42567A"
              border_radius={50}
              bg={
                activeIndex == index
                  ? "rgba(66, 86, 122, 1)"
                  : "rgba(66, 86, 122, 0.4)"
              }
              hover_bg="rgba(66, 86, 122, 1)"
              width="6px"
              padding="3px"
              onClick={() => onSelect(index)}
              disabled={false}
            />
          );
        })}
      </PaginationWrapper>
    </Wrapper>
  );
};

export default MobileNavigation;
