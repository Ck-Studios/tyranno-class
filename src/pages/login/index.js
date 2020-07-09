import LoginContainer from "login/containers/LoginContainer.js";
import {initializeApollo} from "client/apollo/client";
import AnimationFrame from "common/components/AnimationFrame";

export default function Index() {
  return (
    <AnimationFrame>
      <LoginContainer/>
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
