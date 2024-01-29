import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, message} from "antd";
import {loginAccount} from "../back/ApiService";
import {Navigate, redirect, useNavigate} from "react-router-dom";
const LoginPage = props => {
    const navigate = useNavigate();
    const login = (data) => {
        loginAccount(data).then((res) => {
            if (res) {
                message.success("登录成功")
                localStorage.setItem("user", data.account)
                //跳转到主页
                navigate("/projects")
            }
            else {
                message.error("登录失败")
                navigate("/login")
            }
        }
        ).catch((err) => {
                console.log(err)
            }
        )
    }
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
                height: "300px",
                border: "1px solid #d9d9d9",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,.1)",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
            }}>
                <Form name={"login"}   labelCol={ {
                    xs: { span: 24 },
                    sm: { span: 6 },
                }}
                wrapperCol= {{
                xs: { span: 24 },
                sm: { span: 14 },
            }} onFinish={login}
                >
                    <Form.Item label="account" name="account">
                        <input/>
                    </Form.Item>
                    <Form.Item label="password" name="password">
                        <input/>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset:18}} >
                        <Button type={"primary"} htmlType={"submit"}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
);
};

LoginPage.propTypes = {

};

export default LoginPage;