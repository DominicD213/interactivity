import React from "react";
import Header from "./sections/header";
import Examples from "./sections/examples";
import CoreConcepts from "./sections/CoreConcepts";

function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
//{CORE_CONCEPTS.map((item)=> <li><MainOBJ key={item.title}{...item}/></li>)}
//CORE_CONCEPTS is the list of data that we are calling upon and the .map function
//maps or treverses threw all of the differnt elements in the list
//(item) is a name that can be what ever you like it to be, it basically just gives a name to list item ex:list[0]
//the item is then passed into a li tag then the MianObJ object in the MainOBJ for map to work properly you must
//pass in a key or unigue identifier.
// ... in js tell the computer to map threw every item if there is nested item in a list.
