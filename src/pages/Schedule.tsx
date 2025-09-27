import EmbedFrame from "../components/EmbedFrame";

const CALENDAR_URL = import.meta.env.VITE_CALENDAR_EMBED_URL || "";

export default function Schedule() {
  return (
    <main style={{ paddingTop: "0.5rem", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2rem" }}>
      <h1>Class Schedule</h1>
      <EmbedFrame src={CALENDAR_URL} title="Calendar" height={600} />
    </main>
  );
}
