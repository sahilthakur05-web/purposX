import {
  faMagnifyingGlass,
  faTwitter,
  faInstagram,
  faAngleUp,
  faAngleDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.css";
export default function Home() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.044398347623!2d-122.41941808500587!3d37.77492927975845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8f8f8f8f%3A0x8585808f8f8f8f8f!2sSa n+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1684268970812!5m2!1sen!2sin";
  return (
    <>
      <div className="header">
        <div className="inner-header">
          <div className="logo">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=sph"
              alt=""
            />
          </div>
          <div className="middle">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Search</p>
            <p className="p-hide"> Recommended listings</p>
          </div>
          <div className="right">
            <p>Also selling?</p>
            <p>More</p>
            <p className="p">Sign In</p>
          </div>
        </div>
      </div>
      <div className="map-container">
        <div className="inner-map">
          <div className="map-left">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="map-right">
            <div className="map-right-1">
              <h4>Homes for sale in Anderson Mill West</h4>
              <p>
                1 listing found — Listed on the MLS. Provided by Opendoor
                Brokerage.
              </p>
              <div className="btn">
                <button>
                  Newest <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <button>More Filters</button>
              </div>
            </div>
            <div className="map-right-2">
              <div className="m-img">
                <div className="heart">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="m-content">
                <h3>Rs 3,60,00,000</h3>
                <p>3bd 2ba 1,819 ft² Hanuman Chowk, Mulund East, Mumbai</p>
              </div>
            </div>
            <div className="map-right-2">
              <div className="m-img">
                {" "}
                <div className="heart">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="m-content">
                <h3>Rs 1,60,00,000</h3>
                <p>3bd 2ba 1,819 ft² LBS Road Mulund, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
