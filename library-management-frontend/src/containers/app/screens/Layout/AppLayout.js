import React, { useState } from 'react';
import './Layout.sass';

import { Layout, Row, Menu, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { IoLibrary } from 'react-icons/io5';
import { BsBarChartFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import LogoHeader from '../../../../components/LogoHeader';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Home from '../Home/Home';
import ManageBook from '../ManageBook/ManageBook';

const { Header, Footer, Sider } = Layout;
function AppLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#fff' }}>
                <div className="demo-logo-vertical" />
                <Row>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 30,
                            height: 30,
                            margin: '12px 12px 12px 20px',
                        }}
                    />
                    {collapsed ? <div></div> : <LogoHeader />}
                </Row>

                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    onClick={({ key }) => {
                        navigate(key);
                    }}
                    items={[
                        {
                            key: '/',
                            icon: <AiTwotoneHome />,
                            label: 'Trang chủ',
                        },
                        {
                            key: '/dashboard',
                            icon: <BsBarChartFill />,
                            label: 'Dashboard',
                        },
                        {
                            key: '/manage-book',
                            icon: <IoLibrary />,
                            label: 'Quản lý tài liệu',
                        },
                        {
                            key: '/borrow-document',
                            icon: <FaUserFriends />,
                            label: 'Mượn tài liệu',
                        },
                        {
                            key: '/return-book',
                            icon: <IoLibrary />,
                            label: 'Trả tài liệu',
                        },
                    ]}
                />
            </Sider>

            <Layout style={{ background: '#fff' }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/dashboard" element={<div>dashboard</div>} />
                    <Route exact path="/manage-book" element={<ManageBook />} />
                    <Route exact path="/borrow-document" element={<div>borrow-document</div>} />
                    <Route exact path="/manage-book" element={<div>manage-book</div>} />
                </Routes>
            </Layout>
        </Layout>
    );
}
function Content() {
    return <div></div>;
}

export default AppLayout;