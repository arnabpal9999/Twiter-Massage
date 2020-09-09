import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import fire from './config/fire';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



export class Login extends Component {

  constructor(props)
  {
  
      super(props)
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state={
          email : "",
          password : ""
  
  
      }
  }
  
  login(e){
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          console.log(u)
      }).catch((err)=>{
          console.log(err);
      })
  }
  
  signup(e){
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          console.log(u);
      }).catch((err)=>{
          console.log(err);
      })
  
  }
  
  handleChange(e){
      this.setState({
          [e.target.name] : e.target.value
      })
  }
  

    render() {
        return (
            <div className="form-style-5 ">
                <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
     
    >
      <Form.Item
        label="Username"
        
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
      </Form.Item>

      <Form.Item
        label="Password"
      
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password type="password"   name="password" onChange={this.handleChange} value={this.state.password}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={this.login}  htmlType="submit">
          Login
        </Button>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={this.signup}  htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
            </div>
        )
    }
}

export default Login


 