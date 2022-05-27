import React, { useEffect } from 'react';
import styles from './User_SignInForm.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../../redux/user/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../redux/hooks';

export const User_SignInForm = () => {

  const loading = useSelector(s => s.user.loading);
  const jwt = useSelector(s => s.user.token);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (jwt !== null) {
      history.push('/');
    }
  }, [jwt]);

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    dispatch(signIn({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      user: values.username,
      password: values.password
    }))
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
      className={styles['signIn-form']}
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
      <Form.Item wrapperCol={{ offset: 16, span: 28 }}>
        <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
      </Form.Item>
    </Form>
  );
};