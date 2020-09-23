import React from "react";
import './Admin.css'
import Routes from './admin/Routes'
import { Col, Row, Nav, NavItem, Panel } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function Admin() {
    let { url } = useRouteMatch();

    return (
        <>
            <Row>
                <Col xs={4} md={3}>
                    <Panel>
                        <Panel.Body>
                            <h2>Admin Panel</h2>
                            <Nav bsStyle="pills" stacked>
                                <LinkContainer to={`${url}/users`} >
                                    <NavItem>Users</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${url}/user/new`} >
                                    <NavItem>New User</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${url}/groups`} >
                                    <NavItem>Groups</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col xs={8} md={9}>
                    <Routes />
                </Col>
            </Row>
        </>
    )
}