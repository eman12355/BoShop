import { GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import Slider from "../components/Slider";
import Product from "../components/ProductList";
import { Link } from "react-router-dom";
import img1 from "../Images/img1.jfif";
import img2 from "../Images/img2.jfif";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="container1">
        <div className="cards">
          <Product />
        </div>
      </div>

      <div className="container2">
        <div className="upper-portion">
          <img src={img1} alt="img" />
          <div className="right">
            <h3>A Brief History of the BoShop</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h6>- 1950 - 1999</h6>
            <p>Lorem ipsum dolor sit amet, efficitur eget pharetra...</p>
            <h6>- 2000 - 2018</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>

        <div className="upper-portion">
          <div className="right">
            <h3>Fully Customizability Options Look Beautiful in 2018</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <ul className="left">
              <li>
                <Link className="fashion">
                  <GiSewingMachine />
                </Link>
                <h5>Fully Customizability</h5>
              </li>
              <li>
                <Link className="fashion">
                  <GiSewingNeedle />
                </Link>
                <h5>Fully Hand Made</h5>
              </li>
              <li>
                <Link className="fashion">
                  <RiShirtFill />
                </Link>
                <h5>Elegant Looks</h5>
              </li>
              <button className="left-button">Order Now</button>
            </ul>
          </div>
          <img src={img2} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Home;
