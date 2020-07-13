import {useState} from "react";
import styled from "styled-components";
import {colorSet, FullImage, InlineText, Text} from "common/Theme/Theme";
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
            <>
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
            </>
          }
        </div>
        <div className="header-right flex align-center"
             onClick={user ? () => console.log("hi") : () => router.push("/login")}>
          {
            user ?
              <>
                <div className="row-flex" onClick={() => toggleProfileMenu(!showProfileMenu)}>
                  <div
                    className="circle-wrapper overflow-hidden"
                    style={{width: 40, height: 40, background: colorSet.gray1}}
                  >
                    <FullImage
                      objectFit="cover"
                      src="/static/images/profile/profile2.jpg"
                    />
                  </div>
                </div>
                {
                  showProfileMenu &&
                  <ProfileMenuFrame>
                    <div className="row-flex" onClick={() => router.push("/mypage")}>
                      <div
                        className="circle-wrapper overflow-hidden"
                        style={{width: 40, height: 40, background: colorSet.gray1}}
                      >
                        <FullImage
                          objectFit="cover"
                          src="/static/images/profile/profile2.jpg"
                        />
                      </div>
                      <div style={{marginLeft: 12}}>
                        <Text
                          lineHeight={1.57}
                          fontSize="14px"
                        >
                          {user.name}<br/>
                          <InlineText
                            color={colorSet.green1}
                            fontSize="14px"
                          >
                            마이페이지 >
                          </InlineText>
                        </Text>
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colorSet.gray1};
  margin: 21.5px 0;
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
`;

const MenuFont = styled.p`
  margin-left: ${({marginLeft}) => marginLeft ? marginLeft : 0}px;
  font-size: 1rem;
  line-height: 1.13;
  text-decoration: ${({underline}) => underline ? "underline" : "none"};
  text-underline-position: under;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoFrame = styled.div`
  width: 198px;
  height: 50px;  
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: ${({mode}) => mode === "simple" ? 80 : 90}px;
  padding: ${({mode}) => mode === "simple" ? "0 24px" : "initial"};
  background: ${colorSet.white};
`;
