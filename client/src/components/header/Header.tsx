import React from "react";
import styles from "./Header.module.css";
import { Layout, Typography, Button } from "antd";
import {
	useHistory,
} from "react-router-dom";
import { useDispatch } from "react-redux";

export const Header: React.FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	return (
		<div className={styles["app-header"]}>
			<div className={styles["top-header"]}>
				<div className={styles.user}>
					<Button.Group className={styles["button-group"]}>
						<Button onClick={() => history.push("/user_register")}>
							用户注册
						</Button>
						<Button onClick={() => history.push("/user_signIn")}>
							用户登陆
						</Button>
					</Button.Group>
				</div>
					<Button.Group className={styles["button-group"]}>
						<Button onClick={() => history.push("/rider_register")}>
							骑手注册
						</Button>
						<Button onClick={() => history.push("/rider_signIn")}>
							骑手登陆
						</Button>
					</Button.Group>
			</div>
			<Layout.Header className={styles["main-header"]}>
					<Typography.Title
						level={3}
						className={styles.title}
					>
						愈芯鲜花同城配送网
					</Typography.Title>

			</Layout.Header>
		</div>
	);
};
