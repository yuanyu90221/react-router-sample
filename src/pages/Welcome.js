import { Link } from "react-router-dom";

const Welcome = () => {
  return (
  <section>
    <h1>The Welcome Page</h1>
    <Link to="new-user">New User</Link>
  </section>);
};

export default Welcome;