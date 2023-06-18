import { Card, Avatar } from "antd";

import "../assets/css/card.css";



function cardComponent(props) {
  const {
    title,
    icon,
    iconBackground,
    content,
    iconColor,
    cardWidth,
    cardHeight
  } = props;
  const cardStyle = { marginTop: 16, width: cardWidth, height: cardHeight ?? 120, fontSize: 20, borderRadius:20, boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)" };
  return (
    <Card style={cardStyle} title={title} className="card">
      <div className="card-content">
        <div>{content}</div>
        <Avatar
          style={{
            background: iconBackground,
            justifyContent: "center",
            color: iconColor ?? "#fff"
          }}
          size={40}
          src={icon}
        />
      </div>
    </Card>
  );
}
export default cardComponent;
