import {useEffect} from "react";
import {useRouter} from "next/router";
import {axiosClient} from "client/network/axiosClient";
import styled from "styled-components";
import Header from "common/components/header/Header";
import LectureCard from "main/components/LectureCard";
import Footer from "common/components/footer/Footer";

export default function MainContainer() {
  const router = useRouter();
  return (
    <>
      <Header/>
      <BannerLayout/>
      <ContentWrapper className="restrict-width">
        <Title>
          진행중인 클래스 <InlineText>3</InlineText>
        </Title>
        {/*{ pathname: "/project", as: "/project", query: { defaultBehaviors: "resetFilter" } }*/}
        <div>
          {
            [1, 2, 3].map((item, index) => (
              <ItemFrame
                onClick={() => router.push({
                  pathname: "/class/[id]",
                  query: {
                    id: index
                  }
                }, `/class/${index + 1}`)}
                index={index}
                key={index.toString()}
              >
                <LectureCard/>
              </ItemFrame>
            ))
          }
        </div>
      </ContentWrapper>
      <Footer />
    </>
  );
}

const ItemFrame = styled.div`
  margin-top: ${({index}) => index > 0 ? 70 : 0}px;
`;

const ContentWrapper = styled.div`
  margin: 72px auto 0 auto;
  padding-bottom: 84px;
`;

const InlineText = styled.span`
  font-size: 26px;
  color: #19c88c;
`;

const Title = styled.p`
  font-size: 26px;
  line-height: 1.15;
  color: #000000;
  margin-bottom: 45px;
`;

const BannerLayout = styled.div`
  width: 100%;
  height: 500px;
  background: #000000;
`;
