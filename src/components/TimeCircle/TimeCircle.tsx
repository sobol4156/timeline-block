import React, { useEffect, useState } from "react";
import { Dot, DotName, Circle } from "./TimeCircle.styled";
import { useMediaQuery } from "@hooks/useMediaQuery";

type TimeCircleProps = {
  segments: {
    name: string;
    date_1: string;
    date_2: string;
    sliderData: { date: number; text: string }[];
  }[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

const TimeCircle: React.FC<TimeCircleProps> = ({
  segments,
  activeIndex,
  onSelect,
}) => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [radius, setRadius] = useState(265);
  const [center, setCenter] = useState(265);
  const segmentAngle = 360 / segments.length;

  const [rotation, setRotation] = useState(45);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const delta = activeIndex - prevIndex;
    let shortestPath = delta;

    if (Math.abs(delta) > segments.length / 2) {
      shortestPath =
        delta > 0 ? delta - segments.length : delta + segments.length;
    }
    const newRotation = rotation - shortestPath * segmentAngle;

    setRotation(newRotation);
    setPrevIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (isMobile) {
      setRadius(200);
      setCenter(200);
    } else {
      setRadius(265);
      setCenter(265);
    }
  }, [isMobile]);

  return (
    <Circle $rotation={rotation}>
      {segments.map((segment, index) => {
        const label = `${segment.date_1} – ${segment.date_2}`;
        const angle = segmentAngle * index - 90;
        const radians = (angle * Math.PI) / 180;
        const x = center + radius * Math.cos(radians) - 3;
        const y = center + radius * Math.sin(radians) - 3;

        return (
          <Dot
            key={index}
            $active={index === activeIndex}
            style={{ left: `${x}px`, top: `${y}px` }}
            onClick={() => onSelect(index)}
            $rotation={rotation}
            title={label}
          >
            <span>{index + 1}</span>
            {index === activeIndex && <DotName>{segment.name}</DotName>}
          </Dot>
        );
      })}
    </Circle>
  );
};

export default TimeCircle;
