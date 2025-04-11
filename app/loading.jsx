import { ImSpinner2 } from "react-icons/im";
function Loading() {
  return <div className="animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]"><ImSpinner2 size={30}/></div>;
}

export default Loading;
