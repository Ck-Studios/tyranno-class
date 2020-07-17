import {useState} from "react";
import styled from "styled-components";
import {breakPoints, colorSet, FullImage, InlineText, Text} from "common/theme/Theme";
import {useRouter} from "next/router";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "modules/authentication";

export default function Header({mode}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showProfileMenu, toggleProfileMenu] = useState(false);
  const user = useSelector(state => state.authentication.user);

  return (
    <HeaderWrapper className="flex justify-center items-center" mode={mode}>
      <div className="flex justify-between restrict-width relative">
        <div className="header-left flex items-center">
          <LogoFrame onClick={() => router.push("/main")}>
            <Image
              src="/static/images/logo/tyrannologo-05.png"
            />
          </LogoFrame>
          {
            mode !== "simple" &&
            <div className="header-menu-wrapper flex">
              <MenuFont
                marginLeft={62}
                underline
              >
                오프라인 클래스
              </MenuFont>

              <MenuFont
                marginLeft={40}
              >
                온라인 클래스
              </MenuFont>
            </div>
          }
        </div>
        <div className="header-right flex align-center"
             onClick={user ? () => console.log("hi") : () => router.push("/login")}>
          {
            user ?
              <>
                <div className="row-flex" onClick={() => toggleProfileMenu(!showProfileMenu)}>
                  <ProfileWrapper
                    className="circle-wrapper overflow-hidden"
                  >
                    <FullImage
                      objectFit="cover"
                      src={user?.profileImage}
                    />
                  </ProfileWrapper>
                </div>
                {
                  showProfileMenu &&
                  <ProfileMenuFrame>
                    <div className="row-flex" onClick={() => router.push("/mypage")}>
                      <ProfileWrapper
                        className="circle-wrapper overflow-hidden"
                      >
                        <FullImage
                          objectFit="cover"
                          src={user?.profileImage}
                        />
                      </ProfileWrapper>
                      <div style={{marginLeft: 12}}>
                        <p
                          className="text-14 mobile:text-12"
                          style={{lineHeight: 1.57}}
                        >
                          {user.name}<br/>
                          <span
                            className="text-14 mobile:text-12 text-green-1 mobile:hidden"
                          >
                            마이페이지 >
                          </span>
                        </p>
                        <p
                          className="text-14 mobile:text-12 text-green-1 desktop:hidden"
                        >
                          마이페이지 >
                        </p>
                      </div>
                    </div>
                    <Divider/>
                    <Text
                      onClick={() => dispatch(logout())}
                      fontSize="14px"
                      lineHeight={1.57}
                    >
                      로그아웃
                    </Text>
                  </ProfileMenuFrame>
                }
              </>
              :
              <MenuFont>
                로그인
              </MenuFont>
          }
        </div>
      </div>
    </HeaderWrapper>
  )
}

// style={{width: 40, height: 40, background: colorSet.gray1}}

const ProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: ${colorSet.gray1};
  
  ${breakPoints.mobile} {
    width: 32px;
    height: 32px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colorSet.gray1};
  margin: 21.5px 0;
  ${breakPoints.mobile} {
    margin: 20px 0 17px 0;
  }
`;

const ProfileMenuFrame = styled.div`
  box-sizing: border-box;
  width: 200px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
  background: ${colorSet.white};
  padding: 28px 22px 24px 22px;
  position: absolute;
  top: 150%;
  right: 0;
  ${breakPoints.mobile} {
    width: 170px;
    border-radius: 5px;
    top: 110%;
    padding: 20px 20px 18px 20px;
  }
  
`;

const MenuFont = styled.p`
  margin-left: ${({marginLeft}) => marginLeft ? marginLeft : 0}px;
  font-size: 1rem;
  line-height: 1.13;
  text-decoration: ${({underline}) => underline ? "underline" : "none"};
  text-underline-position: under;
  ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoFrame = styled.div`
  width: 198px;
  height: 50px;
  ${breakPoints.mobile} {
    width: 115px;
    height: 58px;
  } 
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: ${({mode}) => mode === "simple" ? 80 : 90}px;
  padding: ${({mode}) => mode === "simple" ? "0 24px" : "initial"};
  background: ${colorSet.white};
  ${breakPoints.mobile} {
    padding: 0 16px;
    height: 50px;
    .header-menu-wrapper {
      display: none;
    }
  }
`;
