import React from "react";
interface obj {
  name: string;
  age: number;
}

const Component = (props: obj) => {
  return (
    <div>
      {props.name} - {props.age} y.o
    </div>
  );
};

export default Component;
