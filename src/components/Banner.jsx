import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <div class="banner">
      <style type="text/css">
        {`  .banner{
            margin-top: 0;
            padding: 160px 0 100px 0;
            background-image: url('../assets/banner.png');
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            }
            .banner h1 {
                font-size: 65px;
                font-weight: 700;
                letter-spacing: 0.8px;
                line-height: 1;
                margin-bottom: 20px;
                display: block;
            }
        `}
      </style>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <h1>
            {`Hi! I'm Judy`}{" "}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
            >
              <span className="wrap">{}</span>
            </span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col xs={12} md={6} xl={5}></Col>
      </Row>
    </div>
  );
};
