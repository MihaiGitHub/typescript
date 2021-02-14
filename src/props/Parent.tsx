import { ChildAsFC } from "./Child";

// everything inside the component tags will br provided to the Child component
// as a props called children (this is a feature in React)
const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("click")}>
      This text will show up as children in ChildAsFC component
    </ChildAsFC>
  );
};

export default Parent;
