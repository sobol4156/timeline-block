import React, { useEffect, useState } from "react";
import { DatesWrapper, StartDate, EndDate } from "./AnimatedYears.styled";

type AnimatedYearsProps = {
  startYear: number;
  endYear: number;
};

const AnimatedYears: React.FC<AnimatedYearsProps> = ({
  startYear,
  endYear,
}) => {
  const [currentStart, setCurrentStart] = useState(startYear);
  const [currentEnd, setCurrentEnd] = useState(endYear);

  useEffect(() => {
    const startTimer = setInterval(() => {
      setCurrentStart((prev) => {
        if (prev == startYear) {
          clearInterval(startTimer);
          return prev;
        }
        return prev < startYear ? prev + 1 : prev - 1;
      });
    }, 30);

    const endTimer = setInterval(() => {
      setCurrentEnd((prev) => {
        if (prev == endYear) {
          clearInterval(endTimer);
          return prev;
        }
        return prev < endYear ? prev + 1 : prev - 1;
      });
    }, 30);

    return () => {
      clearInterval(startTimer);
      clearInterval(endTimer);
    };
  }, [startYear, endYear]);

  return (
    <DatesWrapper>
      <StartDate>{currentStart}</StartDate>
      <EndDate>{currentEnd}</EndDate>
    </DatesWrapper>
  );
};

export default AnimatedYears;
