import { motion } from "framer-motion";
import {FADE_TRANSITION_VARIANTS} from "common/animation/variants";
import { pointColor } from "common/theme/Theme";

export default function AnimationFrame(props) {
  const { variants, noFlexShrink, background } = props;
  return (
    <motion.div
      className="animation-frame"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: noFlexShrink ? "auto auto auto" : 1,
        width: "100%",
        background: background || "transparent",
      }}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants || null}
    >
      {props.children}
    </motion.div>
  );
}
