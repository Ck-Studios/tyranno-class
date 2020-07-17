import styled from "styled-components";
import {breakPoints, colorSet} from "common/theme/Theme";

export const PageTitle = styled.p`
  color: ${colorSet.white};
  font-size: 24px;
  font-weight: bold;
  ${breakPoints.mobile} {
    font-size: 22px;
  }
`;
