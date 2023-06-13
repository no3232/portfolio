import Image from 'next/image';

interface MainImage {
  imgsrc: string;
}

function MainImage({ imgsrc }: MainImage) {
  return (
    <>
      <Image src={imgsrc} alt=''/>
    </>
  );
}

export default MainImage;
