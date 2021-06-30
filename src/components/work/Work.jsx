import { useState } from "react";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Google Cloud Platform",
      desc:
        "Completed course offered by Google CLoud Platform with hands on experience with the real platform",
      img:
        "data:image/png;base64,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",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Ethical Hacking",
      desc:
        "Learn the most up to date skills, tools and techniques to hack systems like black-hat hackers and secure them like security experts.",
      img:
        "https://img-c.udemycdn.com/course/240x135/857010_8239_2.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h3>Certificates</h3>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  <img src alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}