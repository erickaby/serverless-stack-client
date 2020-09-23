import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { onError } from "../../../libs/errorLib";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function AdminUsersView() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    function loadUser() {
      return API.get("notes", `/user-get/${id}`);
    }

    async function onLoad() {
      try {
        const userDetails = await loadUser();
        console.log(userDetails);

        setUser(formatUser(userDetails[0]));
        setGroups(userDetails[1].Groups);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);

  function formatUser(user) {
    const newUser = {
      username: user.Username,
      email: user.UserAttributes.find(v => v.Name === 'email').Value,
      status: user.UserStatus,
      enabled: user.Enabled,
      created: user.UserCreateDate,
      modified: user.UserLastModifiedDate,
    };
    return newUser;
  }

  function renderGroupRows() {
    return groups.map((group, i) =>
      (
        <tr key={i}>
          <td>{group.GroupName}</td>
          <td>{group.Description}</td>
          <td>

          </td>
        </tr>
      )
    )
  }

  return (
      <>
          <h3>User Details</h3>
          { user && (
              <>
                <Row>
                  <Col xs={4} md={2}><strong>Username</strong></Col>
                  <Col xs={8} md={10}>{ user.username }</Col>
                </Row>
                <Row>
                  <Col xs={4} md={2}><strong>Email</strong></Col>
                  <Col xs={8} md={10}>{ user.email }</Col>
                </Row>
                <Row>
                  <Col xs={4} md={2}><strong>Status</strong></Col>
                  <Col xs={8} md={10}>{ user.status }</Col>
                </Row>
                <Row>
                  <Col xs={4} md={2}><strong>Enabled</strong></Col>
                  <Col xs={8} md={10}>{ user.enabled ? 'True' : 'False' }</Col>
                </Row>
                <Row>
                  <Col xs={4} md={2}><strong>Created On</strong></Col>
                  <Col xs={8} md={10}>{ user.created }</Col>
                </Row>
                <Row>
                  <Col xs={4} md={2}><strong>Last Modified On</strong></Col>
                  <Col xs={8} md={10}>{ user.modified }</Col>
                </Row>
                
              </>
            )
          }
          <h3>Users Groups</h3>
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
                  {renderGroupRows()}
              </tbody>
          </table>
      </>
    )
}