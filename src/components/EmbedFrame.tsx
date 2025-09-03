type Props = {
  src: string;
  title: string;
  height?: number;
};

export default function EmbedFrame({ src, title, height = 600 }: Props) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        style={{ border: "0", borderRadius: "12px" }}
        loading="lazy"
      />
    </div>
  );
}
