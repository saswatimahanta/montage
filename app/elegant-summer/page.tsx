import ElegantSummer from "@/components/elegant-summer/elegant-summer";
import { data } from "@/app/constants/elegant-summer-images";

const breakpointColumnsObj = {
  default: 6,
  1536: 6,
  1280: 5,
  1024: 3,
  768: 2,
  640: 1,
};
const ElegantSummerPage = () => {
  return (
    <ElegantSummer data={data} breakpointColumnsObj={breakpointColumnsObj} />
  );
};

export default ElegantSummerPage;
