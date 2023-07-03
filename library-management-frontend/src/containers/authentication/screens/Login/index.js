import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification, Button, Input, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.css';
import Logo from 'components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LOGIN } from 'redux/actions/user';
import { REQUEST_STATE } from 'app-configs';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const onSubmit = (data) => {
        dispatch(LOGIN(data));
    };
    const { handleSubmit } = useForm();

    const [loading, setLoading] = useState(false);
    const onFinish = async (data) => {
        try {
            setLoading(true);
            handleSubmit(onSubmit(data));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (user.authState === REQUEST_STATE.SUCCESS) {
            navigate('/');
        }
        if (user?.authState === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Tài khoản hoặc mật khẩu không chính xác!',
            });
        }
    }, [user?.authState]);
    return (
        <div className="login-page">
            <div class="login-form-container">
                <div id="m1">
                    <Logo />
                    <Form
                        name="normal_login"
                        className="login-form"
                        style={{
                            margin: 'auto',
                            paddingLeft: 100,
                            paddingRight: 100,
                        }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                style={{
                                    width: '33em',
                                    height: '4.0em',
                                    borderRadius: 15,
                                }}
                                placeholder="Tên đăng nhập"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                style={{
                                    width: '33em',
                                    height: '4.0em',
                                    borderRadius: 15,
                                }}
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            style={{
                                background: '#6fa4d8',
                                width: '33em',
                                height: '4.0em',
                                borderRadius: 15,
                            }}
                        >
                            Login
                        </Button>
                    </Form>
                    <p className="forgot-pw">Quên mật khẩu!</p>
                    <p className="signup">
                        Chưa có tài khoản?<span>Đăng ký</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
