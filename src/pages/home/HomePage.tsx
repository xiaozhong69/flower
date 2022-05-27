import React, { Component } from 'react';
import { Row, Col, Typography, Spin } from 'antd';
import { Carousel, ProductCollection } from '../../components';
import sideImage from '../../assets/images/content/home_floor_lover.png';
import sideImage2 from '../../assets/images/content/home_floor_elder.png';
import sideImage3 from '../../assets/images/content/home_floor_song.jpg';
import { connect } from 'react-redux';
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";
import { MainLayout } from '../../layouts';

type PropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends Component<PropsType> {

	componentDidMount() {
		this.props.giveMeData();
	}

	render() {
		const { productList, loading, error } = this.props;

		if (loading) {
			return <Spin
				size='large'
				style={{
					marginTop: 200,
					marginBottom: 200,
					marginLeft: "auto",
					marginRight: "auto",
					width: "100%"
				}}
			/>
		}

		if (error) {
			return <div>网站出错：{error}</div>
		}

		return (
			<MainLayout>
				<Row style={{ marginTop: 20 }}>
					<Col span={18}>
						<Carousel />
					</Col>
				</Row>
				<ProductCollection
					title={<Typography.Title level={3}>爱情鲜花</Typography.Title>}
					sideImage={sideImage}
					products={productList[0].touristRoutes}
				/>
				<ProductCollection
					title={<Typography.Title level={3}>送长辈鲜花</Typography.Title>}
					sideImage={sideImage2}
					products={productList[1].touristRoutes}
				/>
				<ProductCollection
					title={<Typography.Title level={3}>永生花</Typography.Title>}
					sideImage={sideImage3}
					products={productList[2].touristRoutes}
				/>
			</MainLayout>
		)
	}
}

const mapStateToProps = (state: RootState) => {
	return {
		productList: state.recommendProducts.productList,
		error: state.recommendProducts.error,
		loading: state.recommendProducts.loading
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		giveMeData: () => {
			dispatch(giveMeDataActionCreator());
		}
	}
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);