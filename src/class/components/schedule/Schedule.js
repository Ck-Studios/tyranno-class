import styled from "styled-components";
import {useState} from "react";
import {colorSet, Text, InlineText} from "common/Theme/Theme";
import {useRouter} from "next/router";
import {ACCORDION_VARIANTS} from "common/animation/variants";
import {AnimatePresence, motion} from "framer-motion";

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

export default function Schedule() {
  const [visibleIndex, updateVisibleIndex] = useState(0);
  const router = useRouter();
  return (
    <Wrapper>
      <Text
        fontSize="16px"
        fontWeight="bold"
        lineHeight={1.5}
        style={{marginBottom: "16px"}}
      >
        일정
      </Text>
      {
        SCHEDULE_SET.map((schedule, index) => (
          <AccordionWrapper
            index={index}
            onClick={() => updateVisibleIndex(index)}
            key={index.toString()}
          >
            <Text fontSize="16px" lineHeight={1.5} fontWeight="bold">
              {schedule.title}
            </Text>

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
      <NoticeBox>
        <Text
          lineHeight={1.5}
          fontWeight="bold"
          style={{marginBottom: "18px"}}
        >
          안내사항
        </Text>
        <Text fontSize="14px" lineHeihg={1.71}>
          - 블라블라
        </Text>
        <Text fontSize="14px" lineHeihg={1.71}>
          - 블라블라
        </Text>
        <Text fontSize="14px" lineHeihg={1.71}>
          - 블라블라
        </Text>
        <Text fontSize="14px" lineHeihg={1.71}>
          - 블라블라
        </Text>
      </NoticeBox>
      <ApplyButton
        onClick={() => router.push("/purchase")}
      >
        클래스 신청하기
      </ApplyButton>
      <PricingBox>
        <Text fontSize="22px" fontWeight="bold" style={{marginBottom: "7px"}}>
          20,000 <InlineText> / 시간</InlineText>
        </Text>

        <Text lineHeight={1.5} color={colorSet.green1} style={{marginBottom: "11px"}}>
          300,000 / 총 5회 15시간
        </Text>
        <div className="flex justify-center align-center">
          <Text fontWeight="bold" color={colorSet.green1}>
            33%Off
          </Text>
          <Text fontSize="14px" color={colorSet.gray3} style={{textDecoration: "line-through", marginLeft: "7px"}}>
            450,000
          </Text>
        </div>
      </PricingBox>
    </Wrapper>
  );
}

const PricingBox = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const ApplyButton = styled.button`
  margin-top: 1rem;
  border: none;
  border-radius: 2rem;
  background: ${colorSet.pointColor};
  width: 100%;
  height: 62px;
  font-size: 20px;
  color: ${colorSet.white};
  font-weight: bold;
`;

const NoticeBox = styled.div`
  margin-top: 36px;
`;

const TimelineBox = styled(motion.div)`
  margin-top: 20px;
  padding: 20px;
  background: ${colorSet.gray6};
  width: 310px;
`;

const AccordionWrapper = styled.div`
  border-top: 1px solid ${({index}) => index === 0 ? colorSet.gray1 : "transparent"};
  border-bottom: 1px solid ${colorSet.gray5};
  padding: 20px 0;
`;

const Wrapper = styled.div` 
  padding: 30px 24px 40px 24px;
  border: 1px solid ${colorSet.gray5};
  background: ${colorSet.white};
  border-radius: 4px;
  top: 0;
  position: sticky;
`;

