import {createSelector} from "reselect"



const itemSelector = (state) => state.items.list.results

export const getItem = createSelector([itemSelector],(state)=>state) 