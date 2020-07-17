import styled from "styled-components";
import {breakPoints, colorSet, FullImage, Text} from "common/theme/Theme";

export default function LightFooter() {
  return (
    <Wrapper>
      <LogoWrapper>
        <FullImage
          src="/static/images/logo/tyranno-logo-light-08.png"
        />
      </LogoWrapper>
      <AgreementMenuFrame>
        <p
          className="text-12 font-medium"
          style={{lineHeight: 1.5}}
        >
          이용약관
        </p>
        <p className="text-12 font-medium" style={{marginLeft: "12px", lineHeight: 1.5}}>
          개인정보 처리방침
        </p>
      </AgreementMenuFrame>

      <CompanyInfoFrame>
        (주)시냅스코퍼레이션 | 대표 박찬규<br/>
        서울특별시 서초구 강남대로 527 12층 1209호<br/>
        사업자등록번호 : 000-00-00000 | 통신판매업신고 : 2020-서울ㅇㅇ-0000
      </CompanyInfoFrame>
      <p
        className="text-12 mobile:text-11 font-medium text-pointColor"
        style={{margin: "8px 0"}}
      >
        info@synapsecorp.kr
      </p>
      <p
        className="text-12 mobile:text-11 text-gray-3"
        style={{lineHeight: 1.5}}
      >
        © 2020 Synapse Corporation Inc.
      </p>
    </Wrapper>
  )
}

const CompanyInfoFrame = styled.div`
  font-size: 12px;
  margin-top: 12px;
  line-height: 1.67;
  color: ${colorSet.gray3};
  ${breakPoints.mobile} {
    font-size: 11px;
    line-height: 1.36;
    margin-top: 11px;
  }
`;

const AgreementMenuFrame = styled.div`
  display: flex;
  margin-top: 12px;
  ${breakPoints.mobile} {
    margin-top: 14px;
  }
`;

const LogoWrapper = styled.div`
  width: 87px;
  height: 20px;
  ${breakPoints.mobile} {
    width: 74px;
    height: 16px;
  }
`;

const Wrapper = styled.div`
  border-top: 1px solid ${colorSet.gray5};
  padding-top: 40px;
  padding-left: 24px;
  ${breakPoints.mobile} {
    padding: 30px 16px 35px 16px;
  }
`;
