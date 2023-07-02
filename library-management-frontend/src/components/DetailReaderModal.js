import { Card, Image, Row, Col, Modal, Table, Form, Input, Tag, Button, Space, notification } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LockOutlined, DeleteOutlined } from '@ant-design/icons';
import { GrAdd } from 'react-icons/gr';
import { format } from 'date-fns';

import '../assets/css/components/detail-reader-modal.css';
import TextInputComponent from './TextInput';
import SelectInputComponent from './SeletectInput';
import NumberInputComponent from './NumberInput';
import DateInputComponent from './DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_READER_CARD } from 'containers/app/screens/Reader/redux/action';
import { GET_READER_DETAIL } from 'containers/app/screens/Reader/redux/action';
import { REQUEST_STATE } from 'app-configs';
import FullPageLoading from './Loading/FullPageLoading/FullPageLoading';
const columns = [
    {
        title: 'Số thẻ',
        dataIndex: 'cardNumber',
        key: 'cardNumber',
        render: (text) => (
            <a
                style={{
                    color: '#333',
                    fontWeight: 'bold',
                }}
            >
                {text}
            </a>
        ),
    },
    {
        title: 'Ngày phát hành',
        dataIndex: 'issuedDate',
        key: 'issuedDate',
    },
    {
        title: 'Ngày hết hạn',
        dataIndex: 'expiredDate',
        key: 'expiredDate',
    },
    {
        title: 'Hình thức đăng ký',
        dataIndex: 'registrationMethod',
        key: 'registrationMethod',
    },
    {
        title: 'Loại',
        dataIndex: 'registrationType',
        key: 'registrationType',
    },
    {
        title: 'Ngày đăng ký',
        dataIndex: 'registrationDate',
        key: 'registrationDate',
    },
    {
        title: 'Thanh toán',
        dataIndex: 'isPay',
        key: 'isPay',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (text) => <Tag color={text == 'Hoạt động' ? 'green' : 'volcano'}>{text}</Tag>,
    },
    {
        title: 'Khoá/Xóa',
        key: 'action',
        render: (_, record) => (
            <Space
                size="small"
                style={{
                    justifyContent: 'center',
                    display: 'flex',
                }}
            >
                <LockOutlined
                    style={{
                        color: '#FBBE18',
                    }}
                />

                <DeleteOutlined
                    style={{
                        color: '#E86201',
                    }}
                    onClick={() => {
                        console.log('Delete');
                    }}
                />
            </Space>
        ),
    },
];
const checkActiveOrExistCard = (readerCards) => {
    if (readerCards == null || readerCards.length == 0) return false;
    else {
        const activeCard = readerCards.some((card) => card.status == 'Active');
        if (activeCard) return true;
        else return false;
    }
};
function ReaderDetailModal(props) {
    const { open, onOk, onCancel, readerId } = props;
    const dispatch = useDispatch();
    const createReaderCard = useSelector((state) => state?.createReaderCard);
    const getReaderDetail = useSelector((state) => state?.getReaderDetail);

    useEffect(() => {
        dispatch(GET_READER_DETAIL(readerId));
    }, [dispatch, readerId]);

    useEffect(() => {
        if (createReaderCard?.state == REQUEST_STATE.SUCCESS) {
            dispatch(GET_READER_DETAIL(readerId));
        }
    }, [createReaderCard?.state, dispatch, readerId]);
    const rowStyle = {
        justifyContent: 'space-between',
        marginTop: 10,
    };
    const labelStyle = {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4F59D4',
        width: 150,
    };
    const valueStyle = {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E25',
        width: 280,
    };

    const formatDate = (dateString) => {
        if (dateString) {
            const formattedDate = format(new Date(dateString), 'dd/MM/yyyy');
            return formattedDate;
        }
    };
    let showAddButton = true;
    if (checkActiveOrExistCard(getReaderDetail.data?.metadata?.readerCards)) {
        showAddButton = false;
    } else {
        showAddButton = true;
    }

    const data = getReaderDetail.data?.metadata?.readerCards?.map((card) => ({
        ...card,
        issuedDate: formatDate(card.issuedDate),
        expiredDate: formatDate(card.expiredDate),
        registrationDate: formatDate(card.registrationDate),
        isPay: card.isPay ? 'Đã thanh toán' : 'Chưa thanh toán',
        registrationType: card.registrationType == 'Create new' ? 'Tạo mới' : 'Đăng ký lại',
        status: card.status == 'Active' ? 'Hoạt động' : 'Khóa',
    }));

    const [childModalVisible, setChildModalVisible] = useState(false);

    const [form] = Form.useForm();
    const initialValues = {
        registrationMethod: 'Online',
        registrationType: 'Create new',
        isPay: true,
    };
    return (
        <div>
            <Modal
                title="Thông tin bạn đọc"
                centered
                open={open}
                onOk={onOk}
                onCancel={onCancel}
                width={1300}
                cancelText={'Xóa'}
                okText={'Sửa'}
            >
                <div
                    className="content"
                    style={{
                        marginTop: 20,
                    }}
                >
                    <Row style={rowStyle}>
                        <Row>
                            <div style={labelStyle}>Họ và tên</div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?.name ?? 'name'}</div>
                        </Row>
                        <Row>
                            <div style={labelStyle}>Năm sinh</div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?.birthYear ?? 'birthYear'}</div>
                        </Row>
                    </Row>

                    <Row style={rowStyle}>
                        <Row>
                            <div style={labelStyle}>Khoa viện</div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?.department ?? ''}</div>
                        </Row>
                        <Row>
                            <div style={labelStyle}>Lớp</div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?._class ?? ''}</div>
                        </Row>
                    </Row>
                    <Row style={rowStyle}>
                        <Row>
                            <div style={labelStyle}>Số điện thoại</div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?.phoneNumber ?? ''}</div>
                        </Row>
                        <Row>
                            <div style={labelStyle}>Giới tính</div>
                            <div style={valueStyle}>
                                {getReaderDetail.data?.metadata?.gender == 'Male'
                                    ? 'Nam'
                                    : getReaderDetail.data?.metadata?.gender == 'Female'
                                    ? 'Nữ'
                                    : 'Khác'}
                            </div>
                        </Row>
                    </Row>
                    <Row style={rowStyle}>
                        <Row>
                            <div style={labelStyle}>Email </div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?.email ?? ''}</div>
                        </Row>
                        <Row>
                            <div style={labelStyle}>Loại</div>
                            <div style={valueStyle}>{getReaderDetail.data?.metadata?.readerType ?? ''}</div>
                        </Row>
                    </Row>
                    <Row style={rowStyle}>
                        <Row>
                            <div style={labelStyle}>Ngày tạo </div>
                            <div style={valueStyle}>
                                {formatDate(getReaderDetail.data?.metadata?.createdAt) ?? 'dd/MM/YYY'}
                            </div>
                        </Row>
                        <Row>
                            <div style={labelStyle}>Trạng thái</div>
                            <div style={valueStyle}>
                                {getReaderDetail.data?.metadata?.isProcess == true ? (
                                    <Tag color="geekblue">Đang hoạt động</Tag>
                                ) : (
                                    <Tag color="volcano">Đóng</Tag>
                                )}
                            </div>
                        </Row>
                    </Row>
                    <Row
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingTop: 20,
                        }}
                    >
                        {showAddButton ? (
                            <Button
                                type="primary"
                                icon={<GrAdd color="#fff" />}
                                size="middle"
                                color="#fff"
                                style={{ color: '#fff', background: '#6FA4D8' }}
                                onClick={() => {
                                    setChildModalVisible(true);
                                }}
                            >
                                Add
                            </Button>
                        ) : null}
                    </Row>
                    <Table columns={columns} dataSource={data} />
                </div>
            </Modal>

            <Modal
                className="Modal"
                title="Thêm thẻ"
                centered
                open={childModalVisible}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            Object.assign(values, {
                                reader: readerId,
                                status: 'Active',
                                registrationCode: 'string',
                                cardBarcodeImage: 'string',
                            });
                            dispatch(CREATE_READER_CARD(values));
                            setChildModalVisible(false);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
                onCancel={() => setChildModalVisible(false)}
                okText="Xác nhận"
                cancelText="Hủy"
                width={1145}
                initialValues={{ remember: true }}
                bodyStyle={{
                    height: 200,
                    padding: '20, 70, 70, 70',
                }}
            >
                {createReaderCard.state == REQUEST_STATE.REQUEST ? <FullPageLoading opacity={0.5} /> : <div></div>}
                <Form layout="vertical" autoComplete="off" form={form} initialValues={initialValues}>
                    <Row
                        style={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <TextInputComponent
                            width={250}
                            height={40}
                            name={'cardNumber'}
                            label={'Mã thẻ'}
                            placeholder="Mã thẻ"
                            required={true}
                        />

                        <DateInputComponent
                            width={250}
                            height={40}
                            name={'issuedDate'}
                            label={'Ngày phát hành'}
                            placeholder="Ngày phát hành"
                            required={true}
                        />
                        <DateInputComponent
                            width={250}
                            height={40}
                            name={'expiredDate'}
                            label={'Ngày hết hạn'}
                            placeholder="Ngày hết hạn"
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
                            name={'registrationMethod'}
                            label={'Hình thức đăng ký'}
                            placeholder="Hình thức đăng ký"
                            ruleType="string"
                            required={true}
                            listSelect={[
                                { label: 'Online', value: 'Online' },
                                { label: 'Offline', value: 'Ofline' },
                            ]}
                        />
                        <SelectInputComponent
                            width={200}
                            height={40}
                            name={'registrationType'}
                            label={'Loại đăng ký'}
                            placeholder="Loại đăng ký"
                            ruleType="string"
                            required={true}
                            listSelect={[
                                { label: 'Đăng ký lại', value: 'Re-registration' },
                                { label: 'Đăng ký mới', value: 'Create new' },
                            ]}
                        />
                        <DateInputComponent
                            width={200}
                            height={40}
                            name={'registrationDate'}
                            label={'Ngày đăng ký'}
                            placeholder="Ngày đăng ký"
                            required={true}
                        />
                        <SelectInputComponent
                            width={200}
                            height={40}
                            name={'isPay'}
                            label={'Thanh toán'}
                            placeholder="Thanh toán"
                            required={true}
                            ruleType="boolean"
                            listSelect={[
                                { label: 'Đã thanh toán', value: true },
                                { label: 'Chưa thanh toán', value: false },
                            ]}
                        />
                    </Row>
                </Form>
            </Modal>
        </div>
    );
}
export default ReaderDetailModal;
