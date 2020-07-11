import {useState} from "react";
import styled from "styled-components";
import {colorSet, Text} from "common/Theme/Theme";
import {
  FormLayout,
  Input,
  StageButton,
  FormTitle
} from "purchase/components/partials/Partials";
import {STAGE_SET} from "purchase/common/scheme/Scheme";

export default function SelectPurchaseMethodStage(props) {
  const [visibleIndex, updateVisibleIndex] = useState(0);
  return (
    <div>
      <ContainerLabel>
        <Text
          fontSize="24px"
          color={colorSet.white}
          fontWeight={500}
          lineHeight={1.13}
        >
          결제하기
        </Text>
      </ContainerLabel>


      <OrderInfoWrapper>
        <SectionTitle
          style={{marginBottom: "10px"}}
        >
          주문 정보
        </SectionTitle>

        <div className="flex">
          <ClassImageWrapper/>
          <div>
            <Text
              lineHeight={1.13}
            >
              HTML/CSS로 랜딩 페이지 만들기
            </Text>
            <Text
              style={{marginTop: "8px"}}
              lineHeight={1.13}
            >
              07.18(토) 시작
            </Text>
          </div>
        </div>
      </OrderInfoWrapper>

      <CustomerInfoWrapper>
        <SectionTitle
          style={{marginBottom: "20px"}}
        >
          연락처 정보
        </SectionTitle>
        <FormTitle>
          이름
        </FormTitle>
        <FormLayout style={{borderRadius: "4px", paddingTop: 0, paddingBottom: 0,}}>
          <Input/>
        </FormLayout>
        <FormTitle style={{marginTop: "20px"}}>
          휴대폰 번호
        </FormTitle>
        <FormLayout style={{borderRadius: "4px", paddingTop: 0, paddingBottom: 0,}}>
          <Input placeholder="숫자만 입력해주세요"/>
        </FormLayout>
      </CustomerInfoWrapper>

      <PriceInfoWrapper>
        <SectionTitle>
          결제 금액
        </SectionTitle>
        <div className="flex justify-between" style={{marginTop: 24}}>
          <Text
            fontSize="14px"
            color={colorSet.gray9}
            lineHeight={1.14}
          >
            총 금액
          </Text>
          <Text
            fontSize="14px"
            color={colorSet.gray9}
            lineHeight={1.14}
          >
            450,000원
          </Text>
        </div>
        <div className="flex justify-between" style={{marginTop: 10}}>
          <Text
            fontSize="14px"
            color={colorSet.gray9}
            lineHeight={1.14}
          >
            할인 금액
          </Text>
          <Text
            fontSize="14px"
            color={colorSet.gray9}
            lineHeight={1.14}
          >
            150,000원
          </Text>
        </div>
        <div className="flex justify-between" style={{marginTop: 20}}>
          <Text
            fontSize="14px"
            lineHeight={1.14}
          >
            최종 가격
          </Text>
          <Text
            fontSize="18px"
            fontWeight="bold"
            color={colorSet.gray9}
            lineHeight={1.14}
          >
            300,000원
          </Text>
        </div>
      </PriceInfoWrapper>

      <PaymentSelectionWrapper>
        <SectionTitle>
          결제 방식
        </SectionTitle>
        <FormLayout style={{marginTop: "20px", borderColor: colorSet.green1, paddingTop: 0, paddingBottom:0,}} className="flex align-center">
          <Text
            fontSize="16px"
            lineHeihgt={1.13}
            color={colorSet.green1}
          >
            무통장 입금
          </Text>
        </FormLayout>
      </PaymentSelectionWrapper>

      <div className="flex justify-center">
        <StageButton
          onClick={() => props.moveNextStage(STAGE_SET.accountPurchase)}
        >
          다음 단계로
        </StageButton>
      </div>
    </div>
  )
}

const PaymentSelectionWrapper = styled.div`
  padding: 30px 24px 40px 24px;
`;

const PriceInfoWrapper = styled.div`
  padding: 30px 24px 40px 24px;
  border-bottom: 1px solid ${colorSet.gray5};
`;

const CustomerInfoWrapper = styled.div`
  margin-top: 27px;
  padding: 0 24px 30px 24px;
  border-bottom: 1px solid ${colorSet.gray5};
`;

const SectionTitle = styled.p`
  font-size: 18px;
  line-height: 1.17;
  font-weight: bold;
`;

const OrderInfoWrapper = styled.div`
  margin-top: 27px;
  padding: 0 24px 27px 24px;
  border-bottom: 1px solid ${colorSet.gray5};
`;

const ClassImageWrapper = styled.div`
  background: ${colorSet.gray2};
  width: 86px;
  height: 60px;
  margin-right: 20px;
`;

const ContainerLabel = styled.div`
  width: 100%;
  height: 80px;
  padding: 28px 24px;
  background: ${colorSet.black};
`;

