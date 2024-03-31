import React, { useEffect, useState } from "react";
import "./UsersList.css";
import instance from "../../axios-instance";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await instance
      .get("/users")
      .catch((err) => {
        console.log("err", err);
      });
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-list">
      <h1>Users List</h1>
      {users.map((user) => (
        <div className="users-container" key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          {user.avatar && <img src={user.avatar} alt={user.name} />}
        </div>
      ))}
    </div>
  );
};

export default UserList;
