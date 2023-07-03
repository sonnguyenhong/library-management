import { Form, Select } from "antd";
import "../assets/css/components/select-input.css";

function SelectInputComponent(props) {
  const { name, label, width, height, ruleType, required, listSelect, onChange, selectedValue } = props;

  return (
    <Form.Item
      name={name ?? name}
      label={label ?? "Label"}
      rules={[
        { required: required ?? false },
        { type: ruleType ?? "string", warningOnly: true },
      ]}
    >
      <Select
        style={{
          borderRadius: 10,
          width: width ?? "100%",
          height: height ?? "100%",
        }}
        defaultValue={listSelect[0].value}
        value={selectedValue ?? listSelect[0].value }
        onChange={onChange}
        options={listSelect}
      ></Select>
    </Form.Item>
  );
}
export default SelectInputComponent;
