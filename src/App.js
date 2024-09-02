import React, { useState, useEffect } from "react";

import { getPosts, getRandomUserData } from "./api/index";
import PostCards from "./components/PostCards";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUserData().then((user) => setUserData(user.results[0]));
  }, []);
  const refresh = () => {
    getRandomUserData().then((user) => setUserData(user.results[0]));
  };
  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh</button>
      {data ? (
        data.map((e) => <PostCards title={e.title} body={e.body} />)
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
}

export default App;
