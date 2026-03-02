import { data } from "@/app/constants/elegant-summer-images";
import Details from "@/components/elegant-summer/details";
import ElegantSummer from "@/components/elegant-summer/elegant-summer";

const breakpointColumnsObj = {
  default: 5,
  1536: 5,
  1280: 4,
  1024: 3,
  768: 2,
  640: 1,
};
interface Props {
  params: {
    id: string;
  };
}

const DetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = data.find((item) => item.slug === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Details product={product} />
      <ElegantSummer
        breakpointColumnsObj={breakpointColumnsObj}
        className="pl-24 mt-16"
      />
    </>
  );
};

export default DetailsPage;
