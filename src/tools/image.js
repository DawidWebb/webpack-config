import image6 from "../images/image6.jpg";

export default (tag) => {
  const img = document.createElement("img");
  img.src = image6;
  document.querySelector(tag).appendChild(img);
};
