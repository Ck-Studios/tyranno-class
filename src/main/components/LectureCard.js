import {useState} from "react";
import styled from "styled-components";
import {breakPoints} from "common/theme/Theme";

export default function LectureCard(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Layout
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <ImageWrapper>
        <Image
          hovered={hovered}
          src={props?.path}
        />
      </ImageWrapper>
      <ContentWrapper className="flex justify-between">
        <div className="wrapper-left column-flex justify-between">
          <LectureTitle>
            HTML/CSS로 랜딩 페이지 직접 만들기
          </LectureTitle>

          <ProfileWrapper className="flex align-center">
            <ProfileImageWrapper/>
            <CategoryDescriptionTextBox>
              <CategoryTitle>분야</CategoryTitle>
              <CategorySubtitle>분야 설명</CategorySubtitle>
            </CategoryDescriptionTextBox>
          </ProfileWrapper>
        </div>

        <div className="wrapper-right">
          <StartDateText>
            7.18 ~
          </StartDateText>
        </div>
      </ContentWrapper>
    </Layout>
  )
}

const StartDateText = styled.p`
  font-size: 36px;
  line-height: 1.14;
  color: #0ad28c;
  ${breakPoints.mobile} {
    font-size: 18px;
  }
`;

const CategoryDescriptionTextBox = styled.div`
  margin-left: 16px;
  ${breakPoints.mobile} {
    display: flex;
    align-items: center;
  }
`;

const CategoryTitle = styled.p`
  font-size: 16px;
`;

const CategorySubtitle = styled.p`
  font-size: 14px;
  margin-top: 4.5px;
`;

const ProfileWrapper = styled.div`
  margin-top: 43px;
  ${breakPoints.mobile} {
    margin-top: 13.5px;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #d1d1d1;
  
  ${breakPoints.mobile} {
    width: 25px;
    height: 25px;
  }
`;

const LectureTitle = styled.p`
  font-size: 36px;
  line-height: 1.14;
  color: #000000;
  
  ${breakPoints.mobile} {
    width: 177px;
    font-size: 18px;
    font-weight: bold;    
  }
`;

const ContentWrapper = styled.div`
  padding: 46.5px 38px;
  ${breakPoints.mobile} {
    padding: 21px 15px 20px 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  background: #c1c1c1;
  ${breakPoints.mobile} {
    height: 190px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${({hovered}) => hovered ? "scale(1.1)" : "scale(1.0)"};
  transition: transform 0.5s;
`;

const Layout = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  ${breakPoints.mobile} {
    height: 300px;
  }
`;
