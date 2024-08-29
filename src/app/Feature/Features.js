import "./Feature.css";

export function Features() {
  return (
    <div className="features-container">
      <div className="inner-features">
        <h4>PurposX Features</h4>
        <div className="wrap-feature">
          <div className="feature-card">
            <div className="inner-feature-card">
              <div className="feature-img"></div>
              <div className="feature-content">
                <h3>Project Unboxing</h3>
                <p>
                  Complete Project analysis with overview, location, amenities,
                  plans, carpet area, payment schemes, pros & cons, builder
                  profile etc..
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="inner-feature-card">
              <div className="feature-img"></div>
              <div className="feature-content">
                <h3>Pros & Cons</h3>
                <p>
                  First time in Indian Real Estate, Get unbiased views of
                  projects with Pros & Cons by in depth analysis from our
                  experts.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="inner-feature-card">
              <div className="feature-img"></div>
              <div className="feature-content">
                <h3>virtual 360 tour</h3>
                <p>
                  Experience the 3D Tour & feel the view, facing, & amenities of
                  the projects by sitting in your home only.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="inner-feature-card">
              <div className="feature-img"></div>
              <div className="feature-content">
                <h3>Real Time Calling</h3>
                <p>
                  Get instant resolution of your queries by our 24/7 Property
                  experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
