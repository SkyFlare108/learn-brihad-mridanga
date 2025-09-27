import InstructorSlideshow from "../components/InstructorSlideshow";
import Timeline from "../components/Timeline";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main style={{ paddingTop: "0.5rem", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2rem" }}>
      <h1>About</h1>
      <Timeline />

      <h2 style={{ marginTop: "2rem" }}>What We Do</h2>
      <p>LBM is a platform that connects students and instructors — making it easy for someone who wants to learn mridanga to find the right teacher.</p>
      <p>Whether you’re completely new or already know a few beats, we help match you with someone who can guide you at your level — at your pace.</p>

      <h2 style={{ marginTop: "2rem" }}>Our Mission</h2>
      <ul>
        <li>Empower youth to learn and grow through mridanga</li>
        <li>Encourage teaching as a way to reinforce learning and give back</li>
        <li>Support the culture of kirtan by training the next generation of mridanga players</li>
      </ul>
      <p>At its heart, LBM is about passing down tradition in a way that’s practical, inspiring, and community-driven.</p>

      <h2 style={{ marginTop: "2rem" }}>Our Instructors</h2>
      <InstructorSlideshow />

      <h2 style={{ marginTop: "2rem" }}>Want to Learn?</h2>
      <p>LBM is here to support your journey with the mridanga.</p>
      <p>Reach out, pick up a drum, and let's play.</p>
      <Link to="/registration" style={{
        display: "inline-block",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "0.8rem 1.5rem",
        borderRadius: "8px",
        textDecoration: "none",
        marginTop: "1rem",
        fontWeight: "bold",
      }}>Join a Class</Link>
    </main>
  );
}
