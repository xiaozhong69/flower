import React from "react";
import { withRouter, RouteComponentProps,Link } from "react-router-dom";
import { Image, Typography } from "antd";
import styles from "./ProductCollection.module.css";

interface PropsType extends RouteComponentProps {
	id: string | number;
	size: "large" | "small";
	imageSrc: string;
	price: number | string;
	title: string;
}

export const ProductImageComponent: React.FC<PropsType> = ({
	id,
	size,
	imageSrc,
	price,
	title,
}) => {
	return (
		<Link to={`detail/${id}`}>
			{size === "large" ? (
				<Image
					src={imageSrc}
					height={285}
					width={490}
				/>
			) : (
				<Image
					src={imageSrc}
					height={231.43}
					width={212}
				/>
			)}
			<div className={styles["detail-text"]}>
				<Typography.Text type="secondary">
					{title.slice(0, 25)}
				</Typography.Text>
				<br />
				<Typography.Text type="danger" strong>
					￥ {price} 起
				</Typography.Text>
			</div>
		</Link>
	);
};

export const ProductImage = withRouter(ProductImageComponent);
