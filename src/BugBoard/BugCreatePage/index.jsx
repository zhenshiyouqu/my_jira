import React from 'react';
import {Button, Form, Input, Radio, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";

const onSubmit = (values) => {
    console.log("submit")
    console.log(values)
}



const BugCreatePage = props => {
    const [createForm] = Form.useForm();

    const fillAll = () => {
        createForm.setFieldsValue({
            title: "title",
            description: "description",
            requirement: "requirement",
            processor: "processor",
            identifier: "identifier",
            env: 3,
            priority: 4,
            damage: 4
        });
    }


    return (
        // Bug表字段：id, name, description, creatorId, ownerId, projectId, status, priority, severity, createTime, updateTime提交
        <Form form={createForm} layout={"vertical"} onFinish={onSubmit}>
            <Form.Item name="title" label={<span style={{ fontSize:"20px",fontWeight:"700" }}>Title</span>} required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="description" label="Description" required={false}>
                {/*<input style={{width:"200px",height:"30px"}} type="text" />*/}
                <TextArea rows={4}/>
                <div>
                    <span style={{fontSize:"10",fontWeight:"200"}}>填写说明：有重现步骤、预期结果</span>
                </div>
            </Form.Item>
            <Form.Item  label="Bug Screenshot/Vedio" required={false}>
                {/*<input style={{width:"200px",height:"30px"}} type="text" />*/}
                <Upload action="/upload.do" listType="picture-card">
                    <button style={{border: 0, background: 'none'}} type="button">
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>Upload</div>
                    </button>
                </Upload>
            </Form.Item>
            <Form.Item name="requirement" label="Connect Requirement" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item  name="processor" label="Processor" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="identifier" label="Identifier" required={false}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item name="env" label="Env" required={false}>
                <Radio.Group defaultValue={3}>
                    <Radio value={1}>Pro</Radio>
                    <Radio value={2}>Uat</Radio>
                    <Radio value={3}>Sit</Radio>
                    <Radio value={4}>Dev</Radio>
                </Radio.Group>
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
            <Form.Item >
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

BugCreatePage.propTypes = {};

export default BugCreatePage;