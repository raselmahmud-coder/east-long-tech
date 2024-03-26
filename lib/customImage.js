import { useState } from "react";
import Image from "next/image";

const CustomImage = ({ src, alt = "any", ...props }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Image
      unoptimized={true}
      src={src}
      alt={alt}
      onLoad={handleLoad}
      {...props}
      placeholder={loading ? "blur" : "empty"}
      sizes="100vw"
      style={{
        transition: "all 0.3s",
        filter: loading ? "blur(20px)" : "none",
        ...props?.style,
      }}
    />
  );
};

export default CustomImage;
