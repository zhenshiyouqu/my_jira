import React from 'react';
import {Button, Form, Input, Radio, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";

const onSubmit = (values) => {
    console.log("submit")
    console.log(values)
}


const ReqCreatePage = props => {
    const [createForm] = Form.useForm();

    const fillAll = () => {
        createForm.setFieldsValue({
            title: "第一个bug",
            description: "description",
            path: "path",
            requirement_id: "1",
            processor_id: "1",
            identifier_id: "1",
            env: 3,
            priority: 4,
            damage: 4,
        });
    }


    return (
        // Bug表字段：id, name, description, creatorId, ownerId, projectId, status, priority, severity, createTime, updateTime提交
        <Form form={createForm} layout={"vertical"} onFinish={onSubmit}>
            <Form.Item name="title" label={<span style={{fontSize: "20px", fontWeight: "700"}}>Title</span>}
                       required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="description" label="Description" required={false}>
                {/*<input style={{width:"200px",height:"30px"}} type="text" />*/}
                <TextArea rows={4}/>
                <div>
                    <span style={{fontSize: "10", fontWeight: "200"}}>填写说明：背景、价值、需求内容</span>
                </div>
            </Form.Item>
            {/*需求文档，一个链接url*/}
            <Form.Item name="path" label="Requirement Document" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>


            {/*<Form.Item name="path" label="Bug Screenshot/Vedio" required={false}>*/}
            {/*    /!*<input style={{width:"200px",height:"30px"}} type="text" />*!/*/}
            {/*    <Upload action="/upload.do" listType="picture-card">*/}
            {/*        <button style={{border: 0, background: 'none'}} type="button">*/}
            {/*            <PlusOutlined/>*/}
            {/*            <div style={{marginTop: 8}}>Upload</div>*/}
            {/*        </button>*/}
            {/*    </Upload>*/}
            {/*</Form.Item>*/}
            <Form.Item name="requirement_id" label="Connect Requirement" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="processor_id" label="Processor" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="identifier_id" label="Identifier" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="priority" label="Priority" required={false}>
                <Radio.Group defaultValue={4}>
                    <Radio value={1}>S</Radio>
                    <Radio value={2}>A</Radio>
                    <Radio value={3}>B</Radio>
                    <Radio value={4}>C</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="damage" label="Damage" required={false}>
                <Radio.Group defaultValue={4}>
                    <Radio value={1}>S</Radio>
                    <Radio value={2}>A</Radio>
                    <Radio value={3}>B</Radio>
                    <Radio value={4}>C</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <Form.Item>
                <Button type="link" htmlType="button" onClick={fillAll}>
                    test fill
                </Button>
            </Form.Item>
        </Form>

    );
};

ReqCreatePage.propTypes = {};

export default ReqCreatePage;