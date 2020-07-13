import styled from "styled-components";
import {colorSet, FullImage, Text} from "common/theme/Theme";

export default function LightFooter() {
  return (
    <Wrapper>
      <LogoWrapper>
        <FullImage
          src="/static/images/logo/tyranno-logo-light-08.png"
        />
      </LogoWrapper>
      <div style={{marginTop: "12px"}} className="flex">
        <Text fontSize="12px" fontWeight={500} lineHeight={1.5}>
          이용약관
        </Text>
        <Text fontSize="12px" fontWeight={500} lineHeight={1.5} style={{marginLeft: "12px"}}>
          개인정보 처리방침
        </Text>
      </div>

      <div style={{marginTop: "12px", fontSize: "12px", lineHeight: 1.67, color: colorSet.gray3}}>
        (주)시냅스코퍼레이션 | 대표 박찬규<br/>
        서울특별시 서초구 강남대로 527 12층 1209호<br/>
        사업자등록번호 : 000-00-00000 | 통신판매업신고 : 2020-서울ㅇㅇ-0000
      </div>
      <Text
        style={{margin: "8px 0"}}
        color={colorSet.pointColor}
        fontSize="12px"
        fontWeight={500}
      >
        info@synapsecorp.kr
      </Text>
      <Text
        fontSize="12px"
        color={colorSet.gray3}
        lineHeight={1.5}
      >
        © 2020 Synapse Corporation Inc.
      </Text>
    </Wrapper>
  )
}

const LogoWrapper = styled.div`
  width: 87px;
  height: 20px;
`;

const Wrapper = styled.div`
  border-top: 1px solid ${colorSet.gray5};
  padding-top: 40px;
  padding-left: 24px;
`;
