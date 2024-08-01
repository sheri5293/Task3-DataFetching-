/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Modal, Form, Input } from "antd";

const PostModal = ({ visible, onCancel, onOk, form, editingPost }) => (
  <Modal
    title={editingPost ? "Edit Post" : "Add Post"}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    okText={editingPost ? "Save" : "Add"}
  >
    <Form form={form} layout="vertical">
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="body"
        label="Body"
        rules={[{ required: true, message: "Please input the body!" }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  </Modal>
);

export default PostModal;
