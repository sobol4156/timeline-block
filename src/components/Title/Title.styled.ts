import styled from "styled-components";
import { media } from "../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  gap: 78px;
  position: absolute;
  left: 0;
  top: 170px;

  ${media.xl} {
    gap: 50px;
  }
  ${media.md} {
    position: relative;
    top: 0;
  }
`;

export const TitleText = styled.h2`
  color: #42567a;
  font-family: "PT Sans";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;

  ${media.xl} {
    font-size: 45px;
  }
  ${media.lg} {
    font-size: 40px;
  }
  ${media.sm} {
    font-size: 30px;
  }
  ${media.xs} {
    font-size: 20px;
  }
`;

export const Line = styled.div`
  width: 5px;
  background: #ef5da8;
  background: linear-gradient(
    0deg,
    rgba(239, 93, 168, 1) 0%,
    rgba(56, 119, 238, 1) 100%
  );
  ${media.md} {
    display: none;
  }
`;
