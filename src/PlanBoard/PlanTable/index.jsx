import React from 'react';
import {Space, Table, Tag} from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import * as PropTypes from "prop-types";
import IconButton from "../../general/IconButton";

const data = [
    {
        title: 'Ant Design Title 1',
        description: 'Ant Design Description 1',
        linkWork: 'Ant Design LinkWork 1',
        expectedDateFrom: '2024-01-30',
        expectedDateTo: '2024-01-30',
        actualDateFrom: '2024-02-30',
        actualDateTo: '2024-03-30',
        expectedDays: '30',
        actualDays: '15',
        principal: 'Bob Lee',
        creator: 'Ant Design Creator 1',
        status: 'Ant Design Status 1',
        tags: ['nice', 'developer']
    },
    {
        title: 'Ant Design Title 2',
        description: 'Ant Design Description 2',
        expectedDateFrom: '2024-01-30',
        expectedDateTo: '2024-01-30',
        actualDateFrom: '2024-02-30',
        actualDateTo: '2024-03-30',
        expectedDays: '30',
        actualDays: '15',
        principal: 'Bob Lee',
        creator: 'Ant Design Creator 2',
        status: 'Ant Design Status 2',
        tags: ['nice', 'developer']
    },
    {
        title: 'Ant Design Title 3',
        description: 'Ant Design Description 3',
        expectedDateFrom: '2024-01-30',
        expectedDateTo: '2024-01-30',
        actualDateFrom: '2024-02-30',
        actualDateTo: '2024-03-30',
        expectedDays: '30',
        actualDays: '15',
        principal: 'Bob Lee',
        creator: 'Ant Design Creator 3',
        status: 'Ant Design Status 3',
        tags: ['nice', 'developer']
    },
    {
        title: 'Ant Design Title 4',
        description: 'Ant Design Description 4',
        expectedDateFrom: '2024-01-30',
        expectedDateTo: '2024-01-30',
        actualDateFrom: '2024-02-30',
        actualDateTo: '2024-03-30',
        expectedDays: '30',
        actualDays: '15',
        principal: 'Bob Lee',
        creator: 'Ant Design Creator 4',
        status: 'Ant Design Status 4',
        tags: ['nice', 'developer']
    },
    {
        title: 'Ant Design Title 5',
        description: 'Ant Design Description 5',
        expectedDateFrom: '2024-01-30',
        expectedDateTo: '2024-01-30',
        actualDateFrom: '2024-02-30',
        actualDateTo: '2024-03-30',
        expectedDays: '30',
        actualDays: '15',
        principal: 'Bob Lee',
        creator: 'Ant Design Creator 5',
        status: 'Ant Design Status 5',
        tags: ['nice', 'developer']
    }

];


function RangePicker(props) {
    return null;
}

RangePicker.propTypes = {};
const PlanTable = props => {
    const [show, setShow] = React.useState(false);


    return (
        <>
            <Table dataSource={data} tableLayout={"fixed"} size="large" >
                {/*Title Description  ExpectedDate ActualDate ExpectedDays LinkWork ActualDays Principal Creator Status*/}
                <Column title="Title" dataIndex="title" key="title" fixed={true} width="300px"/>
                <Column title="LinkWork" dataIndex="linkWork" key="linkWork" width="150px"
                        render={(linkWork) => (
                            <>
                                <a>{linkWork}</a>
                            </>
                        )}
                />
                <ColumnGroup title="AxpectedDate">
                    <Column title="From" dataIndex="expectedDateFrom" key="expectedDateFrom" width="200px"/>
                    <Column title="To" dataIndex="expectedDateTo" key="expectedDateTo" width="150px"/>
                </ColumnGroup>
                <ColumnGroup title="ActualDate">
                    <Column title="From" dataIndex="actualDateFrom" key="actualDateFrom" width="150px" />
                    <Column title="To" dataIndex="actualDateTo" key="actualDateTo" width="150px" />
                </ColumnGroup>
                <Column title="ExpectedDays" dataIndex="expectedDays" key="expectedDays" width="150px"/>
                <Column title="ActualDays" dataIndex="actualDays" key="actualDays" width="150px"/>
                <Column title="Principal" dataIndex="principal" key="principal" width="100px"/>
                <Column title="Creator" dataIndex="creator" key="creator" width="100px" />
                <Column title="Status" dataIndex="status" key="status"width="100px" />
            </Table>

        </>

    );
};

PlanTable.propTypes = {};

export default PlanTable;