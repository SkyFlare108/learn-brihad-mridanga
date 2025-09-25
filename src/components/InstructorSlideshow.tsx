import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const instructors = [
  {
    name: "Samarth Appalabattula",
    bio: "Samarth is a 10th grader at Eastlake High School who has been playing the mridanga for many years. His passion for the instrument has grown into a love for teaching, and he enjoys helping students build confidence in their mridanga playing so they can experience the joy of rhythm and music just as he does.",
    image: "/samarth-photo.png", // Replace with actual image path
  },
  {
    name: "Arjun Krishna Gundimeda",
    bio: "Arjun is a freshman at Skyline High School with a love for music and teaching. He plays the violin, enjoys chess, and is especially passionate about mridanga. Arjun brings a calm and patient approach to teaching, always taking the time to make sure his students feel confident and supported as they learn.",
    image: "/arjun-photo.png", // Replace with actual image path
  },
  {
    name: "Harisri Yerramsetti",
    bio: "Harisri is a dedicated teacher who focuses on building a strong foundation for her students. She has been teaching for 5 years.",
    image: "/hari-photo.png", // Replace with actual image path
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
                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", aspectRatio: "1/1" }}
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
