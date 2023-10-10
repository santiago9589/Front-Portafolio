import { call, put, takeLatest } from 'redux-saga/effects';
// import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../../types/product';
import { api} from "./../../../api/mock/api"
import {FAIL_PROSS_PRODUCT, PROSS_GET_PRODUCT} from "../../redux/sliceProducts"

function* getProductData() {
    try {
        const data :Product[] = yield call(api.getAllProductsMock)
        yield put(PROSS_GET_PRODUCT(data))
    } catch (error) {
        yield put(FAIL_PROSS_PRODUCT("Hubo un error"))
    }
}

export function* mySagaGetProduct() {
    yield takeLatest('productState/START_GET_PRODUCT', getProductData);
  }