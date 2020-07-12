import {useState, useEffect} from "react";
import Header from "common/components/header/Header";
import Footer from "common/components/footer/Footer";
import styled from "styled-components";
import {CircleWrapper, colorSet, FullImage, Text} from "common/Theme/Theme";
import Schedule from "class/components/schedule/Schedule";
import {useRouter} from "next/router";
import {class1} from "class/data/data";
import Markdown from "common/components/Markdown";
import {NotionRenderer} from "react-notion";
import axios from "axios";

const TAB_SET = [
  {display: "클래스 소개"},
  {display: "커리큘럼"},
  {display: "선생님"},
  {display: "후기"},
  {display: "FAQ"},
];

const URL_SET = {
  // "1": "715d8db3a8c848da8eca3732233e41f4",
  // "2": "715d8db3a8c848da8eca3732233e41f4",
  "1": "4ab1d3c7e8d943df82d81e97a01d3857",
  "2": "4ab1d3c7e8d943df82d81e97a01d3857",
  "3": "4ab1d3c7e8d943df82d81e97a01d3857",
};

export default function DetailContainer() {
  const [selectedTabIndex, updateSelectedTabIndex] = useState(0);
  const [detailData, setDetailData] = useState(null);
  const router = useRouter();

  useEffect(async() => {
    console.log("router::: ", router.query);
    // axios.get("https://notion-api.splitbee.io/v1/page/" + URL_SET[router.query.id])
    //   .then(res => {
    //     setDetailData(res.data);
    //   })
    const data = await fetch(
      `https://notion-api.splitbee.io/v1/page/${URL_SET[router.query.id]}`
    ).then(res => res.json());
    setDetailData(data);
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
      <ContentWrapper className="restrict-width m-auto flex" style={{paddingBottom: "200px"}}>
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

              <div className="temp" style={{width: "100%", minHeight: "900px"}}>
                <NotionRenderer
                  blockMap={detailData ? detailData : ""}
                />
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
    :
    null
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
  margin-right: 20px;
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
