import React, { useState, useEffect } from 'react';
import './manage-book.css';
import { Layout, Form, Input, Row, Col, Button, Modal, notification, Space } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { FaBrain, FaGraduationCap } from 'react-icons/fa';
import { BiSearch, BiAtom, BiBook } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import { MdOutlineAttachMoney } from 'react-icons/md';
import CardComponent from '../../../../components/Card';
import BookCardComponent from '../../../../components/BookCard';
import TextInputComponent from '../../../../components/TextInput';
import NumberInputComponent from '../../../../components/NumberInput';
import SelectInputComponent from '../../../../components//SeletectInput';
import TextAreaComponent from '../../../../components/TextArea';
import BookDetailModal from '../../../../components/BookDetailModal';
import { CREATE_BOOK, DELETE_BOOK, GET_LIST_BOOK } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import DateInputComponent from 'components/DatePicker';
import FullPageLoading from 'components/Loading/FullPageLoading/FullPageLoading';
import { REQUEST_STATE } from 'app-configs';

const { Header, Content } = Layout;

function ManageBook() {
    const [createModal, setCreateModalOpen] = useState(false);
    const [detailModal, setDetailModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const [currentPage, setCurrentPage] = useState(0);
    const [listBooks, setListBooks] = useState([]);
    const itemsPerPage = 9;
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const books = useSelector((state) => state?.books);
    const createBook = useSelector((state) => state?.createBook);
    const deleteBook = useSelector((state) => state?.deleteBook);

    useEffect(() => {
        dispatch(GET_LIST_BOOK());
        if (books?.state === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Lỗi',
                description: 'Đã có lỗi xảy ra!',
            });
        }
    }, [dispatch]);
    const initialValues = {
        language: 'English',
        category: 'Technology',
        paperSize: 'A0',
    };
    let chunkedBooks = [];
    useEffect(() => {
        if (books?.data?.metadata) {
            chunkedBooks = chunk(books.data.metadata, itemsPerPage);

            setListBooks(chunkedBooks[currentPage]);
        }
    }, [books?.data?.metadata, currentPage]);

    useEffect(() => {
        if (deleteBook?.state === REQUEST_STATE.SUCCESS || createBook?.state === REQUEST_STATE.SUCCESS) {
            notification.success({
                message: 'Thành công',
                description: 'Thành công!',
            });
            setCreateModalOpen(false);
            setDetailModalOpen(false);
            dispatch(GET_LIST_BOOK());
        }
        if (deleteBook?.state === REQUEST_STATE.ERROR || createBook?.state === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Đã có lỗi xảy ra!',
            });
        }
    }, [deleteBook?.state, createBook.state]);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const chunk = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size);
            chunkedArray.push(chunk);
        }
        return chunkedArray;
    };

    return (
        <div className="manage-book">
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
                        <h2 className="content-title">All Books</h2>
                        <div className="content-body">
                            <Row
                                style={{
                                    justifyContent: 'space-between',
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
                            <Space
                                size={[108, 30]}
                                wrap
                                style={{
                                    paddingLeft: 40,
                                    paddingRight: 40,
                                    marginLeft: 'unset',
                                    marginRight: 'unset',
                                    paddingTop: 30,
                                }}
                            >
                                {(listBooks ?? []).map((item, index) => (
                                    <Col span={7} key={index} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                        <BookCardComponent
                                            bookName={item.name}
                                            author={item.author}
                                            language={item.language}
                                            pages={item.numberOfPages}
                                            onClick={() => {
                                                setSelectedBook(item);
                                                setDetailModalOpen(true);
                                            }}
                                        />
                                    </Col>
                                ))}
                            </Space>
                        </div>
                        <Modal
                            className="Modal"
                            title="Thêm tài liệu"
                            centered
                            open={createModal}
                            onOk={() => {
                                form.validateFields()
                                    .then((values) => {
                                        dispatch(CREATE_BOOK(values));
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
                                height: 550,
                                padding: '20, 70, 70, 70',
                            }}
                        >
                            {createBook.state == REQUEST_STATE.REQUEST || deleteBook.state == REQUEST_STATE.REQUEST ? (
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
                                        name={'code'}
                                        label={'Mã tài liệu'}
                                        placeholder="Mã tài liệu"
                                        required={true}
                                    />
                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'name'}
                                        label={'Tên'}
                                        placeholder="Tên"
                                        required={true}
                                    />
                                    <SelectInputComponent
                                        width={300}
                                        height={40}
                                        name={'category'}
                                        label={'Category'}
                                        placeholder="Category"
                                        ruleType="string"
                                        required={true}
                                        listSelect={[
                                            { label: 'Công nghệ', value: 'Technology' },
                                            { label: 'Kinh tế', value: 'Economics' },
                                            { label: 'Triết học', value: 'Philosophy' },
                                            { label: 'Giáo trình', value: 'Curriculum' },
                                            { label: 'Tiểu thuyết', value: 'Novel' },
                                        ]}
                                    />
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'author'}
                                        label={'Tác giả'}
                                        placeholder="Tác giả"
                                        required={true}
                                    />

                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'publisher'}
                                        label={'Nhà xuất bản'}
                                        placeholder="Nhà xuất bản"
                                        required={true}
                                    />
                                    <TextInputComponent
                                        width={300}
                                        height={40}
                                        name={'department'}
                                        label={'Ngành/Khoa'}
                                        placeholder="Ngành/Khoa"
                                        ruleType="string"
                                    />
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <SelectInputComponent
                                        width={150}
                                        height={40}
                                        name={'paperSize'}
                                        label={'Khổ giấy'}
                                        placeholder={'Khổ giấy'}
                                        ruleType="string"
                                        required={true}
                                        listSelect={[
                                            { label: 'A0', value: 'A0' },
                                            { label: 'A3', value: 'A3' },
                                            { label: 'A4', value: 'A4' },
                                            { label: 'A5', value: 'A5' },
                                        ]}
                                    />
                                    <NumberInputComponent
                                        width={150}
                                        height={40}
                                        name={'republishedTime'}
                                        label={'Tái bản'}
                                        placeholder="Tái bản"
                                    />
                                    <TextInputComponent
                                        width={150}
                                        height={40}
                                        name={'coverPrice'}
                                        label={'Giá bìa'}
                                        placeholder="Giá bìa"
                                        ruleType="string"
                                    />
                                    <NumberInputComponent
                                        width={150}
                                        height={40}
                                        name={'quantity'}
                                        label={'Số lượng'}
                                        placeholder="Số lượng"
                                    />
                                    <NumberInputComponent
                                        width={150}
                                        height={40}
                                        name={'issueNumber'}
                                        label={'Số phát hành'}
                                        placeholder="Số phát hành"
                                    />
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <SelectInputComponent
                                        width={150}
                                        height={40}
                                        name={'language'}
                                        label={'Ngôn ngữ'}
                                        placeholder={'Ngôn ngữ'}
                                        ruleType="string"
                                        required={true}
                                        listSelect={[
                                            { label: 'English', value: 'English' },
                                            { label: 'Vietnamese', value: 'Vietnamese' },
                                            { label: 'Chinese', value: 'Chinese' },
                                        ]}
                                    />
                                    <NumberInputComponent
                                        width={150}
                                        height={40}
                                        name={'publishedYear'}
                                        label={'Năm xuất bản'}
                                        placeholder="2023"
                                    />
                                    <NumberInputComponent
                                        width={150}
                                        height={40}
                                        name={'numberOfPages'}
                                        label={'Số trang'}
                                        placeholder="Số trang"
                                    />
                                    <TextInputComponent
                                        width={150}
                                        height={40}
                                        name={'position'}
                                        label={'Vị trí'}
                                        placeholder="Vị trí"
                                        ruleType="string"
                                    />
                                    <DateInputComponent
                                        width={150}
                                        height={40}
                                        name={'issueDate'}
                                        label={'Ngày phát hành'}
                                        placeholder="Ngày phát hành"
                                    />
                                </Row>
                                <TextAreaComponent
                                    name={'summaryContent'}
                                    label={'Nội dung'}
                                    height={150}
                                    placeholder="Tóm tắt nội dung sách"
                                    ruleType="string"
                                />
                            </Form>
                        </Modal>
                        <BookDetailModal
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
                        />

                        <Row style={{ position: 'absolute', right: 40 }}>
                            <Button
                                style={{
                                    color: '#6FA4D8',
                                    border: '1px solid #6FA4D8',
                                }}
                                onClick={() => {
                                    if (currentPage > 0) {
                                        setCurrentPage(currentPage - 1);
                                    }
                                }}
                            >
                                <LeftOutlined />
                            </Button>
                            <div
                                style={{
                                    margin: '0px 20px 0px 20px',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#6FA4D8',
                                    width: 32,
                                    height: 32,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    border: '1px solid #6FA4D8',
                                    borderRadius: 10,
                                }}
                            >
                                {currentPage + 1}
                            </div>
                            <Button
                                style={{
                                    color: '#6FA4D8',
                                    border: '1px solid #6FA4D8',
                                }}
                                onClick={() => {
                                    if (currentPage <= chunkedBooks.length) {
                                        if (books?.data?.metadata.length % itemsPerPage !== 0)
                                            setCurrentPage(currentPage + 1);
                                        else {
                                            setCurrentPage(currentPage + 1);
                                        }
                                    }
                                }}
                            >
                                <RightOutlined />
                            </Button>
                        </Row>
                    </Content>

                    {books.state == REQUEST_STATE.REQUEST ? <FullPageLoading opacity={0.5} /> : <div></div>}
                </Layout>
            </Layout>
        </div>
    );
}

export default ManageBook;
