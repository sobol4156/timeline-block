import styled from "styled-components";
import { media } from "@styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  padding-top: 170px;
  padding-bottom: 104px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgba(66, 86, 122, 0.1);
    top: 440px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    background: rgba(66, 86, 122, 0.1);
    left: 50%;
  }
  ${media.md} {
    align-items: flex-start;
    padding-top: 60px;
    gap: 56px;

    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }
  ${media.xs} {
    gap: 10px;
    padding-bottom: 15px;
  }
`;
