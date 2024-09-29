import "./ABanner.scss";

function ABanner({ imageUrl = "AboutBanner.png" }) {
  return (
    <div className="abanner">
      <img src={imageUrl} alt="About Banner" />
    </div>
  );
}

export default ABanner;
