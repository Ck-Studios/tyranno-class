import {useEffect} from "react";
import {useRouter} from "next/router";
import AnimationFrame from "common/components/AnimationFrame";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/main")
  }, []);
  return (
    <AnimationFrame/>
  )
}
