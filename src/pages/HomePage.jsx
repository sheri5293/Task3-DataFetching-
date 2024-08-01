/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import UserForm from "../components/UserForm";

const HomePage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseForm = () => {
    setFormOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <UserForm
        open={formOpen}
        onClose={handleCloseForm}
        user={selectedUser}
        isEdit={isEdit}
      />
    </div>
  );
};

export default HomePage;
