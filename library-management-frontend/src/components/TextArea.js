import { Form, Input } from "antd";
import "../assets/css/components/text-area.css";

function TextAreaComponent(props) {
  const { name, label, placeholder, width, height, ruleType, required } = props;
  return (
    <Form.Item
      name={name ?? name}
      label={label ?? "Label"}
      rules={[
        { required: required ?? false },
        { type: ruleType ?? "string", warningOnly: true },
      ]}
    >
      <Input.TextArea
        placeholder={placeholder ?? "placeholder"}
        
        style={{
          borderRadius: 10,
          width: width ?? "100%",
          height: height ?? "100%",
        }}
      />
    </Form.Item>
  );
}
export default TextAreaComponent;
