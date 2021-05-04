import React from 'react';
import { Layout } from 'antd';
import Login from './Login/Login';
import Intro from './Intro/Intro';

const { Sider, Content } = Layout;

export default function LoginPage() {
  return (
    <div className="LoginPage" style={{ height: '100vh', width: '100%' }}>
      <Layout>
        <Content>
          <Intro />
        </Content>
        <Sider theme="light" width="400px" style={{ minHeight: '100vh' }}>
          <Login />
        </Sider>
      </Layout>
    </div>
  );
}
