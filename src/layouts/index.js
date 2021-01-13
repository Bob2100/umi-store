import { Layout } from 'antd';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

export default function (props) {
  return (
    <Layout>
      <Header className={styles.header}>导航</Header>
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      <Footer className={styles.footer}>开课吧</Footer>
    </Layout>
  );
}
