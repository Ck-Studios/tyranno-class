import styled from "styled-components";

export const colorSet = {
  black: "#000000",
  white: "#ffffff",
  gray1: "#cccccc",
  gray2: "#c1c1c1",
  gray3: "#777777",
  gray4: "#efefef",
  gray5: "#dddddd",
  gray6: "#f7f7f7",
  green1: "#19c88c",
  blue: "#4095ea",

  kakao: "#ffe200",
  naver: "#17c132",
  google: "#f2f2f2",


  pointColor: "#0ad28c",
};

export const Text = styled.p`
  font-size: ${({fontSize}) => fontSize || "1rem"};
  font-weight: ${({fontWeight}) => fontWeight || "400"};
  line-height: ${({lineHeight}) => lineHeight ||  "initial"};
  color: ${({color}) => color || colorSet.black};
`;

export const InlineText = styled.span`
  font-size: ${({fontSize}) => fontSize || "1rem"};
  font-weight: ${({fontWeight}) => fontWeight || "400"};
  color: ${({color}) => color || colorSet.black};
`;

export const CircleWrapper = styled.div`
  width: ${({width}) => width ? width : "auto"};
  height: ${({height}) => height ? height : "auto"};
  border-radius: 50%;
  background: ${({background}) => background || "transparent"};
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({objectFit}) => objectFit || "contain"};
`;
