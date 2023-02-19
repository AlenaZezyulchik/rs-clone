export const createTestPage = () => {
  const main = document.querySelector(".container__main") as HTMLDivElement;
  const divContainer = document.createElement("div") as HTMLDivElement;
  const div1 = document.createElement("div") as HTMLDivElement;
  for(let i = 0; i < 5; i++) {
    const div11 = document.createElement("div") as HTMLDivElement;
    div11.style.width = "50px";
    div11.style.height = "50px";
    div11.style.backgroundColor = "rgb(140, 128, 255)"
    div1.append(div11);
  }
  divContainer.classList.add("main-div");
  div1.classList.add("div1");
  divContainer.append(div1);
  main.append(divContainer);

  return divContainer;
};
