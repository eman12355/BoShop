import React from "react";
import "./About.css";
import Banner from "../components/Banner";

const About = () => {
  return (
    <>
      <Banner title="About Us" subtitle="Home / About" />

      <div className="container my-5">
        <div className="text-feild">
          <h2 className="fw-bold">A Brief History of the BoShop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius. Nunc consectetur scelerisque
            felis, et volutpat massa aliquam in.
          </p>
          <p>
            Consectetur adipiscing elit. Maecenas nibh dolor, efficitur eget
            pharetra ac, cursus sed sapien. Curabitur sodales porttitor tortor
            sit amet malesuada.
          </p>
        </div>

        <div className="second-feild">
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold">1950 - 1999</h4>
            <p>
              Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus sed
              sapien. Cras posuere ligula ut blandit varius. Nunc consectetur
              scelerisque felis.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold">2000 - 2018</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nibh dolor, efficitur eget pharetra ac, cursus sed sapien.
              Curabitur sodales porttitor tortor sit amet malesuada.
            </p>
          </div>
        </div>
      </div>

      <div className="team-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Team</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis egestas rhoncus.
          </p>
          <div className="row">
            {[
              {
                name: "John Doe",
                role: "Founder & CEO",
                img: "https://demos.webicode.com/html/Bo-shop-html/images/team-1.jpg",
              },
              {
                name: "Jane Smith",
                role: "Creative Director",
                img: "https://demos.webicode.com/html/Bo-shop-html/images/team-2.jpg",
              },
              {
                name: "Mike Johnson",
                role: "Marketing Lead",
                img: "https://demos.webicode.com/html/Bo-shop-html/images/team-3.jpg",
              },
            ].map((member, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="team-member">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded-circle mb-3"
                  />
                  <h5 className="fw-bold">{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="work-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Awesome Work</h2>
          <p className="mb-5">Explore some of our best projects and designs.</p>
          <div className="row">
            {[
              "cultur-img-1.jpg",
              "cultur-img-2.jpg",
              "cultur-img-3.jpg",
              "cultur-img-4.jpg",
            ].map((img, idx) => (
              <div key={idx} className="col-md-3 mb-4">
                <img
                  src={`https://demos.webicode.com/html/Bo-shop-html/images/${img}`}
                  alt={`Work ${idx + 1}`}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
