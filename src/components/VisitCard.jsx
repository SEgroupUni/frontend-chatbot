
export default function DefaultCard(props) {
  return (
    <div className="VisitCard">
      <h2>{props.header}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h3>{props.title2}</h3>
      <p>{props.description2}</p>
    </div>
  );
}