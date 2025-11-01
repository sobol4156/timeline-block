import styled from "styled-components";
import { media } from "../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: center;
  ${media.xs} {
    margin-top: 50px;
  }
`;

export const PaginationWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
`;
