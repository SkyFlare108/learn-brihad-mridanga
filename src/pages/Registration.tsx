import EmbedFrame from "../components/EmbedFrame";
import { useEffect } from "react";

const FORM_URL = import.meta.env.VITE_GOOGLE_FORM_EMBED_URL || "";

export default function Registration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: "0.5rem", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2rem" }}>
      <h1>Class Registration</h1>
      <EmbedFrame src={FORM_URL} title="Google Form" height={1200} />
    </main>
  );
}
