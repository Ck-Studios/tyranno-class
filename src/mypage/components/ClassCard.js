import styled from "styled-components";
import {breakPoints, colorSet, Text} from "common/theme/Theme";

export default function ClassCard(props) {
  return (
    <Layout>
      <ImageFrame/>
      <ClassTitle
        className="text-18 mobile:text-14"
      >
        케이크 만들기
      </ClassTitle>
      <p
        className="text-14 mobile:text-12 text-green-1"
      >
        7월 18일(토) 시작
      </p>
    </Layout>
  )
}


const ClassTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  ${breakPoints.mobile} {
    margin-top: 13px;
    margin-bottom: 7px;
  }
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 240px;
  background: ${colorSet.gray7};
  ${breakPoints.mobile} {
    height: 113px;
  }
`;

const Layout = styled.div`
  width: 400px;
  height: 310px;
  ${breakPoints.mobile} {
    width: 200px;
    height: auto;
  }
`;
