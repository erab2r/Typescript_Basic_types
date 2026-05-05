const createGenericwithArray = <T>(value: T) =>{
    return [value];
}

const arrString = createGenericwithArray("Apple");
const arrNum = createGenericwithArray(21);
