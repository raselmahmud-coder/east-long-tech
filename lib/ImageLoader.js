export default function ImageLoader({ src }) {
  return process.env.NODE_ENV == "production"
    ? `https://eastlongsz.com${src}`
    : `http://localhost:3000/${src}` && `http://192.168.2.3:3000/${src}`;//destop and mobile preview
}
