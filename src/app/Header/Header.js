import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Header() {
  return (
    <div className="header-section">
      <div className="inner-header-section">
        <div className="left-header">
          <div className="logo">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=sph"
              alt=""
            />
          </div>
        </div>
        <div className="middle-header">
          <button>
            Pune <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div className="input-container">
            <input type="text" placeholder="Search Project, Builder..." />
            <div className="input-middle">
              <div className="line"></div>
            </div>
            <div className="icon-section">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className="right-header">
          <p>Sign In</p>

          <div className="burger-line"></div>
        </div>
      </div>
    </div>
  );
}
