import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import LoginMethod from '../../api/userApi';
import './login.scss';
//在需要使用mock的返回数据的页面引入
import '../../mockData/userData';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        LoginMethod(values).then(res => {
          this.props.history.push('/');
        })
        
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="flexCenter">
        <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
            {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(
                <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            Or <a>register now!</a>
            </FormItem>
        </Form>
      </section>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);