import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

export default function (props) {
  const selectedKeys = [props.location.pathname];
  return (
    <Layout>
      <Header className={styles.header}>
        <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys} style={{ lineHeight: '64px' }}>
          <img src="https://img.kaikeba.com/logo-new.png" className={styles.logo} />
          <Item key='/'>
            <Link to={'/'}>商品</Link>
          </Item>
          <Item key='/users'>
            <Link to={'/users'}>用户</Link>
          </Item>
          <Item key='/about'>
            <Link to={'/about'}>关于</Link>
          </Item>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>开课吧</Footer>
    </Layout>
  );
}
