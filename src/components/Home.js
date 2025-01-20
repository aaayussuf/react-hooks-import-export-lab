import { username, city } from "../data/user";

function Home() {
  return (
    <div>
      <h1>
        Welcome to {username}'s portfolio from {city}!
      </h1>
    </div>
  );
}

export default Home;
