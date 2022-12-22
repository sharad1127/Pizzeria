import {createSelector} from "reselect"

const cartSelector = (state) => state.carts
export const getCart = createSelector([cartSelector],(state)=>{
    return state.list.sort((a,b)=> a.id -b.id)
})

export const getSubtotal = createSelector([cartSelector],(state)=>state.subtotal)

export const getCount = createSelector([cartSelector],(state)=>state.count)

