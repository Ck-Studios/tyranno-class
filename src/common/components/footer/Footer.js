import styled from "styled-components";
import {breakPoints, colorSet} from "common/theme/Theme";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="restrict-width column-flex justify-center m-auto">
        <MenuFrame>
          <LogoFrame>
            <Image
              src="/static/images/logo/tyranno-logo-light-08.png"
            />
          </LogoFrame>
          <MenuText marginLeft={24} className="mobile:hidden">
            이용약관
          </MenuText>
          <MenuText marginLeft={20} className="mobile:hidden">
            개인정보 처리방침
          </MenuText>
        </MenuFrame>
        <div className="desktop:hidden flex">
          <MenuText>
            이용약관
          </MenuText>
          <MenuText marginLeft={13.5}>
            개인정보 처리방침
          </MenuText>
        </div>
        <CompanyInfoText>
          (주)시냅스코퍼레이션  | 대표 박찬규 | 서울특별시 서초구 강남대로 527 12층 1209호  | 사업자등록번호 : 000-00-00000 | 통신판매업신고 : 2020-서울ㅇㅇ-0000
        </CompanyInfoText>
        <ContactMail>
          info@synapsecorp.kr
        </ContactMail>
        <Copyrights>
          © 2020 Synapse Corporation Inc.
        </Copyrights>
      </div>
    </FooterWrapper>
  )
}

const Copyrights = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${colorSet.gray1};
`;

const ContactMail = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${colorSet.pointColor};
  margin-bottom: 10px;
`;

const CompanyInfoText = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 2;
  color: ${colorSet.gray1};
`;

const MenuText = styled.p`
  margin-left: ${({marginLeft}) => marginLeft || 0}px;
  font-size: 14px;
  color: ${colorSet.gray1};
`;

const MenuFrame = styled.div`
  display: flex;
  align-items: flex-end;
  ${breakPoints.mobile} {
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LogoFrame = styled.div`
  width: 122px;
  height: 28px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  background: ${colorSet.black};
  ${breakPoints.mobile} {
    height: auto;
    padding: 40px 16px;
  }
`;
