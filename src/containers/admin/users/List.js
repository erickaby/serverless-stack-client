import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../libs/contextLib";
import { onError } from "../../../libs/errorLib";
import { API } from 'aws-amplify';
import { Link, useRouteMatch } from "react-router-dom";

export default function AdminUserList() {
    const [users, setUsers] = useState([]);
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);

    let { url } = useRouteMatch();

    useEffect(() => {
        async function onLoad() {
          if (!isAuthenticated) {
            return;
          }
      
          try {
            const users = await loadUsers();
            console.log(users)
            setUsers(formatUsers(users));
          } catch (e) {
            onError(e);
          }
      
          setIsLoading(false);
        }
      
        onLoad();
      }, [isAuthenticated]);

    function formatUsers(users) {
        return users.map((user, i) => {
            const newUser = {
                username: user.Username,
                email: user.Attributes.find(v => v.Name === 'email').Value,
                status: user.UserStatus
            };
            return newUser;
        });
    }
      
    function loadUsers() {
        return API.get("notes", "/user-list");
    }

    function renderUserRows() {
        return users.map((user, i) => 
            (
                <tr key={i}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>
                        <Link to={`/admin/user/${user.username}`} className="btn btn-success">
                            View
                        </Link>
                    </td>
                </tr>
            )
        );
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderUserRows()}
                </tbody>
            </table>
        </>
    )
}