import {useState} from "react";
import styled from "styled-components";
import {breakPoints, colorSet, Text} from "common/theme/Theme";
import {
  FormLayout,
  Input,
  StageButton,
  FormTitle,
} from "purchase/components/partials/Partials";
import {STAGE_SET} from "purchase/common/scheme/Scheme";
import {useForm} from "react-hook-form";
import {PageTitle} from "purchase/common/theme/Theme";

export default function SelectPurchaseMethodStage(props) {
  const [visibleIndex, updateVisibleIndex] = useState(0);
  const {register, errors} = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <ContainerLabel>
        <PageTitle>
          결제하기
        </PageTitle>
      </ContainerLabel>
      <ContentWrapper>
        <OrderInfoWrapper>
          <SectionTitle
            style={{marginBottom: "10px"}}
            className="desktop:text-18 mobile:text-17"
          >
            주문 정보
          </SectionTitle>

          <div className="flex mobile:items-center">
            <ClassImageWrapper/>
            <div>
              <p className="font-bold desktop:text-16 mobile:text-13" style={{lineHeight: 1.15}}>
                HTML/CSS로 랜딩 페이지 만들기
              </p>
              <p className="desktop:text-16 mobile:text-12" style={{lineHeight: 1.15, marginTop: 8}}>
                07.18(토) 시작
              </p>
            </div>
          </div>
        </OrderInfoWrapper>

        <CustomerInfoWrapper>
          <SectionTitle style={{marginBottom: "20px"}} className="desktop:text-18 mobile:text-17">
            연락처 정보
          </SectionTitle>
          <FormTitle>이름</FormTitle>
          <FormLayout
            style={{
              borderRadius: "4px",
              paddingTop: 0,
              paddingBottom: 0,
            }}
            error={errors.userName}>
            <Input
              name="userName"
              placeholder="이름"
              type="text"
              ref={register({
                required: "필수 입력",
                minLength: {
                  value: 2,
                  message: "두 자리 이상 입력해주세요.",
                },
                maxLength: {
                  value: 17,
                  message: "17자리 이상은 입력할 수 없습니다.",
                },
              })}
            />
          </FormLayout>
          <FormTitle style={{marginTop: "20px"}}>휴대폰 번호</FormTitle>
          <FormLayout
            style={{
              borderRadius: "4px",
              paddingTop: 0,
              paddingBottom: 0,
            }}
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
        </CustomerInfoWrapper>

        <PriceInfoWrapper>
          <SectionTitle className="desktop:text-18 mobile:text-17">
            결제 금액
          </SectionTitle>
          <div className="flex justify-between" style={{marginTop: 24}}>
            <p className="desktop:text-14 mobile:text-12 text-gray-9" style={{lineHeight: 1.14}}>
              총 금액
            </p>
            <p className="desktop:text-14 mobile:text-12 text-gray-9" style={{lineHeight: 1.14}}>
              450,000원
            </p>
          </div>
          <div className="flex justify-between" style={{marginTop: 10}}>
            <p className="desktop:text-14 mobile:text-12 text-gray-9" style={{lineHeight: 1.14}}>
              할인 금액
            </p>
            <p className="desktop:text-14 mobile:text-12 text-gray-9" style={{lineHeight: 1.14}}>
              150,000원
            </p>
          </div>
          <FinalPriceWrapper className="flex justify-between">
            <p className="desktop:text-14 mobile:text-12 text-black font-bold" style={{lineHeight: 1.14}}>
              최종 가격
            </p>
            <p className="desktop:text-18 mobile:text-14 text-black font-bold" style={{lineHeight: 1.14}}>
              300,000원
            </p>
          </FinalPriceWrapper>
        </PriceInfoWrapper>

        <PaymentSelectionWrapper>
          <SectionTitle
            className="desktop:text-18 mobile:text-17"
          >
            결제 방식
          </SectionTitle>
          <FormLayout
            style={{
              marginTop: "20px",
              borderColor: colorSet.green1,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            className="flex align-center">
            <p className="desktop:text-16 mobile:text-14 text-green-1">
              무통장 입금
            </p>
          </FormLayout>
        </PaymentSelectionWrapper>

        <div className="flex justify-center">
          <StageButton
            onClick={() => props.moveNextStage(STAGE_SET.accountPurchase)}>
            다음 단계로
          </StageButton>
        </div>
      </ContentWrapper>
    </div>
  );
}

const FinalPriceWrapper = styled.div`
  margin-top: 20px;
  ${breakPoints.mobile} {
    margin-top: 10px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0;
  ${breakPoints.mobile} {
    padding: 0 21px;
  }
`;

const PaymentSelectionWrapper = styled.div`
  padding: 30px 24px 40px 24px;
  ${breakPoints.mobile} {
    margin-top: 25px;
    padding: 0 0 25px 0;
  }
`;

const PriceInfoWrapper = styled.div`
  padding: 30px 24px 40px 24px;
  border-bottom: 1px solid ${colorSet.gray5};
  ${breakPoints.mobile} {
    margin-top: 25px;
    padding: 0 0 25px 0;
  }
`;

const CustomerInfoWrapper = styled.div`
  margin-top: 27px;
  padding: 0 24px 30px 24px;
  border-bottom: 1px solid ${colorSet.gray5};
  ${breakPoints.mobile} {
    margin-top: 25px;
    padding: 0 0 25px 0;
  }
`;

const SectionTitle = styled.p`
  line-height: 1.17;
  font-weight: bold;
`;

const OrderInfoWrapper = styled.div`
  margin-top: 27px;
  padding: 0 24px 27px 24px;
  border-bottom: 1px solid ${colorSet.gray5};
  ${breakPoints.mobile} {
    margin-top: 25px;
    padding: 0 0 25px 0;
  }
`;

const ClassImageWrapper = styled.div`
  background: ${colorSet.gray2};
  width: 86px;
  height: 60px;
  margin-right: 20px;
  ${breakPoints.mobile} {
    width: 79px;
    height: 55px;
  }
`;

const ContainerLabel = styled.div`
  width: 100%;
  height: 80px;
  padding: 28px 24px;
  background: ${colorSet.black};
`;
