import "./Post.css";
import React from "react";
import { Card, Modal, Carousel, Container } from "react-bootstrap";

function PostModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Carousel variant="dark" className="h-95">
            {props.img.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={url} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <br />
          <p>{props.content}</p>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  render() {
    return (
      <div className="m-3">
        <Card
          className="rounded-4 border border-dark overflow-hidden hover-zoom"
          style={{ cursor: "pointer" }}
          onClick={() => this.setState({ showModal: true })}
        >
          <Card.Img src={this.props.img[0]} className="rounded-4" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>

        <PostModal
          img={this.props.img}
          title={this.props.title}
          content={this.props.content}
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}
