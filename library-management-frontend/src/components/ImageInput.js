import { Button, Form, Upload } from "antd";
import "../assets/css/components/image-input.css";
import { UploadOutlined } from "@ant-design/icons";

function ImageInputComponent(props) {
  const { name, label, placeholder, width, height, ruleType, required } = props;
  return (
    <Form.Item
      label={label ?? "Label"}
      rules={[
        { required: required ?? false },
        { type: ruleType ?? "string", warningOnly: true },
      ]}
    >
      <Upload listType="picture">
        <Button
          style={{
            borderRadius: 10,
            width: width ?? "100%",
            height: height ?? "100%",
            color: "#d9d9d9",
          }}
          icon={<UploadOutlined />}
        >
          {placeholder ?? "placeholder"}
        </Button>
      </Upload>
    </Form.Item>
  );
}
export default ImageInputComponent;
