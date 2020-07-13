import styled, { css } from "styled-components";
import { colorSet, RadiusButton } from "common/Theme/Theme";

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
    color: ${colorSet.gray3};
  }
`;

const FormInputLayout = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid ${({ borderColor }) => borderColor || colorSet.gray1};
  padding: 16px 15px;
  &:hover {
    border-color: ${colorSet.gray9};
  }
  &:focus-within {
    border-color: ${colorSet.green1};
  }
  ${(props) =>
    props.error &&
    css`
      border-color: red !important;
      .error-msg {
        font-size: 0.75rem;
        color: red;
      }
    `}
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
  background: ${({ active }) =>
    active ? colorSet.pointColor : colorSet.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export function FormLayout(props) {
  return (
    <FormInputLayout {...props} error={props.error ? 1 : 0}>
      {props?.children}
      {props?.error && <p className="error-msg">{props.error.message}</p>}
    </FormInputLayout>
  );
}
