export default function ImageLoader({ src }) {
  if (src.toString().includes("https://")) {
    return process.env.NODE_ENV == "production"
      ? `https://eastlongsz.com${src}` && src
      : `http://localhost:3000/${src}` &&
          `http://192.168.2.3:3000/${src}` &&
          src; //desktop and mobile preview
  } else {
    return process.env.NODE_ENV == "production"
      ? `https://eastlongsz.com${src}`
      : `http://localhost:3000/${src}` && `http://192.168.2.3:3000/${src}`;
    //desktop and mobile preview
  }
}
