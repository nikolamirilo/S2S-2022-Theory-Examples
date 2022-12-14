import React from "react";
import { Card } from "../../components";
import data from "../../data.json";

const Home = () => {
  return (
    <div className="home">
      <h1>Users generated by reusable component Card</h1>
      <div className="cards-container">
        {data.users &&
          data.users.map((user, idx) => {
            return <Card key={idx} title={user.name} image={user.image} description={user.description} />;
          })}
      </div>
    </div>
  );
};

export default Home;
