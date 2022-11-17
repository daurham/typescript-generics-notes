//
// //////////////////////////////////////////////////////////////////////////
// LESSON 5]. Props
// //////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";

type Props = {
  name: string;
};

// export default function generics102({ name }: Props) { // Non-generics
export const Lesson5: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};

//
// //////////////////////////////////////////////////////////////////////////
// LESSON 6]. Props
// //////////////////////////////////////////////////////////////////////////

type Props2 = {
  name: string;
  fullname: string;
};

export const Lesson6: React.FC<Props2> = ({ name, fullname }) => {
  const [input, setInput] = useState(name);
  console.log(input === ""); // true
  console.log(input === null); // false

  // Now what if "name" may be another value?
  //  We can use generics to take that into account

  const [input2, setInput2] = useState<string | null>(fullname);
  console.log(fullname === ""); // Maybe true? maybe not.
  console.log(fullname === null); // Maybe true? maybe not.

  return <div>{name}</div>;
};

//
// //////////////////////////////////////////////////////////////////////////
// LESSON 7]. JSX
// //////////////////////////////////////////////////////////////////////////
// Covered at 19:50
interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

export const Lesson7: React.FC<Props2> = () => {
  return (
    <div>
      <Form values={"stringValue"}>{(str) => <div>{str}</div>}</Form>
    </div>
  );
};
// ////////////////////////////////////////
// So whats going on here?
// ////////////////////////////////////////
// Reimagine what we're looking at:

// ./Form.tsx
interface FormProps2<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form2 = <T extends {}>({ values, children }: FormProps2<T>) => {
  return children(values);
};

// ./App.tsx
// import Form2 from './Form';

export const Lesson7_Explained = () => {
  return (
  <div>
    <Form values={'stringValue'}>
      {(str) => (
        <div>{str}</div>
      )}
    </Form>
  </div>
  );
};
// We've affectively created a functional component that can contain 
//  JSX elements & can dynmically accept whatever values that're passed into it. 

//  Which can also be overwritten -- forcing a specific type.
export const Lesson7_Overwritten = () => {
  return (
  <div>
    <Form<number> values={20}>
      {(n) => (
        <div>{n}</div>
      )}
    </Form>
  </div>
  );
};

// WHY? I dont completely understand myself just yet. BUT, review the video clip 
//  at a later date and update me here.

// Congrats, youve learned Typescript Generics MY GUY !