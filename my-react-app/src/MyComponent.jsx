import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car objects</h2>

      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

// function MyComponent() {
//   const [foods, setFoods] = useState(["apple", "orange", "banana"]);
//   function handleAddFood() {
//     const newFood = document.getElementById("foodInput").value;

//     document.getElementById("foodInput").value = "";

//     setFoods((f) => [...f, newFood]);
//   }
//   function handleRemoveFood(index) {
//     setFoods(foods.filter((_, i) => i !== index));
//   }
//   return (
//     <div>
//       <h2>List of Food</h2>
//       <ul>
//         {foods.map((food, index) => (
//           <li key={index} onClick={() => handleRemoveFood(index)}>
//             {food}
//           </li>
//         ))}
//       </ul>
//       <input type="text" id="foodInput" placeholder="Enter food name" />
//       <button onClick={handleAddFood}> Add Food</button>
//     </div>
//   );
// }

// function MyComponent() {
//   const [car, setCar] = useState({
//     year: 2024,
//     make: "Ford",
//     model: "Ferrari",
//   });

//   function handleYearChange(event) {
//     setCar((c) => ({ ...c, year: event.target.value }));
//   }
//   function handleMakeChange(event) {
//     setCar({ ...car, make: event.target.value });
//   }

//   function handleModelChange(event) {
//     setCar({ ...car, model: event.target.value });
//   }

//   return (
//     <div>
//       <p>
//         Your Fav car is: {car.year} {car.make} {car.model}{" "}
//       </p>
//       <input type="number" value={car.year} onChange={handleYearChange} />
//       <br />
//       <input type="text" value={car.make} onChange={handleMakeChange} />
//       <br />
//       <input type="text" value={car.model} onChange={handleModelChange} />
//     </div>
//   );
// }

// function MyComponent() {
//   const [name, setName] = useState("Guest");
//   const [quantity, setQuantity] = useState();

//   const [comment, setComment] = useState("");
//   function handleCommentChange(event) {
//     setComment(event.target.value);
//   }

//   function handleQuantityChange(event) {
//     setQuantity(event.target.value);
//   }
//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <p>Name: {name}</p>

//       <input value={quantity} onChange={handleQuantityChange} type="number" />
//       <p>Quantity : {quantity}</p>
//       <textarea
//         name=""
//         value={comment}
//         onChange={handleCommentChange}
//         id=""
//         placeholder="wasup"
//       ></textarea>
//       <p>Comment : {comment}</p>
//     </div>
//   );
// }

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
