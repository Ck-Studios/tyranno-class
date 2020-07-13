import styled from "styled-components";
import {useState} from "react";
import {colorSet, Text, InlineText, RadiusButton} from "common/theme/Theme";
import {useRouter} from "next/router";
import {StageButton} from "purchase/components/partials/Partials";
import {STAGE_SET} from "purchase/common/scheme/Scheme";
import {motion} from "framer-motion";
import {ACCORDION_VARIANTS} from "common/animation/variants";

const SCHEDULE_SET = [
  {
    title: "07.18(토) 10:00-13:00 강남",
    period: [
      {count: 2, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 3, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 4, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 5, scheduleLine: "07.25(토) 10:00-13:00 강남"},
    ]
  },
  {
    title: "07.18(토) 10:00-13:00 강남",
    period: [
      {count: 2, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 3, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 4, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 5, scheduleLine: "07.25(토) 10:00-13:00 강남"},
    ]
  },
  {
    title: "07.18(토) 10:00-13:00 강남",
    period: [
      {count: 2, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 3, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 4, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 5, scheduleLine: "07.25(토) 10:00-13:00 강남"},
    ]
  },
  {
    title: "07.18(토) 10:00-13:00 강남",
    period: [
      {count: 2, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 3, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 4, scheduleLine: "07.25(토) 10:00-13:00 강남"},
      {count: 5, scheduleLine: "07.25(토) 10:00-13:00 강남"},
    ]
  },
];

export default function SelectScheduleStage(props) {
  const [visibleIndex, updateVisibleIndex] = useState(0);
  return (
    <div>
      <ContainerLabel>
        <Text
          fontSize="24px"
          color={colorSet.white}
        >
          일정 선택하기
        </Text>
      </ContainerLabel>
      <ContentWrapper>
        <Text
          style={{marginBottom: "17px"}}
          fontSize="18px"
          fontWeight="bold"
        >
          HTML/CSS로 랜딩 페이지 만들기
        </Text>
        {
          SCHEDULE_SET.map((schedule, index) => (
            <AccordionWrapper
              index={index}
              onClick={() => updateVisibleIndex(index)}
              key={index.toString()}
            >
              <div className="flex align-center">
                <RadioWrapper
                  active={index === visibleIndex}
                >
                  {
                    index === visibleIndex &&
                    <ActiveRadio/>
                  }
                </RadioWrapper>
                <Text fontSize="16px" lineHeight={1.5} fontWeight="bold">
                  {schedule.title}
                </Text>
              </div>
              {
                visibleIndex === index &&
                <TimelineBox
                  initial="collapsed"
                  animate="open"
                  variants={ACCORDION_VARIANTS}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 1] }}
                >
                  {
                    schedule.period.map((line, lineIndex) => (
                      <Text key={lineIndex.toString()} fontSize="14px" lineHeight={2}>
                        <InlineText fontWeight="bold" color={colorSet.green1}>
                          {line.count}회 :
                        </InlineText>
                        {line.scheduleLine}
                      </Text>
                    ))
                  }
                </TimelineBox>
              }
            </AccordionWrapper>
          ))
        }
        <div style={{textAlign: "center", marginTop: "50px"}}>
          <StageButton onClick={() => props.moveNextStage(STAGE_SET.selectPurchaseMethod)}>
            다음 단계로
          </StageButton>
        </div>
      </ContentWrapper>
    </div>
  )
}

const ActiveRadio = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colorSet.white};
`;

const RadioWrapper = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: ${({active}) => active ? colorSet.pointColor : colorSet.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

const ContentWrapper = styled.div`
  background: ${colorSet.white};
  padding: 40px 24px 0 24px;
`;

const TimelineBox = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background: ${colorSet.gray6};
  width: 100%;
`;

const AccordionWrapper = styled.div`
  border-top: 1px solid ${({index}) => index === 0 ? colorSet.gray1 : "transparent"};
  border-bottom: 1px solid ${colorSet.gray5};
  padding: 20px 0 20px 6px;
`;


const ContainerLabel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-left: 24px;
  background: ${colorSet.black};
`;
