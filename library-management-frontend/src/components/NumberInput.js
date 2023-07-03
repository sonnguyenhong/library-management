import { Form, Input, InputNumber } from 'antd';
import '../assets/css/components/text-input.css';

function NumberInputComponent(props) {
    const { name, label, placeholder, width, height, ruleType, required, min, max } = props;
    return (
        <Form.Item
            name={name ?? name}
            label={label ?? 'Label'}
            rules={[
                { required: required ?? false },
                { type: ruleType ?? 'number', warningOnly: true, min: { min } ?? 0, max: { max } ?? 100000000 },
            ]}
        >
            <InputNumber
                placeholder={placeholder ?? 'placeholder'}
                style={{
                    borderRadius: 10,
                    width: width ?? '100%',
                    height: height ?? '100%',
                }}
            />
        </Form.Item>
    );
}
export default NumberInputComponent;
