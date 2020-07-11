import styled from "styled-components";
import {colorSet} from "common/Theme/Theme";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

export default function Header({mode}) {
  const router = useRouter();
  const user = useSelector(state => state.authentication.user);

  return (
    <HeaderWrapper className="flex justify-center items-center" mode={mode}>
      <div className="flex justify-between restrict-width">
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
        <div className="header-right flex align-center" onClick={user ? () => console.log("hi") : () => router.push("/login")}>
          <MenuFont>
            {
              user ?
                user
                :
                "로그인"
            }
          </MenuFont>
        </div>
      </div>
    </HeaderWrapper>
  )
}

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
