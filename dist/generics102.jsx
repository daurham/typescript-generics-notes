"use strict";
//
// //////////////////////////////////////////////////////////////////////////
// LESSON 5]. Props
// //////////////////////////////////////////////////////////////////////////
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson7_Overwritten = exports.Lesson7_Explained = exports.Lesson7 = exports.Lesson6 = exports.Lesson5 = void 0;
const react_1 = __importStar(require("react"));
// export default function generics102({ name }: Props) { // Non-generics
const Lesson5 = ({ name }) => {
    return <div>{name}</div>;
};
exports.Lesson5 = Lesson5;
const Lesson6 = ({ name, fullname }) => {
    const [input, setInput] = (0, react_1.useState)(name);
    console.log(input === ""); // true
    console.log(input === null); // false
    // Now what if "name" may be another value?
    //  We can use generics to take that into account
    const [input2, setInput2] = (0, react_1.useState)(fullname);
    console.log(fullname === ""); // Maybe true? maybe not.
    console.log(fullname === null); // Maybe true? maybe not.
    return <div>{name}</div>;
};
exports.Lesson6 = Lesson6;
const Form = ({ values, children }) => {
    return children(values);
};
const Lesson7 = () => {
    return (<div>
      <Form values={"stringValue"}>{(str) => <div>{str}</div>}</Form>
    </div>);
};
exports.Lesson7 = Lesson7;
const Form2 = ({ values, children }) => {
    return children(values);
};
// ./App.tsx
// import Form2 from './Form';
const Lesson7_Explained = () => {
    return (<div>
    <Form values={'stringValue'}>
      {(str) => (<div>{str}</div>)}
    </Form>
  </div>);
};
exports.Lesson7_Explained = Lesson7_Explained;
// We've affectively created a functional component that can contain 
//  JSX elements & can dynmically accept whatever values that're passed into it. 
//  Which can also be overwritten -- forcing a specific type.
const Lesson7_Overwritten = () => {
    return (<div>
    <Form values={20}>
      {(n) => (<div>{n}</div>)}
    </Form>
  </div>);
};
exports.Lesson7_Overwritten = Lesson7_Overwritten;
// WHY? I dont completely understand myself just yet. BUT, review the video clip 
//  at a later date and update me here.
// Congrats, youve learned Typescript Generics MY GUY !
