import MainContainer from "main/containers/MainContainer";
import {initializeApollo} from "client/apollo/client";
import AnimationFrame from "common/components/AnimationFrame";

export default function Index() {
  return (
    <AnimationFrame>
      <MainContainer/>
    </AnimationFrame>
  )
}

Index.getInitialProps = async () => {
  const apolloClient = initializeApollo();
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),

    },
    unstable_revalidate: 1,
  }
};
