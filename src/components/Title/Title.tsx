import React from "react";
import { Wrapper, Line, TitleText } from "./Title.styled";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  const formatted = title.replace(/\\n/g, "\n");
  return (
    <Wrapper>
      <Line />
      <TitleText>
        {formatted.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </TitleText>
    </Wrapper>
  );
};

export default Title;
