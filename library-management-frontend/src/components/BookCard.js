import { Card, Image, Row, Col } from "antd";
import "../assets/css/book-card.css";

function BookCardComponent(props) {
  const { image, bookName, author, language, pages } = props;
  const cardStyle = {
    width: 325,
    height: 147,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
    padding: 0
  };
  return (
    <Card
      style={cardStyle}
      bodyStyle={{
        padding: 10,
      }}
    >
      <Row style={{ flexFlow: "unset" }}>
        <Image
          width={85}
          height={123}
          style={{
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
            borderRadius: 10,
          }}
          src={`${
            image ??
            "https://libgen.li/covers/2571000/9ad575ef3bf23fd0e12af821b1556861.jpg"
          }`}
        />
        <Col
          style={{
            marginLeft: 10,
            width: "70%",
          }}
        >
          <div
            className="book-name"
            style={{ fontSize: 16, fontWeight: "bold" }}
          >
            {bookName ?? "Head First Java 2nd"}
          </div>
          <div
            className="author"
            style={{ fontSize: 14, fontWeight: 500, paddingTop: 10 }}
          >
            {author ?? "Kathy Sierra and Bert Bates"}
          </div>
          <div
            className="language"
            style={{ fontSize: 14, fontWeight: 500, paddingTop: 10 }}
          >
            Language: {language ?? "English"}
          </div>
          <div
            className="page"
            style={{ fontSize: 14, fontWeight: 500, paddingTop: 10 }}
          >
            {pages ?? "500"} pages
          </div>
        </Col>
      </Row>
    </Card>
  );
}
export default BookCardComponent;
