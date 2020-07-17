import {breakPoints, colorSet, GradientActionButton__Mobile, Text} from "common/theme/Theme";
import styled from "styled-components";
import {useRouter} from "next/router";

export default function PurchaseCompleteStage(props) {
  const router = useRouter();
  return (
    <div>
      <GradientLayer/>
      <MessageFrame>
        {
          props.purchaseMethod === "card" ?
            <p
              className="text-24 font-bold"
              style={{lineHeight: 1.33}}
            >
              결제가<br/>
              완료되었습니다
            </p>
            :
            <p
              className="text-24 font-bold"
              style={{lineHeight: 1.33}}
            >
              아래의 계좌로<br/>
              입금해주세요
            </p>
        }

        <PurchaseInfoWrapper className="flex">
          <PurchaseInfoTitleWrapper>
            <AccountInfoText
              className="text-gray-9"
            >
              은행명
            </AccountInfoText>
            <AccountInfoText
              className="text-gray-9"
            >
              계좌번호
            </AccountInfoText>
            <AccountInfoText
              className="text-gray-9"
            >
              금액
            </AccountInfoText>
            <AccountInfoText
              className="text-gray-9"
            >
              입금기한
            </AccountInfoText>
          </PurchaseInfoTitleWrapper>
          <div>
            <AccountInfoText
            >
              국민은행
            </AccountInfoText>
            <AccountInfoText
            >
              123125512412(예금주:박찬규)
            </AccountInfoText>
            <AccountInfoText className="font-bold text-pointColor">
              300,000원
            </AccountInfoText>
            <AccountInfoText>
              2020년 7월 12일 23시 59분
            </AccountInfoText>
          </div>
        </PurchaseInfoWrapper>

        <p
          className="desktop:text-18 mobile:text-17 font-bold"
          style={{margin: "40px 0 14px 0", lineHeight: 1.17}}
        >
          주문 정보
        </p>
        <div className="flex">
          <ClassImageWrapper/>
          <div>
            <p
              className="desktop:text-16 mobile:text-13 font-bold"
              style={{lineHeight: 1.14}}
            >
              HTML/CSS로 랜딩 페이지 만들기
            </p>
            <p
              className="desktop:text-14 mobile:text-12"
              style={{marginTop: "6px", lineHeight: 1.14}}
            >
              07.18(토) 시작
            </p>
          </div>
        </div>
      </MessageFrame>
      <div className="mobile:block desktop:hidden w-full text-center">
        <GradientActionButton__Mobile
          style={{width: 120}}
          radius="23px"
          onClick={() => router.push("/main")}
        >
          메인으로
        </GradientActionButton__Mobile>
      </div>
    </div>
  )
}


const AccountInfoText = styled.p`
  font-size: 14px;
  line-height: 1.14;
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
  
  ${breakPoints.mobile} {
    margin-bottom: 11px;
  }
`;

const PurchaseInfoWrapper = styled.div`
  margin-top: 30px;
  ${breakPoints.mobile} {
    margin-top: 20px;
  }
`;

const PurchaseInfoTitleWrapper = styled.div`
  width: 55px;
  margin-right: 41px;
`;

const ClassImageWrapper = styled.div`
  width: 86px;
  height: 60px;
  margin-right: 20px;
  background: ${colorSet.gray8};
  ${breakPoints.mobile} {
    margin-right: 13px;  
  }
`;

const MessageFrame = styled.div`
  padding: 30px 24px 50px 24px;
  ${breakPoints.mobile} {
    padding: 30px 21px; 
  }
`;

const GradientLayer = styled.div`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(to bottom, ${colorSet.black}, ${colorSet.white});
  
  ${breakPoints.mobile} {
    height: 170px;
  }
  
`;
