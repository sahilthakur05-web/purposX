import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./Header/Header";
import { Card } from "./Card/Card";
import { Properties } from "./Properties/Properties";
import { Features } from "./Feature/Features";
// import { Footer } from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="easy-move-container">
        <div className="inner-easy-move-container">
          <div className="easy-1">
            <div className="easy-top">
              <h2>Make the easy move</h2>
              <p>The simple way to sell or buy a home starts here</p>
            </div>
            <div className="easy-bottom">
              <input type="text" placeholder="Enter your home address" />
              <button>Get cash offer</button>
            </div>
          </div>
          <div className="easy-2">
            <div className="image-div">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Card />
      <Properties />
      <Features />
      {/* <Footer/> */}
      {/* <Gallary /> */}
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-1">
            <div className="inner-footer-1">
              <div className="logo-1">
                <img
                  src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=sph"
                  alt=""
                />
              </div>
              <div className="middle-1">
                <p>RERA No. - A51900001761</p>
                <p>C.I. Number: U45500MH2016PTC286594</p>
                <p>Write to us : support@purposX.com</p>
                <p>Sitemap</p>
              </div>
              <div className="icons">
                <div className="div1">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="div1">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="div1">3</div>
              </div>
            </div>
            <div className="inner-footer-2">
              <h5>PROJECTS BY LOCALITY</h5>
              <p>Top Projects in Hinjewadi </p>
              <p>Top Projects in Kharadi</p>
              <p>Top Projects in Wakad</p>
              <p>Top Projects in Vasai East</p>
            </div>
            <div className="inner-footer-3">
              <h5>PROJECTS BY LOCALITY</h5>
              <p>Top Projects in Hinjewadi </p>
              <p>Top Projects in Kharadi</p>
              <p>Top Projects in Wakad</p>
              <p>Top Projects in Vasai East</p>
            </div>
            <div className="inner-footer-3">
              <h5>PROJECTS BY LOCALITY</h5>
              <p>Top Projects in Hinjewadi </p>
              <p>Top Projects in Kharadi</p>
              <p>Top Projects in Wakad</p>
              <p>Top Projects in Vasai East</p>
            </div>
          </div>
          <div className="footer-2">
            <div className="f-2-1">
              <p>Privacy Policy</p>
              <p>Disclaimer</p>
            </div>
            <div className="f-2-2">
              <p>Copyright All Rights Reserved 2023 @PurposX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
