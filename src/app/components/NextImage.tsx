import Image from 'next/image';

type NextImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const NextImage = (props: NextImageProps) => {
  return (
    <div>
      <Image
        src={props.src}
        alt={props.alt}
        draggable
        width={props.width ?? 800}
        height={props.height ?? 600}
      />
    </div>
  );
};

export default NextImage;
