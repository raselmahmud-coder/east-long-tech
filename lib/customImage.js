import { useState } from "react";
import Image from "next/image";

const CustomImage = ({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Image
      src={src}
      alt={alt}
      onLoad={handleLoad}
      {...props}
      placeholder={loading ? "blur" : "empty"}
      style={{
        transition: "all 0.3s",
        ...props?.style,
      }}
    />
  );
};

export default CustomImage;
