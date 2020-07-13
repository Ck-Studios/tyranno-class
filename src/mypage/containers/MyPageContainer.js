import styled from "styled-components";
import Header from "common/components/header/Header";
import {useSelector} from "react-redux";
import {colorSet, FullImage, Text} from "common/Theme/Theme";
import ClassCard from "mypage/components/ClassCard";
import Footer from "common/components/footer/Footer";

export default function MyPageContainer(props) {
  const user = useSelector(state => state.authentication.user);
  return (
    <>
      <div style={{borderBottom: `1px solid ${colorSet.gray5}`}}>
      <Header/>
      </div>
      <ContentWrapper
        className="restrict-width row-flex"
      >
        <SideMenuFrame className="column-flex justify-center align-center">
          <div className="circle-wrapper overflow-hidden" style={{width: 64, height: 64, background: colorSet.gray1}}>
            <FullImage
              src={user?.profileImage}
            />
          </div>
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

          <div className="circle-wrapper overflow-hidden" style={{width: 24, height: 24, marginBottom: 74, background: colorSet.gray1}}/>

          <MenuText>
            내 클래스
          </MenuText>
          <MenuText style={{margin: "30px 0"}}>
            내 정보관리
          </MenuText>
          <MenuText>
            주문내역
          </MenuText>
        </SideMenuFrame>
        <MyClassFrame>
          <Text
            fontSize="24px"
            fontWeight="bold"
            style={{marginBottom: 20}}
          >
            내 클래스
          </Text>

          <div className="row-flex flex-wrap justify-between">
            {
              [1,2].map((item, index) => (
                <ItemFrame key={index.toString()} index={index}>
                  <ClassCard/>
                </ItemFrame>
              ))
            }
          </div>
        </MyClassFrame>
      </ContentWrapper>
      <Footer/>
    </>
  )
}

const ItemFrame = styled.div`
  margin-right: ${({index}) => index % 2 === 0 ? 30 : 0}px;
`;

const MyClassFrame = styled.div`
  margin-left: 50px;
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
`;
