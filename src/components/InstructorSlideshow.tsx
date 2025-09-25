import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const instructors = [
  {
    name: "Samarth Appalabattula",
    bio: "Samarth is a passionate mridanga player with over 10 years of experience. He loves to share his knowledge with students of all ages.",
    image: "/path/to/samarth.jpg", // Replace with actual image path
  },
  {
    name: "Arjun Krishna Gundimeda",
    bio: "Arjun has been playing mridanga for 8 years and has performed in numerous events. He specializes in teaching advanced techniques.",
    image: "/path/to/arjun.jpg", // Replace with actual image path
  },
  {
    name: "Harisri Yerramsetti",
    bio: "Harisri is a dedicated teacher who focuses on building a strong foundation for her students. She has been teaching for 5 years.",
    image: "/path/to/harisri.jpg", // Replace with actual image path
  },
];

export default function InstructorSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px" }}>
      <Slider {...settings}>
        {instructors.map((instructor, index) => (
          <div key={index} style={{ padding: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <img
                src={instructor.image}
                alt={instructor.name}
                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <h3>{instructor.name}</h3>
                <p>{instructor.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
