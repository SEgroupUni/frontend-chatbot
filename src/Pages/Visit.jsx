import NavBar from "../components/NavBar.jsx";
import DefaultCard from "../components/VisitCard.jsx";

export default function About() {
  return (
    <div>
        <NavBar />
      <h1>Plan Your Visit</h1>
      <div className="VisitContainer">
    <DefaultCard
      header="Immerse yourself in two million years of human history, art and culture."
      description={
    <>
      Book your free ticket for Museum entry in advance to receive key information and updates before your visit and priority entry during busy periods. In our galleries come face-to-face with objects from the Sutton Hoo ship burial, explore the wonderful collection of the Islamic world and learn more about Egyptian mummies. Please see the{" "}
      <a className="Galleries"
        href="https://www.britishmuseum.org/visit#gallery-information"
        target="_blank"
        rel="noopener noreferrer"
      >
        list of available galleries to visit
      </a>.
    </>
  }
  description2="We look forward to welcoming you!"
/>
    
      <DefaultCard
      header="Free Entry"
      title="Opening times"
      description={
      <>
      Daily: 10.00–17.00 (Fridays: 20.30)
      <br />
      The Museum is closed 24–26 December.
    </> 
      }
      title2="Location"
      description2="Great Russell Street, London, WC1B 3DG"
/>
      </div>
    </div>
  );
}