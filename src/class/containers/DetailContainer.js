import {useState, useEffect} from "react";
import Header from "common/components/header/Header";
import Footer from "common/components/footer/Footer";
import styled from "styled-components";
import {breakPoints, CircleWrapper, colorSet, FullImage, GradientActionButton__Mobile, Text} from "common/theme/Theme";
import Schedule from "class/components/schedule/Schedule";
import {useRouter} from "next/router";
import {class1} from "class/data/data";
import Markdown from "common/components/Markdown";
import {NotionRenderer} from "react-notion";
import axios from "axios";

const TAB_SET = [
  {display: "클래스 소개"},
  {display: "일정"},
  {display: "커리큘럼"},
  {display: "선생님"},
  {display: "후기"},
  {display: "FAQ"},
];

// https://www.notion.so/715d8db3a8c848da8eca3732233e41f4

const URL_SET = {
  "1": "715d8db3a8c848da8eca3732233e41f4",
  "2": "715d8db3a8c848da8eca3732233e41f4",
  "3": "4ab1d3c7e8d943df82d81e97a01d3857",
};

export default function DetailContainer() {
  const [selectedTabIndex, updateSelectedTabIndex] = useState(0);
  const [detailData, setDetailData] = useState(null);
  const router = useRouter();

  async function fetchDetailData() {
    try {
      const _data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${URL_SET[router.query.id]}`
      ).then(res => res.json());
      await setDetailData({blockMap: _data})
    } catch (err) {
      console.log("err", err);
    }
  }

  useEffect(() => {
    fetchDetailData();
  }, []);

  return detailData ? (
      <>
        <Header/>
        <BannerLayout>
          <FullImage
            src={`/static/images/thumbnail/thumbnail${router.query?.id}.jpg`}
            objectFit="cover"
          />
        </BannerLayout>
        <ContentWrapper className="restrict-max-width m-auto desktop:flex mobile:column-flex mobile:w-full">
          <div
            className="mobile:block desktop:hidden"
          >
            <div style={{padding: "0 21px"}}>
              <LectureTitle className="font-bold">
                HTML/CSS로 랜딩 페이지 만들기
              </LectureTitle>
              <TeacherProfileWrapper
                className="flex align-center my-0"
              >
                <div
                  className="circle-wrapper"
                />
                <div style={{marginLeft: 7}} className="flex align-center">
                  <Text fontSize="12px" lineHeight={1.71}>
                    분야
                  </Text>
                  <Text fontSize="12px" lineHeight={1.71}>
                    &nbsp;|&nbsp;
                  </Text>
                  <Text fontSize="12px" lineHeight={1.71}>
                    분야설명
                  </Text>
                </div>
              </TeacherProfileWrapper>
            </div>
            <div
              style={{marginTop: 15, marginBottom: 25, padding: "0 21px"}}
            >
              <p className="text-pointColor font-bold" style={{fontSize: 12}}>
                33%OFF
                <span
                  style={{margin: "0 5px"}}
                  className="text-gray-3 line-through"
                >
                  ₩450,000
                </span>
                <span
                  className="text-gray-3"
                >
                  ₩300,000
                </span>
              </p>
              <p
                className="font-bold"
                style={{fontSize: 16}}
              >
                ₩20,000<span className="font-thin" style={{fontSize: 12}}>/시간</span>
              </p>
            </div>

            <div className="flex justify-between"
                 style={{borderTop: `1px solid ${colorSet.gray5}`, padding: "25px 34px"}}>
              <div className="column-flex align-center">
                <p style={{fontSize: 13}} className="font-bold">
                  장소
                </p>
                <p style={{marginTop: 14, fontSize: 13}}>
                  강남역 인근
                </p>
              </div>
              <div className="column-flex align-center">
                <p style={{fontSize: 13}} className="font-bold">
                  인원
                </p>
                <p style={{marginTop: 14, fontSize: 13}}>
                  1~7인
                </p>
              </div>
              <div className="column-flex align-center">
                <p style={{fontSize: 13}} className="font-bold">
                  시간
                </p>
                <p style={{marginTop: 6, fontSize: 13}} className="text-center">
                  3시간/회<br/>
                  총 5회 수업
                </p>
              </div>
            </div>
          </div>
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
              <LectureTitle className="desktop:block mobile:hidden">
                HTML/CSS로 랜딩 페이지 만들기
              </LectureTitle>
              <TeacherProfileWrapper
                className="flex align-center desktop:flex mobile:hidden"
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
                className="flex align-center mobile:hidden"
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
                  className="mobile:hidden"
                  fontSize="26px"
                  fontWeight="bold"
                  lineHeight={1.15}
                >
                  이런 걸 배워요
                </Text>

                <div className="temp" style={{width: "100%", minHeight: "900px"}}>
                  <NotionRenderer
                    blockMap={detailData.blockMap}
                  />
                </div>
              </CuriculumWrapper>
              <ScheduleWrapper__Mobile className="desktop:hidden">
                <p style={{fontSize: 17, marginBottom: 15}} className="font-bold">
                  일정
                </p>
                <Schedule/>
              </ScheduleWrapper__Mobile>
              <CuriculumWrapper__Mobile className="desktop:hidden">
                <p style={{fontSize: 17, marginBottom: 22}} className="font-bold">
                  커리큘럼
                </p>

                <p style={{fontSize: 13}}>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                  블랍즐라 소개글<br/>
                </p>
              </CuriculumWrapper__Mobile>
              <div className="sticky sticky-button desktop:hidden">
                <GradientActionButton__Mobile
                  className=" font-bold"
                  fontSize="16px"
                  radius="26px"
                  onClick={() => router.push("/purchase")}
                >
                  클래스 신청하기
                </GradientActionButton__Mobile>
              </div>
            </DescriptionWrapper>
          </ClassDetailWrapper>
          <ScheduleWrapper className="mobile:hidden">
            <Schedule/>
          </ScheduleWrapper>
        </ContentWrapper>
        <Footer/>
      </>
    )
    :
    null
}

const CuriculumWrapper__Mobile = styled.div`
  padding-bottom: 52px;
`;

const ScheduleWrapper__Mobile = styled.div`
  margin-top: 45px;
  margin-bottom: 52px;
`;

const ScheduleWrapper = styled.div`
  margin-left: 20px;
`;

const CuriculumWrapper = styled.div`
  margin-top: 65px;
  ${breakPoints.mobile} {
    margin-top: 0;
  }
`;

const LectureInfoWrapper = styled.div`
  height: 135px;
  border-top: 1px solid ${colorSet.gray5};
  border-bottom: 1px solid ${colorSet.gray5};
`;

const TeacherProfileWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 33px;
  
  .circle-wrapper {
    background: ${colorSet.gray1};
  }
  
  ${breakPoints.mobile} {
    margin-top: 10px;
    margin-bottom: 15px;
    .circle-wrapper {
      width: 25px;
      height: 25px;
    }
  }
`;

const LectureTitle = styled.h1`
  font-size: 36px;
  line-height: 1.14;
  color: ${colorSet.black};
  ${breakPoints.mobile} {
    font-size: 22px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 55px 40px;
  position: relative;
  
  ${breakPoints.mobile} {
    padding: 40px 21px;
    
    .sticky-button {
      position: sticky;
      position: -webkit-sticky;
      bottom: 20px;
    }
  }
`;

const TabName = styled.p`
  font-size: 1rem;
  color: ${colorSet.black};
  ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

const Tab = styled.div`
  padding: 0 22px;
  border-bottom: 2px solid ${({selected}) => selected ? colorSet.green1 : "transparent"};
  &:nth-child(2) {
      display: none;
    }
  ${breakPoints.mobile} {
    &:nth-child(2) {
      display: flex;
    }
    padding: 0;
  }
`;

const TabBar = styled.div`
    height: 80px;
    ${breakPoints.mobile} {
      height: 46.5px;
      padding: 0 21px;
      justify-content: space-between;
      border-bottom: 1px solid ${colorSet.gray5};
    }
`;

const ClassDetailWrapper = styled.div`
  width: 820px;
  height: 100%;
  margin-right: 20px;
  border: 1px solid ${colorSet.gray5};
  ${breakPoints.mobile} {
    width: 100%;
    border: none;
    border-top: 1px solid ${colorSet.gray5};
    
  }
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 200px;
  ${breakPoints.mobile} {
    padding-bottom: 0;
  }
`;

const BannerLayout = styled.div`
  width: 100%;
  height: 500px;
  background: ${colorSet.black};
  ${breakPoints.mobile} {
    height: 200px;
  }
`;
