import { createSlice } from "@reduxjs/toolkit"
import {Product} from "./../../types/product"
import type { PayloadAction } from '@reduxjs/toolkit'


interface productState {
    products: Product[],
    initialProduct: Product,
    productSelected:Product,
    errors:string,
    filterProducts: Product[]
}

const initialAppState: productState = {
    products: [],
    filterProducts: [],
    initialProduct: {
        name: "",
        description: "",
        quantityStock: 5,
        id: 0,
        pictureProduct: "",
        price:5000
    },
    productSelected: {
        name: "",
        description: "",
        quantityStock: 0,
        id: 0,
        pictureProduct: "",
        price:0
    },
    errors:""
}


const productSlice = createSlice({
    name: "productState",
    initialState: initialAppState,
    reducers: {
        START_GET_PRODUCT(state) {
            state
        },
        PROSS_GET_PRODUCT(state, action: PayloadAction<Product[]>) {
            state.products = action.payload
            state.filterProducts = action.payload
        },
        PROSS_ADD_PRODUCT(state, action: PayloadAction<Product>) {
            state
            action
        },
        PROSS_UPDATE_PRODUCT(state, action: PayloadAction<{ id: number, Product: Product }>) {
            state
            action
        },
        PROSS_DELETE_PRODUCT(state, action: PayloadAction<{ id: number }>) {
            state
            action
        },
        PROSS_INITIAL_PRODUCT(state, action: PayloadAction<Product>) {
            state.initialProduct = action.payload
        },
        PROSS_WATHC_PRODUCT_DETAILS(state, action: PayloadAction<Product>) {
            state.productSelected = action.payload
        },
        FINISH_WATHC_PRODUCT_DETAILS(state, action: PayloadAction<Product>) {
            state.productSelected = action.payload
        },

        FAIL_PROSS_PRODUCT(state, action: PayloadAction<string>) {
            state.errors=action.payload
        },
        PROSS_FILTER_LIST_PRODUCT(state, action: PayloadAction<string>) {
            state.filterProducts = state.products.filter((product)=>{
                return product.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
            })
        },

    }
})
export const { PROSS_FILTER_LIST_PRODUCT,FAIL_PROSS_PRODUCT,PROSS_WATHC_PRODUCT_DETAILS,FINISH_WATHC_PRODUCT_DETAILS,START_GET_PRODUCT,PROSS_ADD_PRODUCT,PROSS_DELETE_PRODUCT,PROSS_GET_PRODUCT,PROSS_INITIAL_PRODUCT,PROSS_UPDATE_PRODUCT } = productSlice.actions
export default productSlice.reducer