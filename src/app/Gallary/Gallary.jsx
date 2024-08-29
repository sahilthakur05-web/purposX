import "./gallary.css";

export default function Gallary() {
  return (
    <div className="gallary">
      <div className="inner-gallary">
        <div className="gallary-1"></div>
        <div className="gallary-2">
          <div className="g-2-1"></div>
          <div className="g-2-2"></div>
          <div className="g-2-1 g-2-4"></div>
          <div className="g-2-3">
            <div className="gallary-box">View all photos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
