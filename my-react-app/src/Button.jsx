function Button() {
  // const handleClick = () => console.log("ouch");

  const handleClick = (e) => (e.target.textContent = "OUCH!");

  const handleClick2 = (name) => console.log(`${name} fuck u`);
  return <button onClick={(e) => handleClick(e)}>Click me</button>;
}

// function Button() {
//   const styles = {
//     backgroundColor: "hsl(200, 100%, 50%)",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//   };

//   return (
//     <>
//       <button style={styles}>Click me</button>
//     </>
//   );
// }
export default Button;
