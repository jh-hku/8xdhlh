import React from "react";
import Card from 'react-bootstrap/Card';

const divStyle = {
  color: "white",
};

class About extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        {/* <>
        </>
        <h2>About Page</h2>
        <main>
          <p>This section contains information about...</p>
        </main> */}
        <div class="d-flex p-2" style={{ height: 50 }}></div>
        <Card style={{ width: "95%", height: 500}}>

        </Card>
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default About;
