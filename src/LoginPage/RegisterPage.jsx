import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, message, Upload} from "antd";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import { registerAccount} from "../back/ApiService";

const RegisterPage = props => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    //检查注册数据
    const checkRegisterData = (data) => {
        if (data.password !== data.repassword) {
            message.error("两次密码不一致")
            return false
        }
        return true
    }

    const register = (data) => {
        if (!checkRegisterData(data)){
            return
        }
        //调用接口后端接口register
        registerAccount(data).then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                console.log("注册成功")
                message.success("注册成功")
            }
        }
        ).catch((err) => {
                console.log(err)
            }
        )
        alert("注册成功")
    }

    const handleChange = (info) => {
        console.log(info.file)
        console.log(info.file.originFileObj)
        if (info.file.status === 'uploading') {
            console.log("uploading")
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            console.log("done")
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setLoading(false);
                setImageUrl(imageUrl)
                console.log("callback")
            });
        }
    }
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );


    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.addEventListener('load', () => callback(reader.result));
    };
    return (
        <div style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
            backgroundColor: "#f0f2f5"
        }}>
            <div style={{
                width: "400px",
                height: "500px",
                border: "1px solid #d9d9d9",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,.1)",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
            }}>
                <Form name={"login"} labelCol={{
                    xs: {span: 24},
                    sm: {span: 6},
                }}
                      wrapperCol={{
                          xs: {span: 24},
                          sm: {span: 14},
                      }} onFinish={register}
                >
                    <Form.Item label="avatar" name="avatar">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </Form.Item>
                    <Form.Item label="nickname" name="name">
                        <input/>
                    </Form.Item>
                    <Form.Item label="account" name="account">
                        <input/>
                    </Form.Item>
                    <Form.Item label="password" name="password">
                        <input/>
                    </Form.Item>
                    <Form.Item label="repassword" name="repassword">
                        <input/>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 18}}>
                        <Button type={"primary"} htmlType={"submit"}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

RegisterPage.propTypes = {};

export default RegisterPage;