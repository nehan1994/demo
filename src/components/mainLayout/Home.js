import React from "react";
import Login from "../Login";
const Home = () => {
  return (
    <div className="">
      <div className="">
        <img style={{ width: "100%" }} src="/images/w2.webp" />
        {/* <h1>Hpme component</h1> */}
        <div
          style={{ marginTop: "-40%", marginRight: "10%" }}
          className="d-flex justify-content-end"
        >
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
