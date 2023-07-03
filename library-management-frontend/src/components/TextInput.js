import { Form, Input } from 'antd';
import '../assets/css/components/text-input.css';

function TextInputComponent(props) {
    const { name, label, placeholder, width, height, ruleType, required, defaultValue } = props;
    return (
        <Form.Item
            name={name ?? name}
            label={label ?? 'Label'}
            rules={[{ required: required ?? false }, { type: ruleType ?? 'string', warningOnly: true }]}
        >
            <Input
                placeholder={placeholder ?? 'placeholder'}
                defaultValue={defaultValue ?? null}
                style={{
                    borderRadius: 10,
                    width: width ?? '100%',
                    height: height ?? '100%',
                }}
            />
        </Form.Item>
    );
}
export default TextInputComponent;
