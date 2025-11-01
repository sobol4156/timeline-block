import styled from "styled-components";
import { media } from "@styles/media";

export const NavWrapper = styled.div`
  width: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.md} {
    width: fit-content;
  }
`;
export const CurrentSlide = styled.div`
  color: #42567a;
  font-family: "PT Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
