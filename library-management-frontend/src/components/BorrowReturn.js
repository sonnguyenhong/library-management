import { Card, Avatar } from "antd";




function  borrowReturnComponent(props) {
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
    <div>
      Mượn trả
    </div>
  );
}
export default borrowReturnComponent;
