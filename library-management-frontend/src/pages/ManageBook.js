import React, { useState } from "react";
import "../assets/css/manage-book.css";

import { Layout, Form, Input, Row, Col, Button, Modal, Select } from "antd";

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
import TextInputComponent from "../components/TextInput";
import SelectInputComponent from "../components/SeletectInput";
import ImageInputComponent from "../components/ImageInput";

const { Header, Content, Sider } = Layout;

const iconStyle = { marginRight: "22px", marginLeft: 10 };
function ManageBook() {
  const [open, setOpen] = useState(false);
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
  ];

  const formRef = React.useRef(null);
  return (
    <div className="manage-book">
      <Layout style={{ height: "150vh" }}>
        <Sider
          style={{
            background: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
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
                  icon={<GrAdd color="#fff" />}
                  size="middle"
                  color="#fff"
                  style={{ color: "#fff", background: "#6FA4D8" }}
                  onClick={() => setOpen(true)}
                >
                  Add
                </Button>
              </Row>
              <Row
                gutter={[15, 24]}
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
                    span={7}
                    key={index}
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <BookCardComponent />
                  </Col>
                ))}
              </Row>
            </div>
            <Modal
              className="Modal"
              title="Add Member"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              okText="Confirm"
              width={1145}
              bodyStyle={{
                height: 350,
                padding: 70,
              }}
            >
              <Form layout="vertical" autoComplete="off">
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    width={300}
                    height={40}
                    name={"Book code"}
                    label={"Book code"}
                    placeholder="Book code"
                    required={true}
                  />
                  <TextInputComponent
                    width={300}
                    height={40}
                    name={"Name"}
                    label={"Name"}
                    placeholder="Name"
                    required={true}
                  />
                  <SelectInputComponent
                    width={300}
                    height={40}
                    name={"Category"}
                    label={"Category"}
                    placeholder="Category"
                    ruleType="string"
                    required={true}
                    listSelect={[
                      { label: "Technology", value: "Technology" },
                      { label: "Economics", value: "Economics" },
                      { label: "Philosophy", value: "Philosophy" },
                      { label: "Curriculum", value: "Curriculum" },
                      { label: "Novel", value: "Novel" },
                    ]}
                  />
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    width={300}
                    height={40}
                    name={"Author"}
                    label={"Author"}
                    placeholder="Author"
                    required={true}
                  />

                  <TextInputComponent
                    width={300}
                    height={40}
                    name={"Publisher"}
                    label={"Publisher"}
                    placeholder="Publisher"
                    required={true}
                  />
                  <TextInputComponent
                    width={300}
                    height={40}
                    name={"Department"}
                    label={"Department"}
                    placeholder="Department"
                    ruleType="string"
                  />
                </Row>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <SelectInputComponent
                    width={150}
                    height={40}
                    name={"Language"}
                    label={"Language"}
                    placeholder={"Language"}
                    ruleType="string"
                    required={true}
                    listSelect={[
                      { label: "English", value: "English" },
                      { label: "Vietnamese", value: "Vietnamese" },
                      { label: "Chinese", value: "Chinese" },
                    ]}
                  />
                  <TextInputComponent
                    width={150}
                    height={40}
                    name={"Year of publication"}
                    label={"Year of publication"}
                    placeholder="2023"
                    ruleType="string"
                  />
                  <TextInputComponent
                    width={150}
                    height={40}
                    name={"Page"}
                    label={"Page"}
                    placeholder="Page"
                    ruleType="string"
                  />
                  <TextInputComponent
                    width={150}
                    height={40}
                    name={"Location"}
                    label={"Location"}
                    placeholder="Location"
                    ruleType="string"
                  />
                  <ImageInputComponent
                    width={150}
                    height={40}
                    name={"Image"}
                    label={"Image"}
                    placeholder="Upload"
                    ruleType="string"
                  />
                </Row>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default ManageBook;
