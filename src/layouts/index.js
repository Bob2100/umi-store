import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

export default function (props) {
  return (
    <Layout>
      <Header className={styles.header}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Item key='1'>
            <Link to={'/'}>商品</Link>
          </Item>
          <Item key='2'>
            <Link to={'/users'}>用户</Link>
          </Item>
          <Item key='3'>
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
