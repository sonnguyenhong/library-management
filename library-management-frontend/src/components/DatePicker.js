import { DatePicker, Form } from 'antd';
import '../assets/css/components/select-input.css';

function DateInputComponent(props) {
    const { name, label, width, height, defaultValue } = props;

    return (
        <Form.Item name={name ?? name} label={label ?? 'Label'}>
            <DatePicker
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
export default DateInputComponent;
