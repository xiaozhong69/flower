import React from "react";
import styles from "./ProductCollection.module.css";
import { Row, Col, Divider } from "antd";
import { ProductImage } from "./ProductImage";
import img1 from '../../assets/images/content/1-1.jpg';
import img2 from '../../assets/images/content/1-2.jpg';
import img3 from '../../assets/images/content/1-3.jpg';
import img4 from '../../assets/images/content/1-4.jpg';
import img5 from '../../assets/images/content/1-5.jpg';
import img6 from '../../assets/images/content/1-6.jpg';
import img7 from '../../assets/images/content/1-7.jpg';
import img8 from '../../assets/images/content/1-8.jpg';
interface PropsType {
	title: JSX.Element;
	sideImage: string;
	products: any[];
}
export const ProductCollection: React.FC<PropsType> = ({
	title,
	sideImage,
}) => {
	return (
		<div className={styles.content}>
			<Divider orientation="left">{title}</Divider>
			<Row>
				<Col span={5}>
					<img
						src={sideImage}
						className={styles["side-image"]}
						alt=""
					/>
				</Col>
				<Col span={18} offset={1}>
					<Row>
						<Col span={4}>
							<ProductImage
								title="爱情 · 韩式系列"
								imageSrc={img1}
								price="239"
								id="1"
								size="small"
							/>
						</Col>
						<Col span={4} offset={2}>
							<ProductImage
								title="爱情 · 你是唯一"
								imageSrc={img2}
								price="159"
								id="2"
								size="small"
							/>
						</Col>
						<Col span={4} offset={2}>
							<ProductImage
								title="爱情 · 爱你一生一世"
								imageSrc={img3}
								price="298"
								id="3"
								size="small"
							/>
						</Col>
						<Col span={4} offset={2}>
							<ProductImage
								title="爱情 · 忘情巴黎"
								imageSrc={img4}
								price="339"
								id="4"
								size="small"
							/>
						</Col>
					</Row>
					<Row className={styles["content-second"]}>
						<Col span={4}>
							<ProductImage
								title="爱情 · 韩式系列"
								imageSrc={img5}
								price="239"
								id="1"
								size="small"
							/>
						</Col>
						<Col span={4} offset={2}>
							<ProductImage
								title="爱情 · 你是唯一"
								imageSrc={img6}
								price="159"
								id="2"
								size="small"
							/>
						</Col>
						<Col span={4} offset={2}>
							<ProductImage
								title="爱情 · 爱你一生一世"
								imageSrc={img7}
								price="298"
								id="3"
								size="small"
							/>
						</Col>
						<Col span={4} offset={2}>
							<ProductImage
								title="爱情 · 忘情巴黎"
								imageSrc={img8}
								price="339"
								id="4"
								size="small"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};
