import EmbedFrame from "../components/EmbedFrame";

const CALENDAR_URL = import.meta.env.VITE_CALENDAR_EMBED_URL || "";
const FORM_URL = import.meta.env.VITE_GOOGLE_FORM_EMBED_URL || "";

export default function Classes() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Class Schedules & Registration</h1>
      <h2>Calendar</h2>
      <EmbedFrame src={CALENDAR_URL} title="Calendar" height={600} />

      <h2>Registration</h2>
      <EmbedFrame src={FORM_URL} title="Google Form" height={1200} />
    </main>
  );
}
