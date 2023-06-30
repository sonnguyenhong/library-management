import React, { useState } from 'react';
import './Home.sass';
import { Layout, Form, Input, Row } from 'antd';
import { FaUserFriends } from 'react-icons/fa';
import { BiSearch, BiBookReader } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';

import { HiOutlineBookOpen } from 'react-icons/hi';
import CardComponent from '../../../../components/Card';

const { Header, Content } = Layout;
function Home() {
    return (
        <Layout style={{ height: '100vh' }}>
            <Layout style={{ background: '#fff' }}>
                <Content style={{ background: '#F4F7FC', borderRadius: 10 }}>
                    <h2 className="content-title">This is month star</h2>
                    <Row
                        style={{
                            justifyContent: 'space-between',
                            paddingLeft: 40,
                            paddingRight: 40,
                        }}
                    >
                        <CardComponent
                            icon={<HiOutlineBookOpen />}
                            title="TOTAL BOOKS"
                            content="50.000"
                            iconBackground="#FBBE18"
                            cardWidth="25%"
                            cardHeight="120"
                        />
                        <CardComponent
                            icon={<BiBookReader />}
                            title="BOOK ISSUED"
                            content="50.000"
                            iconBackground="#00C81F"
                            cardWidth="25%"
                            cardHeight="120"
                        />
                        <CardComponent
                            icon={<FaUserFriends />}
                            title="TOTAL MEMBER"
                            content="50.000"
                            iconBackground="#6FA4D8"
                            cardWidth="25%"
                            cardHeight="120"
                        />
                    </Row>
                    <h2 className="content-title">Quick options</h2>
                    <Row
                        style={{
                            justifyContent: 'space-between',
                            paddingLeft: 40,
                            paddingRight: 40,
                        }}
                    >
                        <CardComponent
                            icon={<MdArrowDropDown />}
                            title="50.000"
                            content="Books"
                            iconColor="#FBBE18"
                            cardWidth="20%"
                        />
                        <CardComponent
                            icon={<MdArrowDropDown />}
                            title="50.000"
                            content="Issued books"
                            iconColor="#FBBE18"
                            cardWidth="20%"
                        />

                        <CardComponent
                            icon={<MdArrowDropDown />}
                            title="50.000"
                            content="Categories"
                            iconColor="#FBBE18"
                            cardWidth="20%"
                        />
                        <CardComponent
                            icon={<MdArrowDropDown />}
                            title="50.000"
                            content="Authors"
                            iconColor="#FBBE18"
                            cardWidth="20%"
                        />
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Home;
