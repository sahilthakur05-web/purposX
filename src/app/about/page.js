import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallary from "../Gallary/Gallary";
import {
  faAngleDown,
  faAngleUp,
  faMagnifyingGlass,
  faPhoneVolume,
  faTwitter,
  faInstagram,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import MapComponent from "../Map/Map";
export default function About() {
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
      <Gallary />
      <div className="purposXteam">
        <div className="inner-purposXteam">
          <div className="purpos-left">
            <div className="purpos-left-top">
              <div className="purpos-left-top-1">
                <h3>Rs 1,60,00,000</h3>
                <div className="heart-circle">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div className="purpos-left-top-2">
                <p>3 bedrooms • 2 bathrooms • 1,819 square feet • Active</p>
              </div>
              <div className="purpos-left-top-3">
                <p>LBS Road Mulund, Mumbai</p>
              </div>
              <div className="purpos-left-top-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div className="purpos-left-bottom">
              <div className="purpos-left-bottom-1">
                <h3>Description</h3>
              </div>
              <div className="purpos-left-bottom-2">
                <div className="purpos-left-bottom-2-1">
                  <p>Architecture</p>
                  <p>Hafeez Contractor</p>
                </div>
                <div className="purpos-left-bottom-2-1">
                  <p>Open Green Spaces</p>
                  <p>60,000 sq. ft</p>
                </div>
              </div>
              <div className="purpos-left-bottom-3">
                <div className="purpos-left-bottom-2-1">
                  <p>Amenities</p>
                  <p>Sitetectonix – Singapore</p>
                </div>
                <div className="purpos-left-bottom-2-1">
                  <p>Club House</p>
                  <p>10,000 sq. ft.</p>
                </div>
              </div>
              <div className="purpos-left-bottom-4">
                <div className="purpos-left-bottom-2-1">
                  <p>Land Parce</p>
                  <p>2.4 Acres</p>
                </div>
                <div className="purpos-left-bottom-2-1">
                  <p>Pincode</p>
                  <p>400081</p>
                </div>
              </div>
            </div>
          </div>
          <div className="purpos-right">
            <div className="call-card">
              <div className="inner-call-card-1">
                <p>Call PurposX Team</p>
                <FontAwesomeIcon icon={faAngleUp} />
              </div>
              <div className="inner-call-card-img">
                <img
                  src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=sph"
                  alt=""
                />
              </div>
              <div className="inner-call-btn">
                <div className="call-circle-icon">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <p>+91-8902462524</p>
              </div>
              <div className="inner-call-fourth">
                <p>Book Online Appointment</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className="inner-call-fourth">
                <p>Book Site Visit</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className="inner-call-fourth">
                <p>Connect Builder</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-lodha-container">
        <div className="inner-lodha">
          <div className="w-lodha">
            <div className="lodha-left">
              <h2>Why Lodha : Mulund East?</h2>
            </div>
            <div className="lodha-right">
              <div className="l-r-1">
                <div className="div">
                  <p>i</p>
                  <p>Fully Air Conditioned homes</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Minimal passage wastage</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Vastu complaint layouts</p>
                </div>
              </div>
              <div className="l-r-1">
                <div className="div">
                  <p>i</p>
                  <p>Seperate Wardrobe niches</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Large sun-decks in Living Rooms</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Rooftop Sports Field</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-lodha-1"></div>
        </div>
      </div>
      <div className="property-details">
        <div className="inner-property">
          <div className="property-left">
            <div className="pd">
              <h3>Property Details</h3>
            </div>
            <div className="pd-1">
              <div className="pd-2">
                <p>Property Size</p>
                <p>1,146 ft2</p>
              </div>
              <div className="pd-2">
                <p>Developer Name</p>
                <p>Lodha</p>
              </div>
            </div>
            <div className="pd-1">
              <div className="pd-2">
                <p>Amenities</p>
                <p>32</p>
              </div>
              <div className="pd-2">
                <p>USP Based</p>
                <p>Luxury</p>
              </div>
            </div>
            <div className="pd-1">
              <div className="pd-2">
                <p>Floor Available</p>
                <p>11-20</p>
              </div>
              <div className="pd-2">
                <p>Towers</p>
                <p>2</p>
              </div>
            </div>
            <div className="pd-1">
              <div className="pd-2">
                <p>Possession</p>
                <p>2024-12-20</p>
              </div>
              <div className="pd-2">
                <p>Configuration</p>
                <p>4 BHK</p>
              </div>
            </div>
            <div className="pd-1">
              <div className="pd-2">
                <p>Exterior Material</p>
                <p>Glass Facade</p>
              </div>
              <div className="pd-2">
                <p>RERA No.</p>
                <p>P51800031360, P51800018893</p>
              </div>
            </div>
            <div className="pd-1">
              <div className="pd-2">
                <p>Parking</p>
                <p>1</p>
              </div>
              <div className="pd-2">
                <p>Rental Expected</p>
                <p>3%</p>
              </div>
            </div>
          </div>
          <div className="property-right"></div>
        </div>
      </div>
      <div className="why-lodha-container">
        <div className="inner-lodha">
          <div className="w-lodha">
            <div className="lodha-left">
              <h2>Amenities and Features</h2>
            </div>
            <div className="lodha-right">
              <div className="l-r-1">
                <div className="div">
                  <p>i</p>
                  <p>Club House</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Hill View</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Swimming Pool</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Electricity</p>
                </div>
              </div>
              <div className="l-r-1">
                <div className="div">
                  <p>i</p>
                  <p>Kids Play Area</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>River View</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Forest Trail</p>
                </div>
                <div className="div">
                  <p>i</p>
                  <p>Heating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-lodha-1"></div>
        </div>
      </div>

      <div className="section">
        <div className="inner-section">
          <div className="w-section">
            <h3>Connect with Banks Official for the Best Rates</h3>
            <div className="bank">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="map-container">
        <div className="map-div">
          <h1>Map</h1>
        </div>

        <MapComponent />
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
