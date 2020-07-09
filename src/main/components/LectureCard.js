import styled from "styled-components";

export default function LectureCard() {
  return (
    <Layout>
      <ImageWrapper/>
      <ContentWrapper className="flex justify-between">
        <div className="wrapper-left column-flex justify-between">
          <LectureTitle>
            HTML/CSS로 랜딩 페이지 만들기
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
`;

const CategoryDescriptionTextBox = styled.div`
  margin-left: 16px;
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
`;

const ProfileImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #d1d1d1;
`;

const LectureTitle = styled.p`
  font-size: 36px;
  line-height: 1.14;
  color: #000000;
`;

const ContentWrapper = styled.div`
  padding: 46.5px 38px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  background: #c1c1c1;
`;

const Layout = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
`;
