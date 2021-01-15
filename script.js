document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
};

const setMovingLabel = (identifier) => {
  document.querySelector(`#${identifier}_label`).classList = "selectedLocation";
  document.querySelector(`#${identifier}`).classList = "inputSelected";
};

const removeMovingLabel = (identifier) => {
  document.querySelector(`#${identifier}_label`).classList = "";
  document.querySelector(`#${identifier}`).classList = "";
};

document.querySelector("#password").onblur = (e) => {
  if (e.target.value === "") removeMovingLabel("password");
};
document.querySelector("#password").onfocus = () => setMovingLabel("password");

document.querySelector("#email").onblur = (e) => {
  if (e.target.value === "") removeMovingLabel("email");
};
document.querySelector("#email").onfocus = () => setMovingLabel("email");
