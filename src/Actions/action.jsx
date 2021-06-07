export const incNum = (num) =>{
    return{
        type: "INCREAMENT",
        payload: num
    }
}
export const decNum = (num) =>{
    return{
        type: "DECREAMENT",
        payload: num
    }
}