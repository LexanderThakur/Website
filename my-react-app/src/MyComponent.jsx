import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();

  const [comment, setComment] = useState("");
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity : {quantity}</p>
      <textarea
        name=""
        value={comment}
        onChange={handleCommentChange}
        id=""
        placeholder="wasup"
      ></textarea>
      <p>Comment : {comment}</p>
    </div>
  );
}

// function MyComponent() {
//   let [name, setName] = useState("Jhon");

//   const updateName = () => {
//     setName("Spongebob");
//   };
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <button onClick={updateName}>Set Name</button>
//     </div>
//   );
// }

export default MyComponent;
