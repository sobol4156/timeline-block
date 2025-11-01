import React from "react";
import { Wrapper, Line, TitleText } from "./Title.styled";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Wrapper>
      <Line />
      <TitleText>
        {title.split("\n").map((line, idx) => (
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
