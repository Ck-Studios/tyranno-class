import styled from "styled-components";
import {colorSet, RadiusButton, Text} from "common/theme/Theme";

export const StageButton = styled(RadiusButton)`
  border-radius: 27px;
  background: ${colorSet.pointColor};
  width: 260px;
  height: 54px;
  font-size: 18px;
  font-weight: bold;
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

const FormInputLayout = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid ${({borderColor}) => borderColor || colorSet.gray1};
  padding: 16px 15px;
`;

export const ActiveRadio = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colorSet.white};
`;

export const RadioWrapper = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: ${({active}) => active ? colorSet.pointColor : colorSet.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export function FormLayout(props) {
  return (
    <FormInputLayout
      {...props}
    >
      {props?.children}
    </FormInputLayout>
  )
}
