const sqrt = (n : number): number | undefined => {
    if( typeof n === "undefined" || n === null){
        return  undefined
    }
    if(typeof n !== "number"){
        return undefined
    }
    return Math.sqrt(n)
}

export default sqrt
