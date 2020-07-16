import {useState} from "react";
import Header from "common/components/header/Header";
import LightFooter from "common/components/footer/LightFooter";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {
  colorSet,
  FullImage,
  ImageWrapper,
  PageHeaderWrapper,
  Text,
  FormTitle,
  FormInputLayout,
  Input,
  CheckBoxWrapper,
  ActionButton
} from "common/theme/Theme";

export default function MyInfoContainer() {
  const [checked, toggleCheck] = useState(false);
  const user = useSelector(state => state.authentication.user);
  return (
    <div style={{background: colorSet.gray6}} className="h-full">
      <div className="restrict-width-640 h-full m-auto column-flex justify-between" style={{background: colorSet.white}}>
        <div className="h-full">
          <Header mode="simple"/>
          <PageHeaderWrapper>
            <Text
              fontSize="24px"
              fontWeight="bold"
              color={colorSet.white}
            >
              내 정보관리
            </Text>
          </PageHeaderWrapper>
          <ContentWrapper
            className="column-flex align-center"
          >
            <ProfileImageFrame>
              <ImageWrapper
                className="circle-wrapper"
                width="80px"
                height="80px"
              >
                <FullImage
                  src={user?.profileImage}
                  objectFit="cover"
                />
              </ImageWrapper>
              <EditButton/>
            </ProfileImageFrame>
            <FormWrapper>
              <FormTitle>
                이름
              </FormTitle>
              <FormInputLayout
                marginBottom="20px"
                borderRadius="4px"
              >
                <Input/>
              </FormInputLayout>
              <FormTitle>
                닉네임
              </FormTitle>
              <FormInputLayout
                marginBottom="20px"
                borderRadius="4px"
              >
                <Input/>
              </FormInputLayout>
              <FormTitle>
                휴대폰번호
              </FormTitle>
              <FormInputLayout
                marginBottom="20px"
                borderRadius="4px"
              >
                <Input/>
              </FormInputLayout>
            </FormWrapper>
            <div className="w-full row-flex justify-between align-center">
              <div className="row-flex align-center">
                <CheckBoxWrapper
                  checked={checked}
                  onClick={() => toggleCheck()}
                  marginRight="7px"
                />
                <Text
                  fontSize="14px"
                >
                  서비스 정보 수신 동의
                </Text>
              </div>
              <Text
                fontSize="14px"
              >
                회원탈퇴
              </Text>
            </div>
            <div className="w-full row-flex justify-center" style={{marginTop: 40}}>
              <ActionButton>
                수정하기
              </ActionButton>
            </div>
          </ContentWrapper>
        </div>
        <LightFooter/>
      </div>
    </div>
  )
}

const FormWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const EditButton = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: -5px;
  right: 0;
  background: ${colorSet.black};
  border-radius: 50%;
`;

const ProfileImageFrame = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  background: ${colorSet.white};
  height: 100%;
  padding: 40px 24px 100px 24px;
`;
