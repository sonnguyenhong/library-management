import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './borrow-return.css';
import { Layout, Form, Input, Row, Col, Button, Modal, notification, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { BiSearch } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import TextInputComponent from '../../../../components/TextInput';
import SelectInputComponent from '../../../../components//SeletectInput';
import { CREATE_BR, DELETE_BR, GET_LIST_BR } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import DateInputComponent from 'components/DatePicker';
import FullPageLoading from 'components/Loading/FullPageLoading/FullPageLoading';
import { REQUEST_STATE } from 'app-configs';
import { CLIENT_ID_KEY } from 'app-configs';

const { Header, Content } = Layout;

function BorrowReturn() {
    const [createModal, setCreateModalOpen] = useState(false);
    const [detailModal, setDetailModalOpen] = useState(false);

    const [borrowSelect, setBorrowSelect] = useState('Borrow');

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const formatDate = (dateString) => {
        const formattedDate = format(new Date(dateString), 'dd/MM/yyyy');
        return formattedDate;
    };

    const borrowReturn = useSelector((state) => state?.borrowReturn);
    const borrowReturnCreate = useSelector((state) => state?.createBorrowReturn);
    const deleteBorrowReturn = useSelector((state) => state?.deleteBorrowReturn);

    useEffect(() => {
        dispatch(GET_LIST_BR());

        if (borrowReturn?.state === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Lỗi',
                description: 'Đã có lỗi xảy ra!',
            });
        }
    }, [dispatch]);

    useEffect(() => {
        if (
            deleteBorrowReturn?.state === REQUEST_STATE.SUCCESS ||
            borrowReturnCreate?.state === REQUEST_STATE.SUCCESS
        ) {
            notification.success({
                message: 'Thành công',
                description: 'Thành công!',
            });
            setCreateModalOpen(false);
            setDetailModalOpen(false);
            dispatch(GET_LIST_BR());
        }
        if (deleteBorrowReturn?.state === REQUEST_STATE.ERROR || borrowReturnCreate?.state === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Đã có lỗi xảy ra!',
            });
        }
    }, [deleteBorrowReturn?.state, borrowReturnCreate.state]);

    const initialValues = {
        type: 'Borrow',
    };
    const returnData = borrowReturn?.data?.metadata ?? [];
    const data = returnData.map((value) => ({
        id: value._id,
        cardNumber: value.cardNumber,
        documentName: value.document.name,
        borrowType: value.borrowType,
        borrowDate: formatDate(value.borrowDate),
        expiredDate: formatDate(value.expiredDate),
        types: [value.type], // It seems you want `type` to be an array containing `value.types`
    }));

    const columns = [
        {
            title: 'Số thẻ',
            dataIndex: 'cardNumber',
            key: 'cardNumber',
            render: (text) => <a style={{ color: '#333', fontWeight: 'bold' }}>{text}</a>,
        },
        {
            title: 'Tên tài liệu',
            dataIndex: 'documentName',
            key: 'documentName',
        },
        {
            title: 'Kiểu muợn',
            dataIndex: 'borrowType',
            key: 'borrowType',
        },
        {
            title: 'Ngày mượn',
            dataIndex: 'borrowDate',
            key: 'borrowDate',
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'expiredDate',
            key: 'expiredDate',
        },
        {
            title: 'Loại',
            key: 'types',
            dataIndex: 'types',
            render: (_, { types }) => {
                if (types && Array.isArray(types) && types.length > 0) {
                    return (
                        <>
                            {types.map((type) => {
                                let color = 'green';
                                if (type == 'expired') {
                                    color = 'volcano';
                                } else if (type == 'Borrow') {
                                    color = 'geekblue';
                                } else {
                                    color = 'green';
                                }
                                return (
                                    <Tag color={color} key={type}>
                                        {type == 'Borrow' ? 'Mượn' : 'Trả'}
                                    </Tag>
                                );
                            })}
                        </>
                    );
                } else {
                    return null; // or any other fallback value if types is null or empty
                }
            },
        },
        {
            title: 'Sửa/Xóa',
            key: 'action',
            render: (_, record) => (
                <Space
                    size="middle"
                    style={{
                        display: 'flex',
                    }}
                >
                    <EditOutlined
                        style={{
                            color: '#6fa4d8',
                            fontSize: 18,
                        }}
                    />
                    <Button
                        type="text"
                        icon={
                            <DeleteOutlined
                                style={{
                                    color: 'red',
                                    fontSize: 18,
                                }}
                            />
                        }
                        // onClick={() => dispatch(DELETE_BR(record.id))}
                    />
                </Space>
            ),
        },
    ];

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
                                <Table columns={columns} dataSource={data} />;
                            </Col>
                        </div>
                        <Modal
                            className="Modal"
                            title="Thêm mượn trả"
                            centered
                            open={createModal}
                            onOk={() => {
                                form.validateFields()
                                    .then((values) => {
                                        if (values.type == 'Borrow') {
                                            Object.assign(values, {
                                                provider: localStorage.getItem(CLIENT_ID_KEY),
                                            });
                                        } else {
                                            Object.assign(values, {
                                                receiver: localStorage.getItem(CLIENT_ID_KEY),
                                            });
                                        }
                                        dispatch(CREATE_BR(values));
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
                            {borrowReturn.state == REQUEST_STATE.REQUEST ? (
                                <FullPageLoading opacity={0.5} />
                            ) : (
                                <div></div>
                            )}
                            <Form layout="vertical" autoComplete="off" form={form} initialValues={initialValues}>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'cardNumber'}
                                        label={'Mã thẻ'}
                                        placeholder="mã thẻ"
                                        required={true}
                                    />
                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'document'}
                                        label={'Tài liệu'}
                                        placeholder="Tài liệu"
                                        required={true}
                                    />
                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'borrowType'}
                                        label={'Kiểu mượn'}
                                        placeholder="Kiểu mượn"
                                        required={true}
                                    />
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <SelectInputComponent
                                        width={200}
                                        height={40}
                                        name={'type'}
                                        label={'Loại'}
                                        placeholder="Loại"
                                        ruleType="string"
                                        required={true}
                                        selectedValue={borrowSelect}
                                        onChange={(value) => {
                                            setBorrowSelect(value);
                                        }}
                                        listSelect={[
                                            { label: 'Mượn', value: 'Borrow' },
                                            { label: 'Trả', value: 'Return' },
                                        ]}
                                    />
                                    <DateInputComponent
                                        width={200}
                                        height={40}
                                        name={'borrowDate'}
                                        label={'Ngày mượn'}
                                        placeholder="Ngày mượn"
                                    />
                                    <DateInputComponent
                                        width={200}
                                        height={40}
                                        name={'expiredDate'}
                                        label={'Ngày hết hạn'}
                                        placeholder="Ngày hết hạn"
                                    />
                                    {borrowSelect == 'Borrow' ? null : (
                                        <DateInputComponent
                                            width={200}
                                            height={40}
                                            name={'returnDate'}
                                            label={'Ngày trả'}
                                            placeholder="Ngày trả"
                                        />
                                    )}
                                </Row>
                            </Form>
                        </Modal>
                        {/* <BookDetailModal
                            open={detailModal}
                            onCancel={() => {
                                dispatch(DELETE_BOOK(selectedBook._id));
                            }}
                            code={selectedBook?.code}
                            name={selectedBook?.name}
                            category={selectedBook?.category}
                            department={selectedBook?.department}
                            author={selectedBook?.author}
                            publisher={selectedBook?.publisher}
                            publisherYear={selectedBook?.publisherYear}
                            language={selectedBook?.language}
                            summaryContent={selectedBook?.summaryContent}
                            numberOfPages={selectedBook?.numberOfPages}
                            pageSize={selectedBook?.pageSize}
                            republishedTime={selectedBook?.republishedTime}
                            coverPrice={selectedBook?.coverPrice}
                            issuedNumber={selectedBook?.issuedNumber}
                            issuedDate={selectedBook?.issuedDate}
                            quantity={selectedBook?.quantity}
                            position={selectedBook?.position}
                        /> */}
                    </Content>

                    {/* {books.state == REQUEST_STATE.REQUEST ? <FullPageLoading opacity={0.5} /> : <div></div>} */}
                </Layout>
            </Layout>
        </div>
    );
}

export default BorrowReturn;
