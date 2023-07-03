import { Card, Image, Row, Col, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';
const { TextArea } = Input;

function BookDetailModal(props) {
    const {
        open,
        onOk,
        onCancel,
        image,
        code,
        name,
        category,
        department,
        author,
        publisher,
        publisherYear,
        language,
        summaryContent,
        numberOfPages,
        pageSize,
        republishedTime,
        coverPrice,
        issuedNumber,
        issuedDate,
        quantity,
        position,
    } = props;
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
    return (
        <Modal
            title="Thông tin tài liệu"
            centered
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            width={1000}
            cancelText={'Xóa'}
            okText={'Sửa'}
        >
            <div
                className="image"
                style={{
                    width: 952,
                    justifyContent: 'center',
                    display: 'flex',
                }}
            >
                <Image
                    width={120}
                    height={180}
                    style={{
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
                        borderRadius: 10,
                    }}
                    src={`${image ?? 'https://libgen.li/covers/2571000/9ad575ef3bf23fd0e12af821b1556861.jpg'}`}
                />
            </div>
            <div
                className="content"
                style={{
                    marginTop: 20,
                }}
            >
                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Mã tài liệu</div>
                        <div style={valueStyle}>{code ?? 'code'}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Thể loại</div>
                        <div style={valueStyle}>{category ?? category}</div>
                    </Row>
                </Row>

                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Tên tài liệu</div>
                        <div style={valueStyle}>{name ?? 'name'}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Ngôn ngữ</div>
                        <div style={valueStyle}>{language ?? 'language'}</div>
                    </Row>
                </Row>
                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Tác giả </div>
                        <div style={valueStyle}>{author ?? 'author'}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Số trang</div>
                        <div style={valueStyle}>{numberOfPages ?? '0'}</div>
                    </Row>
                </Row>
                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Tái bản </div>
                        <div style={valueStyle}>{republishedTime}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Giá bìa</div>
                        <div style={valueStyle}>{coverPrice ?? 0} đồng</div>
                    </Row>
                </Row>
                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Số lượng </div>
                        <div style={valueStyle}>{quantity ?? 0}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Số lượng </div>
                        <div style={valueStyle}>{issuedNumber ?? 0}</div>
                    </Row>
                </Row>
                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Nhà xuất bản</div>
                        <div style={valueStyle}>{publisher ?? 'publisher'}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Năm xuất bản</div>
                        <div style={valueStyle}>{publisherYear ?? '2023'}</div>
                    </Row>
                </Row>
                <Row style={rowStyle}>
                    <Row>
                        <div style={labelStyle}>Vị trí</div>
                        <div style={valueStyle}>{position ?? 'position'}</div>
                    </Row>
                    <Row>
                        <div style={labelStyle}>Ngành/Khoa</div>
                        <div style={valueStyle}>{department ?? 'department'}</div>
                    </Row>
                </Row>
                <div style={{ ...labelStyle, marginTop: 10, marginBottom: 10 }}>Nội dung</div>
                <TextArea
                    disabled={true}
                    placeholder={summaryContent ?? ''}
                    autoSize={{
                        minRows: 5,
                        maxRows: 8,
                    }}
                />
            </div>
        </Modal>
    );
}
export default BookDetailModal;
