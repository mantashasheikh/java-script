document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});


document.getElementById("box").addEventListener("dblclick", () => {
  alert("Box double-clicked!");
});


document.getElementById("name").addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});
