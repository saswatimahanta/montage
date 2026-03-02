import ElegantSummer from "@/components/elegant-summer/elegant-summer";

const breakpointColumnsObj = {
  default: 6,
  1536: 6,
  1280: 5,
  1024: 3,
  768: 2,
  640: 1,
};

const ElegantSummerPage = () => {
  return <ElegantSummer breakpointColumnsObj={breakpointColumnsObj} />;
};

export default ElegantSummerPage;
