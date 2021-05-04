import React from 'react';

import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import './intro.css';
import 'antd/dist/antd.css';

const { Title } = Typography;

export default function Intro() {
  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <div style={{
        position: 'relative', top: '30%', textAlign: 'left', left: '30%',
      }}
      >
        <Title className="title" style={{ fontSize: '60px', display: 'inline-block' }}>stolage</Title>
        <p
          className="description"
          style={{
            position: 'absolute', top: '45px', display: 'inline-block', fontSize: 'middle',
          }}
        >
          Storage에 label을 입히다
        </p>
        <p className="description" style={{ fontSize: 'x-large' }}>
          stolage는 파일을 단순한 디렉토리로 저장하지않습니다.
          {' '}
          <br />
          파일을 label로 묘사하세요.
        </p>
        <Button type="primary" htmlType="button">
          <Link to="/demo">체험하기</Link>
        </Button>
      </div>
    </div>
  );
}
