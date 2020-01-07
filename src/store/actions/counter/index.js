import * as actionTypes from '../../actionTypes/counter';

export const incrementCounter = () => ({type:actionTypes.INCREMENT})

export const decrementCounter = () => ({type:actionTypes.DECREMENT})

export const addCounter = (payload) => ({type:actionTypes.ADD,payload})

export const subtractCounter = (payload) => ({type:actionTypes.SUBTRACT,payload})

export const resetCounter = (payload) => ({type:actionTypes.RESET})

