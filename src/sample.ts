const power = (n? : number) : number | undefined => {
    if( typeof n === "undefined" || n === null){
        return  undefined
    }
    if(typeof n !== "number"){
        return undefined
    }
    return Math.pow(n, 2)
}

export default power
