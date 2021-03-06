import {useEffect} from "react";
import styled from "styled-components";
import {breakPoints, colorSet, FullImage} from "common/theme/Theme";
import {useSelector, useDispatch} from "react-redux";
import {login} from "modules/authentication";
import {useRouter} from "next/router";

export default function LoginContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(state => state.authentication.user);

  useEffect(() => {
    if(user) {
      router.replace("/main");
    }
  }, [user]);


  return (
    <ContainerWrapper className="flex">
      <LeftScreen>
        <MethodFrame>
          <ImageFrame onClick={() => router.push("/main")}>
            <Image
              src="static/images/logo/tyrannologo-05.png"
            />
          </ImageFrame>

          <Mission>
            알 때까지 피드백<br/>
            진짜 배워가는 클래스
          </Mission>

          <ButtonWrapper>
            <ButtonFrame
              onClick={() => dispatch(login())}
              background={colorSet.kakao}
              className="flex justify-center align-center mobile:font-bold"
            >
              카카오로 시작하기
            </ButtonFrame>
            <ButtonFrame
              marginTop={10}
              background={colorSet.naver}
              color={colorSet.white}
              className="flex justify-center align-center mobile:font-bold"
              onClick={() => dispatch(login())}
            >
              네이버로 시작하기
            </ButtonFrame>
            <ButtonFrame
              marginTop={10}
              background={colorSet.google}
              className="flex justify-center align-center mobile:font-bold"
              onClick={() => dispatch(login())}
            >
              구글로 시작하기
            </ButtonFrame>
          </ButtonWrapper>
          <NoticeBox>
            최초 로그인 시<br/>
            <span>이용약관</span>과 <span>개인정보 처리방침</span>에 동의하는 것으로 간주합니다.
          </NoticeBox>
        </MethodFrame>
      </LeftScreen>
      <RightScreen className="mobile:hidden">
        <FullImage
          objectFit="cover"
          src="/static/images/background/class.jpg"
        />
      </RightScreen>
    </ContainerWrapper>
  )
}

const NoticeBox = styled.div`
  margin-top: 32px;
  text-align: center;
  color: ${colorSet.gray3};
  line-height: 1.27;
  font-size: 11px;
  
  span {
    color: ${colorSet.blue};
  }
`;

const ButtonFrame = styled.button`
  border: none;
  border-radius: 4px;
  width: 360px;
  height: 50px;
  margin-top: ${({marginTop}) => marginTop|| 0}px;
  background: ${({background}) => background || "transparent"};
  font-size: 16px;
  line-height: 2.63;
  color: ${({color}) => color || colorSet.black};
  ${breakPoints.mobile} {
    width: 100%;
    font-size: 13px;
    line-height: 1.62;
    border-radius: 10px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 42px;
  ${breakPoints.mobile} {
    margin-top: 25px;
  }
`;

const Mission = styled.h1`
  margin-top: 223px;
  font-size: 34px;
  line-height: 1.35;
  color: ${colorSet.black};
  ${breakPoints.mobile} {
    margin-top: 100px;
    font-size: 22px;
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageFrame= styled.div`
  width: 158px;
  height: 40px;
  
  ${breakPoints.mobile} {
    width: 103px;
    height: 26px;
  }
`;

const MethodFrame = styled.div`
  margin-right: 12.5%;
  margin-top: 85px;
  ${breakPoints.mobile} {
    margin-right: 0;
    margin-top: 50px;
  }
`;

const LeftScreen = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  ${breakPoints.mobile} {
    width: 100%;
    display: block;
    padding: 0 45px;
  }
`;

const RightScreen = styled.div`
  width: 50%;
  background: ${colorSet.gray2};
  
`;


const ContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;
