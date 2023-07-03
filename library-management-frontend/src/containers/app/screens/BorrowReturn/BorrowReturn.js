import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './borrow-return.css';
import { Layout, Form, Input, Row, Col, Button, Modal, notification, Space, Table, Tag } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import { BiSearch } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import TextInputComponent from '../../../../components/TextInput';
import SelectInputComponent from '../../../../components//SeletectInput';
import { CREATE_BR, DELETE_BR, GET_LIST_BR, UPDATE_BR } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import DateInputComponent from 'components/DatePicker';
import FullPageLoading from 'components/Loading/FullPageLoading/FullPageLoading';
import { REQUEST_STATE } from 'app-configs';
import { CLIENT_ID_KEY } from 'app-configs';
import moment from 'moment';
const { Header, Content } = Layout;

function formatDateWithMinus(dateString) {
    return moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD');
}
function BorrowReturn() {
    const [createModal, setCreateModalOpen] = useState(false);
    const [returnModal, setReturnModalOpen] = useState(false);
    const [detailModal, setDetailModalOpen] = useState(false);
    const [rowValue, setRowValue] = useState();

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
    const updateBorrowReturn = useSelector((state) => state?.updateBorrowReturn);

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
            borrowReturnCreate?.state === REQUEST_STATE.SUCCESS ||
            updateBorrowReturn?.state === REQUEST_STATE.SUCCESS
        ) {
            notification.success({
                message: 'Thành công',
                description: 'Thành công!',
            });
            setCreateModalOpen(false);
            setDetailModalOpen(false);
            setReturnModalOpen(false);
            dispatch(GET_LIST_BR());
        }
        if (deleteBorrowReturn?.state === REQUEST_STATE.ERROR || borrowReturnCreate?.state === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Đã có lỗi xảy ra!',
            });
        }
    }, [deleteBorrowReturn?.state, borrowReturnCreate?.state, updateBorrowReturn?.state]);
    useEffect(() => {}, [rowValue]);

    const initialValues = {
        type: 'Borrow',
    };
    const returnData = borrowReturn?.data?.metadata ?? [];
    const data = returnData.map((value) => ({
        id: value._id,
        document: value.document?._id ?? '',
        cardNumber: value?.cardNumber.cardNumber,
        documentName: value.document?.name ?? '',
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
            title: 'Trả',
            key: 'action',
            render: (text, record, index) => (
                <Button
                    type="text"
                    icon={
                        <RetweetOutlined
                            style={{
                                color: '#fbbe18',
                            }}
                        />
                    }
                    onClick={() => {
                        setRowValue(record);
                        setReturnModalOpen(true);
                    }}
                />
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
                            title="Phiếu mượn"
                            centered
                            open={createModal}
                            onOk={() => {
                                form.validateFields()
                                    .then((values) => {
                                        Object.assign(values, {
                                            type: 'Borrow',
                                            provider: localStorage.getItem(CLIENT_ID_KEY),
                                        });
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
                                        justifyContent: 'space-evenly',
                                    }}
                                >
                                    <DateInputComponent
                                        width={300}
                                        height={40}
                                        name={'borrowDate'}
                                        label={'Ngày mượn'}
                                        placeholder="Ngày mượn"
                                    />
                                    <DateInputComponent
                                        width={300}
                                        height={40}
                                        name={'expiredDate'}
                                        label={'Ngày hết hạn'}
                                        placeholder="Ngày hết hạn"
                                    />
                                </Row>
                            </Form>
                        </Modal>

                        <Modal
                            className="Modal"
                            centered
                            open={returnModal}
                            onOk={() => {
                                form.validateFields()
                                    .then((values) => {
                                        const updateData = {
                                            cardNumber: rowValue.cardNumber.cardNumber,
                                            document: rowValue.document,
                                            borrowType: rowValue.borrowType,
                                            provider: rowValue.provider,
                                            borrowDate: formatDateWithMinus(rowValue.borrowDate),
                                            expiredDate: formatDateWithMinus(rowValue.expiredDate),
                                            type: 'Return',
                                            returnDate: values.returnDate,
                                            receiver: localStorage.getItem(CLIENT_ID_KEY),
                                        };
                                        

                                        dispatch(
                                            UPDATE_BR({
                                                id: rowValue.id,
                                                body: updateData,
                                            }),
                                        );
                                    })
                                    .catch((info) => {
                                        console.log('Validate Failed:', info);
                                    });
                            }}
                            onCancel={() => setReturnModalOpen(false)}
                            okText="Xác nhận"
                            cancelText="Hủy"
                            width={400}
                            initialValues={{ remember: true }}
                            bodyStyle={{
                                height: 80,
                                padding: '20, 70, 70, 70',
                                justifyContent: 'center',
                                display: 'flex',
                            }}
                        >
                            {borrowReturn.state == REQUEST_STATE.REQUEST ? (
                                <FullPageLoading opacity={0.5} />
                            ) : (
                                <div></div>
                            )}
                            <Form layout="vertical" autoComplete="off" form={form} initialValues={initialValues}>
                                <DateInputComponent
                                    width={200}
                                    height={40}
                                    name={'returnDate'}
                                    label={'Ngày trả'}
                                    placeholder="Ngày trả"
                                />
                            </Form>
                        </Modal>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default BorrowReturn;
