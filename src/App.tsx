import React from "react"
import Counter from "./compter";
type GreetingType = {
  name : string;
}
const  GreetingType = { name: "string", };

const Greeting: React.FC<GreetingType> = (props) => {
   return  <p>Hello, {props.name}</p>;
   
   };

export const App: React.FC = () => {
  return (
     <>
       <div>
      <Greeting name="ibou"/>
      <p>bonjour j'ai trouver la solution</p>
      <Counter />
    </div>
     </>
  
  );
};
export default App;





