// import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  background: "--bs-body-bg",
};

class Home extends React.Component {
  render() {
    return (
      // <div className="Home">
      //     <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //         Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //     >
      //         Learn React
      //     </a>
      //     </header>
      // </div>
      <div class="bg-dark" style={divStyle}>
        <div class="bg-dark px-4 py-5 my-5 text-center text-secondary">
          <img
            class="d-block mx-auto mb-4"
            src="https://media.licdn.com/dms/image/C4E03AQEl5OwLeDJFwA/profile-displayphoto-shrink_400_400/0/1633189992386?e=1683763200&v=beta&t=aLNm9OCUDY10OMIkOUY_1cA-vztN6paX54DPaZayQLc"
            alt=""
            style={{
              borderRadius: "50%",
              width: 150,
              background: "red",
              display: "block",
            }}
          />
          <h1 class="display-5 fw-bold text-white">Justin Hom</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">Coding / Graphics / Music</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/about">
                <button type="button" class="btn btn-outline-primary btn-lg px-4 gap-3" >
                  About me
                </button>
              </Link>
              {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button> */}
            </div>
          </div>
        </div>
        {/* <div class="bg-dark" style={{ height: 200 }} /> */}
      </div>
    );
  }
}

export default Home;
