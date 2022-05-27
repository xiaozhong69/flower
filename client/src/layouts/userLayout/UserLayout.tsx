import React from "react";
import styles from "./UserLayout.module.css";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const {Content } = Layout;

export const UserLayout: React.FC = (props) => {
  return (
    <Layout className={styles["user-layout-container"]}>
      <Content className={styles["content"]}>
        <div className={styles["top"]}>
          <div className={styles["content-header"]}>
            <Link to="/">
              <span className={styles["title"]}>愈芯鲜花同城配送网</span>
            </Link>
          </div>
          <br /><br />
          {props.children}
        </div>
      </Content>
    </Layout>
  );
};