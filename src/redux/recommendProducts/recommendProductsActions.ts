import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
    payload: any;
}

interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
    payload: any;
}

interface CatchType {
    message: any
}

export type RecommendProductAction =
    | FetchRecommendProductStartAction
    | FetchRecommendProductSuccessAction
    | FetchRecommendProductFailAction;

export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}
export const fetchRecommendProductSuccessActionCreator = (data): FetchRecommendProductSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}
export const fetchRecommendProductFailActionCreator = (error): FetchRecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}

// thunk可以返回一个函数，而不一定是js对象
// 在一个thunk action中可以完成一系列连续的action操作
// 并且可以处理异步逻辑
// export const giveMeDataActionCreator = (): ThunkAction<void, RootState, unknown, RecommendProductAction> =>
//     async (dispatch, getState) => {
//         dispatch(fetchRecommendProductStartActionCreator());
//         try {
//             const { data } = await axios.get("https://www.fastmock.site/mock/54f43825069a78e8a8ae8de52f4e5fce/api/productCollections");
//             dispatch(fetchRecommendProductSuccessActionCreator(data));
//         } catch (error) {
//             const u = error as CatchType;
//             dispatch(fetchRecommendProductFailActionCreator(u.message));
//         }
//     }

export const giveMeDataActionCreator = (): ThunkAction<void, RootState, unknown, RecommendProductAction
> => async (dispatch, getState) => {
    dispatch(fetchRecommendProductStartActionCreator());
    try {
        const { data } = await axios.get("https://www.fastmock.site/mock/54f43825069a78e8a8ae8de52f4e5fce/api/productCollections");
        dispatch(fetchRecommendProductSuccessActionCreator(data));
    } catch (error) {
        const u = error as CatchType;
        dispatch(fetchRecommendProductFailActionCreator(u.message));
    }
}