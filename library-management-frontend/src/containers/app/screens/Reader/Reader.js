import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import './reader.css';
import { Layout, Form, Input, Row, Col, Button, Modal, notification, Table, Tag } from 'antd';
import { BiSearch } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import TextInputComponent from '../../../../components/TextInput';
import SelectInputComponent from '../../../../components//SeletectInput';
import { CREATE_READER, GET_LIST_READER } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import FullPageLoading from 'components/Loading/FullPageLoading/FullPageLoading';
import { REQUEST_STATE } from 'app-configs';
import NumberInputComponent from 'components/NumberInput';
import ReaderDetailModal from 'components/DetailReaderModal';

const { Header, Content } = Layout;

function Reader() {
    const [createModal, setCreateModalOpen] = useState(false);
    const [detailModal, setDetailModalOpen] = useState(false);

    const [rowId, setRowId] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const reader = useSelector((state) => state?.reader);
    const createReader = useSelector((state) => state?.createReader);

    useEffect(() => {
        dispatch(GET_LIST_READER());
        if (reader?.state === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Lỗi',
                description: 'Đã có lỗi xảy ra!',
            });
        }
    }, [dispatch]);

    useEffect(() => {
        if (createReader?.state === REQUEST_STATE.SUCCESS) {
            setCreateModalOpen(false);
            dispatch(GET_LIST_READER());
        }
        // if (createReader?.state === REQUEST_STATE.ERROR || getReaderDetail?.state === REQUEST_STATE.ERROR) {
        //     console.log(getReaderDetail.error.message);
        //     if (getReaderDetail.error.message == 'invalid signature' || createReader.error.message) {
        //         navigate('/login');
        //         notification.error({
        //             message: 'Thất bại',
        //             description: 'Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại!',
        //         });
        //     } else {
        //         notification.error({
        //             message: 'Thất bại',
        //             description: 'Đã có lỗi xảy ra!',
        //         });
        //     }
        // }
    }, [createReader?.state]);

    const initialValues = {
        department: 'Công nghệ thông tin',
        gender: 'Male',
        readerType: 'Student',
    };
    const returnData = reader?.data?.metadata ?? [];
    const data = returnData.map((value) => ({
        id: value._id,
        name: value.name,
        birthYear: value.birthYear,
        gender: value.gender,
        readerType: [value.readerType],
        phoneNumber: value.phoneNumber,
        email: value.email,
    }));

    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'birthYear',
            key: 'birthYear',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
            render: (_, { gender }) => {
                if (gender) {
                    let color = 'green';
                    if (gender === 'Male') {
                        color = 'geekblue';
                    } else if (gender === 'Female') {
                        color = 'volcano';
                    }
                    return (
                        <>
                            <Tag color={color}>{gender}</Tag>
                        </>
                    );
                } else {
                    return null;
                }
            },
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Loại',
            key: 'readerType',
            dataIndex: 'readerType',
            render: (_, { readerType }) => {
                if (readerType) {
                    let color = 'green';
                    if (readerType == 'Lecturer') {
                        color = 'geekblue';
                    } else if (readerType == 'Student') {
                        color = 'green';
                    }
                    return (
                        <>
                            <Tag color={color}>{readerType}</Tag>
                        </>
                    );
                } else {
                    return null;
                }
            },
        },
    ];
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const handleRowSelection = (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    const handleRowClick = (row) => {
        // Access the value of the clicked row
        setRowId(row.id);
        setDetailModalOpen(true);
        console.log(row.id);
    };

    const rowClickProps = (row) => {
        return {
            onClick: () => handleRowClick(row),
        };
    };

    return (
        <div className="borrow-return">
            <Layout style={{ height: '150vh' }}>
                <Layout style={{ background: '#fff' }}>
                    <Header style={{ background: '#fff', marginBottom: 18 }}>
                        <Form style={{ top: 21, position: 'relative', maxWidth: '60%' }}>
                            <Form.Item name="Search">
                                <Input prefix={<BiSearch />} placeholder="Search" style={{ height: 40 }} />
                            </Form.Item>
                        </Form>
                    </Header>
                    <Content style={{ background: '#F4F7FC', borderRadius: 10 }}>
                        <h2 className="content-title">Danh sách mượn trả</h2>
                        <div className="content-body">
                            <Row
                                style={{
                                    justifyContent: 'flex-end',
                                    paddingRight: 40,
                                    paddingTop: 35,
                                }}
                            >
                                <Button
                                    type="primary"
                                    icon={<GrAdd color="#fff" />}
                                    size="middle"
                                    color="#fff"
                                    style={{ color: '#fff', background: '#6FA4D8' }}
                                    onClick={() => setCreateModalOpen(true)}
                                >
                                    Add
                                </Button>
                            </Row>
                            <Col
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                }}
                            >
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    onRow={(record) => ({
                                        ...rowClickProps(record),
                                    })}
                                />
                                ;
                            </Col>
                        </div>
                        <Modal
                            className="Modal"
                            title="Thêm bạn đọc"
                            centered
                            open={createModal}
                            onOk={() => {
                                form.validateFields()
                                    .then((values) => {
                                        Object.assign(values, {
                                            cardImage: 'string',
                                            isProcess: true,
                                        });
                                        dispatch(CREATE_READER(values));
                                    })
                                    .catch((info) => {
                                        console.log('Validate Failed:', info);
                                    });
                            }}
                            onCancel={() => setCreateModalOpen(false)}
                            okText="Xác nhận"
                            cancelText="Hủy"
                            width={1145}
                            initialValues={{ remember: true }}
                            bodyStyle={{
                                height: 200,
                                padding: '20, 70, 70, 70',
                            }}
                        >
                            {reader.state == REQUEST_STATE.REQUEST ? <FullPageLoading opacity={0.5} /> : <div></div>}
                            <Form layout="vertical" autoComplete="off" form={form} initialValues={initialValues}>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <TextInputComponent
                                        width={200}
                                        height={40}
                                        name={'name'}
                                        label={'Họ và tên'}
                                        placeholder="Họ và tên"
                                        required={true}
                                    />
                                    <SelectInputComponent
                                        width={200}
                                        height={40}
                                        name={'department'}
                                        label={'Khoa/Viện'}
                                        placeholder="Khoa/Viện"
                                        ruleType="string"
                                        required={true}
                                        listSelect={[
                                            { label: 'Công nghệ thông tin', value: 'Công nghệ thông tin' },
                                            { label: 'Cơ khí', value: 'Cơ khí' },
                                            { label: 'Hóa học', value: 'Hóa học' },
                                            { label: 'Sinh học và Thực phẩm', value: 'Sinh học và Thực phẩm' },
                                            { label: 'Điện - Điện tử', value: 'Điện - Điện tử' },
                                            { label: 'Kinh tế', value: 'Kinh tế' },
                                            { label: 'Toán ứng dụng và Tin học', value: 'Toán ứng dụng và Tin học' },
                                        ]}
                                    />
                                    <TextInputComponent
                                        width={200}
                                        height={40}
                                        name={'_class'}
                                        label={'Lớp'}
                                        placeholder="Lớp"
                                        required={true}
                                    />
                                    <SelectInputComponent
                                        width={200}
                                        height={40}
                                        name={'readerType'}
                                        label={'Loại bạn đọc'}
                                        placeholder="Loại bạn đọc"
                                        ruleType="string"
                                        required={true}
                                        listSelect={[
                                            { label: 'Sinh viên', value: 'Student' },
                                            { label: 'Giảng viên', value: 'Lecturer' },
                                        ]}
                                    />
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <NumberInputComponent
                                        width={200}
                                        height={40}
                                        name={'birthYear'}
                                        label={'Năm sinh'}
                                        placeholder="Năm sinh"
                                        required={true}
                                    />
                                    <SelectInputComponent
                                        width={200}
                                        height={40}
                                        name={'gender'}
                                        label={'Giới tính'}
                                        placeholder="Giới tính"
                                        ruleType="string"
                                        required={true}
                                        listSelect={[
                                            { label: 'Nam', value: 'Male' },
                                            { label: 'Nữ', value: 'Female' },
                                            { label: 'Khác', value: 'Other' },
                                        ]}
                                    />
                                    <TextInputComponent
                                        width={200}
                                        height={40}
                                        name={'email'}
                                        label={'Email'}
                                        placeholder="Email"
                                        required={true}
                                    />
                                    <TextInputComponent
                                        width={200}
                                        height={40}
                                        name={'phoneNumber'}
                                        label={'Số điện thoại'}
                                        placeholder="Số điện thoại"
                                        required={true}
                                    />
                                </Row>
                            </Form>
                        </Modal>
                    </Content>
                    <ReaderDetailModal
                        open={detailModal}
                        readerId={rowId}
                        onCancel={() => {
                            setDetailModalOpen(false);
                        }}
                    />
                </Layout>
            </Layout>
        </div>
    );
}

export default Reader;
