import {createSelector} from "reselect"



const orderSelector = (state) => state.orders.list.results

export const getOrder = createSelector([orderSelector],(state)=>state) 