import styled from "styled-components";
import {useSelector} from "react-redux";
import {colorSet, FullImage} from "common/theme/Theme";


export default function UserInfoCard__Mobile(props) {
  const user = useSelector(state => state.authentication.user);
  return (
    <Wrapper>
      <ProfileWrapper className="flex align-center">
        <div className="circle-wrapper bg-gray-1 overflow-hidden" style={{width: 45, height: 45, marginRight: 15,}}>
          <FullImage
            src={user?.profileImage}
            objectFit="cover"
          />
        </div>
        <div>
          <div className="flex">
            <p
              style={{lineHeight: 1.14}}
              className="text-14 font-bold"
            >
              이름
            </p>
            <div style={{marginLeft: 5, width: 14, height: 14}} className="circle-wrapper bg-gray-1"/>
          </div>
          <p
            style={{marginTop: 6, lineHeight: 1.13}}
            className="text-12 text-gray-9"
          >
            이메일
          </p>
        </div>
      </ProfileWrapper>
      <div className="flex" style={{height: 55}}>
        <div className="flex-1 flex justify-center align-center">
          <p className="text-13 underline">
            내 클래스
          </p>
        </div>
        <div className="flex-1 flex justify-center align-center">
          <p className="text-13 text-gray-3">
            내 정보관리
          </p>
        </div>
        <div className="flex-1 flex justify-center align-center">
          <p className="text-13 text-gray-3">
            주문내역
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const ProfileWrapper = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid ${colorSet.gray5};  
`;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 0 0 0;
`;
