import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper className="flex justify-center items-center">
      <div className="flex justify-between restrict-width">
        <div className="header-left flex items-center">
          <LogoFrame>
            <Image
              src="static/images/logo/tyrannologo-05.png"
            />
          </LogoFrame>
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
        <div className="header-right flex align-center">
          <MenuFont>
            로그인
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
  height: 90px;
`;
