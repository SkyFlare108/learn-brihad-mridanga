import InstructorSlideshow from "../components/InstructorSlideshow";

export default function About() {
  return (
    <main style={{ paddingTop: "0.5rem", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2rem" }}>
      <h1>About</h1>
      
      <p>A few years ago, what started as a small initiative in the VCC community—a handful of students teaching and learning together—has grown into something much bigger. That spark of sharing knowledge soon spread across America, bringing together students and instructors from different backgrounds under a single vision.</p>
      <p>At LBM, our mission is simple yet powerful: to empower youth to both learn and teach. We believe education is not just about absorbing information—it’s about building confidence, inspiring curiosity, and passing knowledge forward. Every student has the potential to grow, and every teacher has the ability to make a difference.</p>
      <p>Today, LBM is more than just a community—it’s a platform. A place where students can find the right instructor for their needs, and instructors can connect with eager learners who value what they have to offer. By matching students and teachers with care, we create learning experiences that are meaningful, personalized, and impactful.</p>
      <p>At its heart, LBM is built by students, for students. And as we continue to grow, our goal remains the same: to make education more accessible, collaborative, and inspiring for youth everywhere.</p>

      <h2 style={{ marginTop: "2rem" }}>Our Instructors</h2>
      <InstructorSlideshow />

    </main>
  );
}
