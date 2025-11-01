import styled from "styled-components";
import { media } from "@styles/media";

export const DatesWrapper = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%, 0%);

  ${media.md} {
    position: relative;
    top: unset;
  }
  ${media.xs} {
    gap: 40px;
  }
`;

export const StartDate = styled.h2`
  color: #5d5fef;
  text-align: center;
  font-family: "PT Sans";
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
  margin: 0;

  ${media.xl} {
    font-size: 150px;
  }
  ${media.lg} {
    font-size: 130px;
  }
  ${media.md} {
    font-size: 100px;
  }
  ${media.sm} {
    font-size: 85px;
  }
  ${media.xs} {
    font-size: 65px;
  }
`;
export const EndDate = styled.h2`
  color: #ef5da8;
  text-align: center;
  font-family: "PT Sans";
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
  margin: 0;

  ${media.xl} {
    font-size: 150px;
  }
  ${media.lg} {
    font-size: 130px;
  }
  ${media.md} {
    font-size: 100px;
  }
  ${media.sm} {
    font-size: 85px;
  }
  ${media.xs} {
    font-size: 65px;
  }
`;
