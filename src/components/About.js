import { image } from "../data/user";

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={image} alt="profile" />
      <p>This is the about section of the portfolio.</p>
    </div>
  );
}

export default About;
