import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} flex justify-center items-center`}>
      <Image
        width={400}
        height={300}
        src={imgSrc}
        // priority
        alt=""
      />
    </div>
  );
};

export default DevImg;
