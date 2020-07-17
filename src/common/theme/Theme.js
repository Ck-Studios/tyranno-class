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
  gray7: "#eeeeee",
  gray8: "#ebebeb",
  gray9: "#444444",
  green: "#1eb482",
  green1: "#19c88c",
  blue: "#4095ea",

  kakao: "#ffe200",
  naver: "#17c132",
  google: "#f2f2f2",

  pointColor: "#0ad28c",
};

export const breakPoints = {
  mobile: "@media screen and (max-width: 760px)",
};

export const RadiusButton = styled.button`
  border-radius: ${({radius}) => radius || "4px"};
  background: ${({background}) => background || colorSet.white};
  width: ${({width}) => width || "200px"};
  height: ${({height}) => height || "62px"};
  font-size: ${({fontSize}) => fontSize || "20px"};
  color: ${colorSet.white};
  font-weight: ${({fontWeight}) => fontWeight || "bold"};
`;

export const BackgroundWrapper = styled.div`
  background: ${({background}) => background || "transparent"};
`;

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

export const PageHeaderWrapper = styled.div`
  width: 100%;
  padding: 27px 24px;
  background: ${colorSet.black};
`;

export const ImageWrapper = styled.div`
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  background: ${({background}) => background || colorSet.gray2};
  overflow: hidden;
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({objectFit}) => objectFit || "contain"};
`;

export const FormTitle = styled.p`
  font-size: 14px;
  line-height: 1.14;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 1.14;
  &::placeholder {
    color: ${colorSet.gray3}
  }
`;

export const FormInputLayout = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid ${({borderColor}) => borderColor || colorSet.gray1};
  padding: 16px 15px;
  display: flex;
  align-items: center;
  margin-bottom: ${({marginBottom}) => marginBottom || 0};
  border-radius: ${({borderRadius}) => borderRadius || 0};
`;

export const ActionButton = styled(RadiusButton)`
  border-radius: 27px;
  background: ${colorSet.pointColor};
  width: 260px;
  height: 54px;
  font-size: 18px;
  font-weight: bold;
`;

export const GradientActionButton__Mobile = styled(RadiusButton)`
  height: 50px;
  width: 100%;
  background: ${colorSet.pointColor};
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  font-weight: bold;
  ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const CheckBoxWrapper = styled.div`
  width: ${({size}) => size || "18px"};
  height: ${({size}) => size || "18px"};
  margin-right: ${({marginRight}) => marginRight || "10px"};
  border: 1px solid ${colorSet.black};
  background: ${({checked}) => checked ? colorSet.pointColor : "transparent"};
`;
