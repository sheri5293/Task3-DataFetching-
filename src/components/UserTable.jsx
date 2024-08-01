/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Table, Button } from "antd";

const UserTable = ({ posts, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button onClick={() => onEdit(record)} type="link">
            Edit
          </Button>
          <Button onClick={() => onDelete(record.id)} type="link" danger>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table dataSource={posts} columns={columns} rowKey="id" />;
};

export default UserTable;
