/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import usePosts from "../hooks/useUsers";
import UserTable from "./UserTable";
import PostModal from "./PostModal";

const UserForm = () => {
  const { posts, loading, error, addPost, editPost, removePost } = usePosts();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [form] = Form.useForm();

  const handleModalOpen = (post = null) => {
    setEditingPost(post);
    form.setFieldsValue(post || { title: "", body: "" });
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setEditingPost(null);
    form.resetFields();
  };

  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingPost) {
        await editPost(editingPost.id, values);
      } else {
        await addPost(values);
      }
      handleModalClose();
    } catch (errorInfo) {
      console.log("Form validation failed:", errorInfo);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      removePost(id);
    }
  };

  if (loading) return <Spin size="large" />;
  if (error)
    return <Alert message="Error" description={error.message} type="error" />;

  return (
    <>
      <Button
        onClick={() => handleModalOpen()}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Add Post
      </Button>
      <UserTable
        posts={posts}
        onEdit={handleModalOpen}
        onDelete={handleDelete}
      />
      <PostModal
        visible={isModalVisible}
        onCancel={handleModalClose}
        onOk={handleFormSubmit}
        form={form}
        editingPost={editingPost}
      />
    </>
  );
};

export default UserForm;
