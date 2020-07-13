import styled from "styled-components";
import {colorSet, Text} from "common/Theme/Theme";

export default function ClassCard(props) {
  return (
    <Layout>
      <ImageFrame/>
      <Text
        style={{marginTop: 20}}
        fontSize="18px"
      >
        케이크 만들기
      </Text>
      <Text
        style={{marginTop: 10}}
        fontSize="14px"
        color={colorSet.green}
      >
        7월 18일(토) 시작
      </Text>
    </Layout>
  )
}

const ImageFrame = styled.div`
  width: 100%;
  height: 240px;
  background: ${colorSet.gray7};
`;

const Layout = styled.div`
  width: 400px;
  height: 310px;
`;
