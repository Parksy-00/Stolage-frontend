import React from 'react'
import "antd/dist/antd.css"
import "./Login.css"
import { Button, Checkbox, Form, Input, Typography, Divider} from 'antd'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';

const { Title } = Typography

export default function Login() {
    return (
        <div style={{marginTop:"20vh"}}>
            <Title style={{margin: "80px 90px 50px", textAlign:'left'}}>stolage</Title>

            <Form wrapperCol={{span:18, offset:3}} className="login-form" initialValues={{remember: true}}>
                <Form.Item
                name="email"
                rules={[{required:true, message: "Please write your email!"}]}
                >
                    <Input placeholder="이메일" prefix={<UserOutlined/>}/>
                </Form.Item>

                <Form.Item
                name="password"
                rules={[{required:true, message: "Please write your password!"}]}
                >
                    <Input.Password placeholder="비밀번호" prefix={<LockOutlined/>}/>
                </Form.Item>

                <Form.Item valuePropName="checked">
                    <Checkbox>계정 기억하기</Checkbox>

                    <a href="/" style={{float:'right'}}>비밀번호 찾기</a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-btn">
                        로그인
                    </Button>
                </Form.Item>

                <Form.Item>
                    stolage가 처음이세요?
                    <Button type="link" style={{float:"right"}}>회원가입</Button>
                </Form.Item>

                <Form.Item>
                    <Divider>간편 로그인</Divider>
                    <Button style={{width:"100%", marginBottom:"10px"}}><GoogleOutlined size="large"/>구글로 로그인하기</Button>
                    <Button style={{width:"100%", marginBottom:"10px"}}>네이버로 로그인하기</Button>
                </Form.Item>

            </Form>
        </div>
    )
}