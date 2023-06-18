import React, { useState } from "react";
import "../assets/css/manage-book.css";
import { Layout, Form, Input, Row, Col, Button } from "antd";

import { IoLibrary } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUserFriends, FaBrain, FaGraduationCap } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { BiSearch, BiAtom, BiBook } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import CardComponent from "../components/Card";
import BookCardComponent from "../components/BookCard";

const { Header, Content, Footer, Sider } = Layout;
const iconStyle = { marginRight: "22px", marginLeft: 10 };
const cardStyle = { marginTop: 16, width: "25%", height: 120, fontSize: 20 };
function ManageBook() {
  const listBookCard = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 2",
    "Item 3",
    "Item 3",
  ];
  const gridConfig = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8,
    xxl: 8,
  };
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
          <h2 className="content-title">All Books</h2>
          <div className="content-body">
            <Row
              style={{
                justifyContent: "space-between",
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              <CardComponent
                icon={<BiAtom />}
                title="Technology"
                content="50.000"
                iconBackground="#1DB992"
                cardWidth="18%"
                cardHeight="100px"
              />
              <CardComponent
                icon={<MdOutlineAttachMoney />}
                title="Economic"
                content="50.000"
                iconBackground="#FBBE18"
                cardWidth="18%"
                cardHeight="100px"
              />
              <CardComponent
                icon={<FaBrain />}
                title="Philosophy"
                content="50.000"
                iconBackground="#A39733"
                cardWidth="18%"
                cardHeight="100px"
              />
              <CardComponent
                icon={<FaGraduationCap />}
                title="Curriculum"
                content="50.000"
                iconBackground="#AD5AFF"
                cardWidth="18%"
                cardHeight="100px"
              />
              <CardComponent
                icon={<BiBook />}
                title="Novel"
                content="50.000"
                iconBackground="#E86201"
                cardWidth="18%"
                cardHeight="100px"
              />
            </Row>
            <Row
              style={{
                justifyContent: "flex-end",
                paddingRight: 40,
                paddingTop: 35,
              }}
            >
              <Button
                type="primary"
                icon={<GrAdd color="#fff"/>}
                size="middle"
                color="#fff"
                style={{ color: "#fff", background: "#6FA4D8" }}
              >
                Add
              </Button>
            </Row>

            <Row
              gutter={[16, 24]}
              style={{
                justifyContent: "space-between",
                paddingLeft: 40,
                marginLeft: "unset",
                marginRight: "unset",
                paddingTop: 30,
              }}
            >
              {listBookCard.map((item, index) => (
                <Col
                  span={5}
                  key={index}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <BookCardComponent />
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ManageBook;
