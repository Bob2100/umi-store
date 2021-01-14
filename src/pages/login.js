import { Component } from 'react';
import styles from './login.css';
import { Login } from "ant-design-pro";
import { connect } from 'dva';

const { UserName, Password, Submit } = Login;

@connect()
export default class extends Component {
  onSubmit = async (err, values) => {
    if (!err) {
      // 提交表单
      this.props.dispatch({ type: 'user/login', payload: values });
    }
  }
  render() {
    return (
      <div className={styles.loginForm}>
        <img className={styles.logo} src="/course/logo.png" />
        <Login onSubmit={this.onSubmit}>
          <UserName name="username" placeholder="kaikeba" rules={[{ required: true, message: "请输入用户名" }]} />
          <Password name="password" placeholder="123" rules={[{ required: true, message: "请输入密码" }]} />
          <Submit>登录</Submit>
        </Login>
      </div>
    );
  }
}
