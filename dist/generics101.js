"use strict";
/*
 * Generics 101:
 * Following: https://www.youtube.com/watch?v=nViEqpgwxHE
 */
console.log("Lets Learn Generics!");
//  NumArrayType1 === NumArrayType2
const array = [1, 2, 3];
const last_Reg = (arr) => {
    return arr[arr.length - 1];
};
last_Reg([1, 2]); // Hovering: TS knows that this func returns a number
/* HOVER: const last_Reg: (arr: Array<number>) => number */
// last_Reg(['a', 'b']) // TS throws a type error
/* HOVER: Type 'string' is not assignable to type 'number'. */
// Bypass:
const last_Any = (arr) => {
    return arr[arr.length - 1];
};
last_Any([1, 2]); // Hovering: TS knows that this func returns anything
/* HOVER: const last_Any: (arr: Array<any>) => any */
last_Any(["a", "b"]); // Therefore, we lose our type saftey.
/* HOVER: const last_Any: (arr: Array<any>) => any */
// //////////////////////////////////////////////////////////////////////////
// LESSON 1]. How can generics help?
// //////////////////////////////////////////////////////////////////////////
const last_Gen = (arr) => {
    return arr[arr.length - 1];
};
last_Gen([1, 2]); // TS Can now infer the return
/* HOVER: const last_Gen: <number>(arr: number[]) => number */
last_Gen(["a", "b"]); // Therefore, we don't lose our type saftey.
/* HOVER: const last_Gen: <string>(arr: string[]) => string */
// Note: I can replace "T" with anything.
//  Its essentially a varible name, declared after the equals sign.
const Array_Generics = (arr) => {
    return arr[arr.length - 1];
};
Array_Generics([1, 2]);
/* HOVER: const Array_Generics: <number>(arr: number[]) => number */
Array_Generics(["a", "b"]);
/* HOVER: const Array_Generics: <string>(arr: string[]) => string */
// I may also override the inferance:
Array_Generics([true, false]);
/* HOVER: const Array_Generics: <boolean>(arr: boolean[]) => boolean */
// //////////////////////////////////////////////////////////////////////////
// LESSON 2]. Multiple Generics & Strict Returns
// //////////////////////////////////////////////////////////////////////////
const twoElems_Gen = (x, y) => {
    return [x, y];
};
twoElems_Gen(1, 2);
/* HOVER: const twoElems_Gen: <number, number>(x: number, y: number) => number[]*/
twoElems_Gen("a", true);
/* HOVER: const twoElems_Gen: <string, boolean>(x: string, y: boolean) => (string | boolean)[]*/
// But What if my goal was to make Tuples?
//  I'd need to specify the return value.
const makeTuples = (x, y) => {
    return [x, y];
};
makeTuples(1, 2);
/* HOVER: const makeTuples: <number, number>(x: number, y: number) => [number, number]*/
// I may also Override my inferenaces. BUT it will require me to do both, not 1.
makeTuples("a", true);
/* HOVER: const makeTuples: <string, boolean | null>(x: string, y: boolean | null) => [string, boolean | null]*/
// [video: Paused at 10:10]
// //////////////////////////////////////////////////////////////////////////
// LESSON 3]. Extending
// //////////////////////////////////////////////////////////////////////////
const makeFullName_Reg = (obj) => {
    return `${obj.fName} ${obj.lName}`;
};
// Now what if there were other properties on obj idk?
const makeFullName_Gen = (obj) => {
    return `${obj.fName} ${obj.lName}`;
};
// const fname1 = makeFullName_Reg({ fName: 'bob', lName: 'doe', age: 3}) // Throws error
const fname2 = makeFullName_Gen({ fName: "bob", lName: "doe", age: 3 });
// This is ideal when I want to create different types using a "base" that takes generic types
/*
Data2<number> === {
  name: string;
  date: number;
}
*/
// [Paused at 15:50]
// //////////////////////////////////////////////////////////////////////////
// LESSON 5]. Props
// //////////////////////////////////////////////////////////////////////////
// READ Generics102.tsx
