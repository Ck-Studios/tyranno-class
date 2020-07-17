import styled from "styled-components";
import Header from "common/components/header/Header";
import {useSelector} from "react-redux";
import {breakPoints, colorSet, FullImage, Text} from "common/theme/Theme";
import ClassCard from "mypage/components/ClassCard";
import Footer from "common/components/footer/Footer";
import {useRouter} from "next/router";
import UserInfoCard__Mobile from "mypage/components/UserInfoCard__Mobile";

export default function MyPageContainer(props) {
  const router = useRouter();
  const user = useSelector(state => state.authentication.user);
  return (
    <div className="mypage-container-wrapper column-flex justify-between h-full">
      <div>
        <div style={{borderBottom: `1px solid ${colorSet.gray5}`}}>
          <Header/>
        </div>

        <ContentWrapper
          className="restrict-max-width desktop:flex mobile:block"
        >
          <SideMenuFrame className="column-flex justify-center align-center mobile:hidden">
            <ProfileImageWrapper className="circle-wrapper overflow-hidden">
              <FullImage
                src={user?.profileImage}
              />
            </ProfileImageWrapper>
            <Text
              style={{marginTop: 20, marginBottom: 10}}
              fontWeight="bold"
              fontSize="18px"
            >
              {user?.name}
            </Text>
            <Text
              style={{marginBottom: 10}}
              fontSize="14px"
              color={colorSet.gray9}
            >
              {user?.email}
            </Text>

            <div className="circle-wrapper overflow-hidden"
                 style={{width: 24, height: 24, marginBottom: 74, background: colorSet.gray1}}/>

            <MenuText>
              내 클래스
            </MenuText>
            <MenuText style={{margin: "30px 0"}} onClick={() => router.push("/myinfo")}>
              내 정보관리
            </MenuText>
            <MenuText>
              주문내역
            </MenuText>
          </SideMenuFrame>

          <div className="desktop:hidden mobile:block">
            <UserInfoCard__Mobile/>
          </div>
          <MyClassFrame>
            <SectionTitle>
              내 클래스
            </SectionTitle>
            <ClassList
              className="row-flex desktop:flex-wrap desktop:justify-between mobile:overflow-x-scroll mobile:scrolling-touch mobile:pb-4">
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <ItemFrame key={index.toString()} index={index}>
                    <ClassCard/>
                  </ItemFrame>
                ))
              }
            </ClassList>
          </MyClassFrame>
        </ContentWrapper>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

const ClassList = styled.div`
  width: 830px;
  ${breakPoints.mobile} {
    width: auto;
  }
`;

const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  
  ${breakPoints.mobile} {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;


const ItemFrame = styled.div`
  margin-right: ${({index}) => index % 2 === 0 ? 30 : 0}px;
  margin-top: ${({index}) => index > 1 ? 30 : 0}px;
  ${breakPoints.mobile} {
    margin-right: 0;
    margin-top: 0;
    margin-left: ${({index}) => index > 0 ? 15 : 0}px;
  }
`;

const MyClassFrame = styled.div`
  margin-left: 50px;
  ${breakPoints.mobile} {
    margin-left: 0;
    margin-top: 40px;
  }
`;

const MenuText = styled.p`
  font-size: 18px;
  line-height: 1.17;
  color: ${colorSet.gray3};
  
  &:hover {
    font-weight: 500;
    color: ${colorSet.black};
  }
  
`;

const ProfileImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: ${colorSet.gray1};
  
  ${breakPoints.mobile} {
   
  }
`;

const SideMenuFrame = styled.div`
  width: 300px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 38px 0 60px 0;
  max-height: 460px;
`;

const ContentWrapper = styled.div`
  min-height: 1000px;
  margin: 0 auto;
  padding: 42px 0 84px 0;
  ${breakPoints.mobile} {
    min-height: 0;
    padding: 20px 21px 55px 21px;
  }
`;
