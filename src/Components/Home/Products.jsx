import Carousel from "./Carousel";

const Products = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-[40px] font-semibold">Products</h1>
        </div>
        <div className="w-[600px] mt-2 text-center text-[20px]">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </div>
      </div>
      <div className="mt-[50px]">
        <Carousel></Carousel>
      </div>
    </div>
  );
};

export default Products;
