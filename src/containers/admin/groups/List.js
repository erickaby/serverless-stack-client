import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../libs/contextLib";
import { onError } from "../../../libs/errorLib";
import { API } from 'aws-amplify';
import { Link, useRouteMatch } from "react-router-dom";

export default function AdminGroupsList() {
    const [groups, setGroups] = useState([]);
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            
            try {
                const groups = await loadGroups();
                console.log(groups);
                setGroups(groups);
            } catch (e) {
                onError(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [isAuthenticated]);

    function loadGroups() {
        return API.get('notes', '/group-list');
    }

    function renderGroupRows() {
        return groups.map((group, i) => 
            (
                <tr key={i}>
                    <td>{group.GroupName}</td>
                    <td>{group.Description ? group.Description : 'n/a'}</td>
                    <td>{group.Precedence}</td>
                </tr>
            )
        );
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Precedence</th>
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