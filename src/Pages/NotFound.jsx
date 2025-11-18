import NavBar from "../components/NavBar";

export default function NotFound() {
  return (
    <div className="NotFound">
      <NavBar />
      <h1>404 - Page Not Found</h1>
      <h3>Sorry, the page you are looking for does not exist.</h3>
    </div>
  );
}