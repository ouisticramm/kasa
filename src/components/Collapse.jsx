import "./Collapse.scss";

function Collapse(props) {
  return (
    <div className="collapse_description">
      <p className="description">
        <span>{props.title}</span>
        <img src="arrow.svg" alt="chevron cliquable" />
      </p>
      <p className="Lorem">{props.content}</p>
    </div>
  );
}

export default Collapse;
