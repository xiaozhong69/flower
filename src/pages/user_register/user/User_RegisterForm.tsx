import React from 'react';
import styles from './User_RegisterForm.module.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import into from '../../../db/into';

export const RegisterForm = () => {

  const history = useHistory();

  const onFinish = async (values: any) => {
    try {
      await into(values.username, values.password, values.phone);
      history.push('/user_signIn/');
    } catch (error) {
      alert('注册失败！');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['register-form']}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[{
          required: true,
          message: '请再次输入密码!',
        },
        (({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject("密码确认不一致");
          }
        }))
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="手机号"
        name="phone"
        rules={[{
          required: true,
          message: '请确保手机号输入正确!',
          len: 11,
        }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 16, span: 28 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};