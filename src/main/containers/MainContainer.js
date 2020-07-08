import {useEffect} from "react";
import {useRouter} from "next/router";
import {axiosClient} from "client/network/axiosClient";

export default function MainContainer() {
  const router = useRouter();
  useEffect(() => {
    console.log("router path::: ", router.pathname);
    },
    [router.pathname]);
  const test = async () => {
    const res = await axiosClient.get('/login');
    if(res) {
      window.open(res?.data?.redirectUrl, "_self");
    }
  };
  return (
    <div
      onClick={() => test()}
      style={{
        width: 200,
        height: 100,
        background: "pink"
      }}
    >
      <p>카카오 로그인 테스트</p>
    </div>
  );
}
