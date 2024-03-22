export default function ImageLoader({ src }) {
  return process.env.NODE_ENV == "production"
    ? `https://eastlongsz.com${src}`
    : `http://localhost:3000/${src}`;
}
