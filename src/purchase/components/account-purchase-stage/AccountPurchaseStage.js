import { useState } from "react";
import styled from "styled-components";
import { colorSet, Text } from "common/theme/Theme";
import {
  FormLayout,
  RadioWrapper,
  ActiveRadio,
  Input,
  StageButton,
} from "purchase/components/partials/Partials";
import { STAGE_SET } from "purchase/common/scheme/Scheme";
import { useForm } from "react-hook-form";

export default function AccountPurchaseStage(props) {
  const [visibleIndex, updateVisibleIndex] = useState(0);
  const [checkReceipt, setCheckReceipt] = useState(false);
  const { register, errors } = useForm({
    mode: "onChange",
  });
  // const watchReceipt = watch("receipt", false);

  return (
    <>
      <ContainerLabel>
        <Text
          fontSize="24px"
          color={colorSet.white}
          fontWeight={500}
          lineHeight={1.13}>
          무통장 입금
        </Text>
        <div style={{ marginTop: "20px" }} className="flex justify-between">
          <Text color={colorSet.white} fontWeight={500} lineHeight={1.13}>
            총 결제 금액
          </Text>
          <Text fontSize="20px" color={colorSet.pointColor} lineHeight={1.15}>
            300,000원
          </Text>
        </div>
      </ContainerLabel>
      <AccountInfoWrapper>
        <Text
          style={{ marginBottom: "12px" }}
          fontSize="18px"
          fontWeight="bold"
          lineHeight={1.17}>
          입금 계좌
        </Text>

        <FormLayout>
          <Text fontSize="14px" lineHeight={1.14}>
            국민은행 박찬규 12341245123
          </Text>
        </FormLayout>

        <div style={{ marginTop: "50px" }} className="flex align-center">
          <CheckBoxWrapper
            onClick={() => setCheckReceipt(!checkReceipt)}
            checked={checkReceipt}
          />
          <Text fontSize="16px" lineHeight={1.13}>
            현금영수증 발행
          </Text>
        </div>
      </AccountInfoWrapper>

      {checkReceipt && (
        <>
          <SelectReceiptWrapper>
            <Text
              style={{ marginBottom: "10px" }}
              fontSize="14px"
              lineHeight={1.14}>
              현금영수증 용도
            </Text>
            <FormLayout
              className="flex align-center"
              borderColor={
                visibleIndex === 0 ? colorSet.pointColor : colorSet.gray1
              }
              onClick={() => updateVisibleIndex(0)}>
              <RadioWrapper active={visibleIndex === 0}>
                {visibleIndex === 0 && <ActiveRadio />}
              </RadioWrapper>
              <Text
                fontSize="16px"
                lineHeight={1.13}
                color={visibleIndex === 0 ? colorSet.green1 : colorSet.black}>
                소득공제용
              </Text>
            </FormLayout>

            <FormLayout
              style={{ marginTop: "12px" }}
              className="flex align-center"
              borderColor={
                visibleIndex === 1 ? colorSet.pointColor : colorSet.gray1
              }
              onClick={() => updateVisibleIndex(1)}>
              <RadioWrapper active={visibleIndex === 1}>
                {visibleIndex === 1 && <ActiveRadio />}
              </RadioWrapper>
              <Text
                fontSize="16px"
                lineHeight={1.13}
                color={visibleIndex === 1 ? colorSet.green1 : colorSet.black}>
                지출증빙용
              </Text>
            </FormLayout>
          </SelectReceiptWrapper>

          <PhoneInfoWrapper>
            <Text
              fontSize="14px"
              lineHeight={1.14}
              style={{ marginBottom: "6px" }}>
              휴대폰 번호
            </Text>
            <FormLayout
              style={{ borderRadius: "4px", paddingTop: 0, paddingBottom: 0 }}
              error={errors.cellPhone}>
              <Input
                name="cellPhone"
                placeholder="숫자만 입력해주세요"
                type="tel"
                ref={register({
                  required: "필수 입력",
                  pattern: {
                    value: /^01(0|1|[6-9])(\d{3}|\d{4})(\d{4})$/,
                    message: "숫자만을 사용한 올바른 번호를 입력해주세요.",
                  },
                })}
              />
            </FormLayout>
          </PhoneInfoWrapper>
        </>
      )}

      <div className="text-center" style={{ marginTop: "50px" }}>
        <StageButton
          onClick={() => props.moveNextStage(STAGE_SET.purchaseComplete)}>
          신청하기
        </StageButton>
      </div>
    </>
  );
}

const PhoneInfoWrapper = styled.div`
  padding: 0 24px;
  margin-top: 28px;
`;

const SelectReceiptWrapper = styled.div`
  margin-top: 28px;
  padding: 0 24px;
`;

const AccountInfoWrapper = styled.div`
  margin-top: 38px;
  padding: 0 24px;
`;

const CheckBoxWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  border: 1px solid ${colorSet.black};
  background: ${({ checked }) =>
    checked ? colorSet.pointColor : "transparent"};
`;

const ContainerLabel = styled.div`
  width: 100%;
  height: 120px;
  padding: 28px 24px;
  background: ${colorSet.black};
`;
