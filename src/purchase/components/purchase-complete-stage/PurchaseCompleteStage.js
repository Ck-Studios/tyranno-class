import {colorSet, Text} from "common/theme/Theme";
import styled from "styled-components";

export default function PurchaseCompleteStage() {
  return (
    <div>
      <GradientLayer/>
      <MessageFrame>
        <Text
          fontSize="24px"
          fontWeight="bold"
          lineHeigh={1.33}
        >
          결제가<br/>
          완료되었습니다
        </Text>

        <Text
          fontSize="18px"
          fontWeight="bold"
          lineHeihgt={1.17}
          style={{margin: "40px 0 14px 0"}}
        >
          주문 정보
        </Text>
        <div className="flex">
          <ClassImageWrapper/>
          <div>
            <Text
              fontSize="16px"
              lineHeight={1.14}
            >
              HTML/CSS로 랜딩 페이지 만들기
            </Text>
            <Text
              style={{marginTop: "6px"}}
              fontSize="14px"
              lineHeight={1.14}
            >
              07.18(토) 시작
            </Text>
          </div>
        </div>
      </MessageFrame>
    </div>
  )
}

const ClassImageWrapper = styled.div`
  width: 86px;
  height: 60px;
  margin-right: 20px;
  background: ${colorSet.gray8};
`;

const MessageFrame = styled.div`
  padding: 30px 24px 50px 24px;
`;

const GradientLayer = styled.div`
  width: 100%;
  height: 280px;
  background-image: linear-gradient(to bottom, ${colorSet.black}, ${colorSet.white});
`;
