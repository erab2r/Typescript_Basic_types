type AreaofNum = {
    height : number;
    width : number;
};
// type AreaofString = {
//     height : string;
//     width : string;
// };

type h = AreaofNum["height"];

// type AreaofString = {
//     [key in "height" | "width"] : string;
// }

// type AreaofString = {
//     [key in "height" | "width"] : boolean;
// }

// type AreaofString = {
//     [key in keyof AreaofNum] : boolean;
// }

type Area<T> = {
    [key in keyof T] : T[key];
}

const area1 : Area<{height : string; width : number}> ={
    height : '50',
    width : 50,
}