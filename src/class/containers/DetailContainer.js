import {useState} from "react";
import Header from "common/components/header/Header";
import Footer from "common/components/footer/Footer";
import styled from "styled-components";
import {CircleWrapper, colorSet, Text} from "common/Theme/Theme";
import Schedule from "class/components/schedule/Schedule";

const TAB_SET = [
  {display: "클래스 소개"},
  {display: "커리큘럼"},
  {display: "선생님"},
  {display: "후기"},
  {display: "FAQ"},
];

export default function DetailContainer() {
  const [selectedTabIndex, updateSelectedTabIndex] = useState(0);

  return (
    <>
      <Header/>
      <BannerLayout/>
      <ContentWrapper className="restrict-width m-auto flex">
        <ClassDetailWrapper>
          <TabBar className="flex">
            {
              TAB_SET.map((tab, index) => (
                <Tab
                  className="flex align-center"
                  key={index.toString()}
                  selected={selectedTabIndex === index}
                  onClick={() => updateSelectedTabIndex(index)}
                >
                  <TabName>
                    {tab.display}
                  </TabName>
                </Tab>
              ))
            }
          </TabBar>
          <DescriptionWrapper>
            <LectureTitle>
              HTML/CSS로 랜딩 페이지 만들기
            </LectureTitle>
            <TeacherProfileWrapper
              className="flex align-center"
            >
              <CircleWrapper
                width="64px"
                height="64px"
                background={colorSet.gray3}
              />
              <div style={{marginLeft: "20px"}}>
                <Text lineHeight={1.71}>
                  분야
                </Text>
                <Text fontSize="14px" lineHeight={1.71}>
                  분야설명
                </Text>
              </div>
            </TeacherProfileWrapper>
            <LectureInfoWrapper
              className="flex align-center"
            >
              <div
                className="column-flex flex-1"
                style={{paddingLeft: "40px"}}
              >
                <div className="row-flex">
                  <Text fontSize="16px" lineHeight={1.5} color={colorSet.black}>
                    장소
                  </Text>
                  <Text fontSize="16px" lineHeight={1.5} color={colorSet.black} style={{marginLeft: "17px"}}>
                    강남역 인근
                  </Text>
                </div>

                <div className="row-flex" style={{marginTop: "25px"}}>
                  <Text fontSize="16px" lineHeight={1.5} color={colorSet.black}>
                    시간
                  </Text>
                  <Text
                    fontSize="16px"
                    lineHeight={1.5}
                    color={colorSet.black}
                    style={{marginLeft: "17px"}}
                  >
                    3시간/회
                  </Text>
                </div>
              </div>
              <div
                className="column-flex flex-1"
                style={{paddingLeft: "40px"}}
              >
                <div className="row-flex">
                  <Text fontSize="16px" lineHeight={1.5} color={colorSet.black}>
                    최대인원
                  </Text>
                  <Text fontSize="16px" lineHeight={1.5} color={colorSet.black} style={{marginLeft: "17px"}}>
                    1~7명
                  </Text>
                </div>

                <div className="row-flex" style={{marginTop: "25px"}}>
                  <Text fontSize="16px" lineHeight={1.5} color={colorSet.black} style={{width: "58px"}}>
                    수강료
                  </Text>
                  <Text
                    fontSize="16px"
                    lineHeight={1.5}
                    color={colorSet.black}
                    style={{marginLeft: "17px"}}
                  >
                    20,000원/시간
                  </Text>
                </div>
              </div>
            </LectureInfoWrapper>

            <CuriculumWrapper>
              <Text
                fontSize="26px"
                fontWeight="bold"
                lineHeight={1.15}
              >
                이런 걸 배워요
             </Text>

              <div className="temp" style={{width: "10px", height: "900px"}}>

              </div>
            </CuriculumWrapper>
          </DescriptionWrapper>
        </ClassDetailWrapper>

        <ScheduleWrapper>
          <Schedule/>
        </ScheduleWrapper>
      </ContentWrapper>
      <Footer/>
    </>
  )
}

const ScheduleWrapper = styled.div`
  margin-left: 20px;
`;

const CuriculumWrapper = styled.div`
  margin-top: 65px;
`;

const LectureInfoWrapper = styled.div`
  height: 135px;
  border-top: 1px solid ${colorSet.gray5};
  border-bottom: 1px solid ${colorSet.gray5};
`;

const TeacherProfileWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 33px;
`;

const LectureTitle = styled.h1`
  font-size: 36px;
  line-height: 1.14;
  color: ${colorSet.black};
`;

const DescriptionWrapper = styled.div`
  padding: 55px 40px;
`;

const TabName = styled.p`
  font-size: 1rem;
  color: ${colorSet.black};
`;

const Tab = styled.div`
  padding: 0 22px;
  border-bottom: 2px solid ${({selected}) => selected ? colorSet.green1 : "transparent"};
`;

const TabBar = styled.div`
    height: 80px;
`;

const ClassDetailWrapper = styled.div`
  width: 820px;
  height: 100%;
  border: 1px solid #dddddd;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
`;

const BannerLayout = styled.div`
  width: 100%;
  height: 500px;
  background: ${colorSet.black};
`;
