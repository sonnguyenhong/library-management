import React, { useState } from 'react';
import './Home.sass';

import { Layout, Form, Input, Row } from 'antd';

import { IoLibrary } from 'react-icons/io5';
import { BsBarChartFill } from 'react-icons/bs';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { BiSearch, BiBookReader } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';

import { HiOutlineBookOpen } from 'react-icons/hi';
import CardComponent from '../../../../components/Card';

const { Header, Content, Footer, Sider } = Layout;
const iconStyle = { marginRight: '22px', marginLeft: 10 };
function Home() {
    return (
        <Layout style={{ height: "100vh" }}>
          <Sider
            style={{
              background: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TiThMenu
              style={{
                fontSize: 22,
                position: "relative",
                top: 30,
                left: 30,
                marginBottom: 57,
              }}
            />
            <div className="slider-content">
              <div className="slider-item">
                <div>
                  <AiTwotoneHome style={iconStyle} />
                  Home
                </div>
              </div>
              <div className="slider-item">
                <div>
                  <BsBarChartFill style={iconStyle} />
                  Dashboard
                </div>
              </div>
              <div className="slider-item">
                <div>
                  <IoLibrary style={iconStyle} />
                  Manager Book
                </div>
              </div>
              <div className="slider-item">
                <div>
                  <FaUserFriends style={iconStyle} />
                  Member
                </div>
              </div>
            </div>
          </Sider>
          <Layout style={{ background: "#fff" }}>
            <Header style={{ background: "#fff", marginBottom: 18 }}>
              <Form style={{ top: 21, position: "relative", maxWidth: "60%" }}>
                <Form.Item name="Search">
                  <Input
                    prefix={<BiSearch />}
                    placeholder="Search"
                    style={{ height: 40 }}
                  />
                </Form.Item>
              </Form>
            </Header>
            <Content style={{ background: "#F4F7FC", borderRadius: 10 }}>
              <h2 className="content-title">This is month star</h2>
              <Row
                style={{
                  justifyContent: "space-between",
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
                  justifyContent: "space-between",
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
