import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SearchBar = () => (
  <div>
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="multiple Mode"
      onChange={handleChange}
      value={['a1', 'a2']}
    >
      {children}
    </Select>
  </div>
);

export default SearchBar;
