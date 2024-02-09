document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.querySelector(".accept");
  const yesntButton = document.querySelector(".acceptnt");
  const nextButton = document.querySelector(".next-button");
  const offersDiv = document.querySelector(".benefits");
  const gifBubu = document.querySelector(".gif");
  const offers = [
    ["A loving boyfriend", "./src/images/bubu.gif"],
    ["A loyal boyfriend", "./src/images/bubu2.gif"],
    ["A 911 Gt3 Rs", "./src/images/porschh.png"],
    ["A 2024 BMW m5", "./src/images/bmwm5.jpg"],
    ["A boyfriend that won't cheat on you (100%)", "./src/images/bubu3.gif"],
    ["I'd let you stack donuts ontop of it", "./src/images/donuttt.gif"],
    ["I'd let you put a bow tie on it", "./src/images/tie.gif"],
    ["I'd scream if another woman talks to me", "./src/images/bubu4.gif"],
  ];
  const holyMoly = new Audio("./src/sounds/holymoly.mp3");
  const yay = new Audio("./src/sounds/yay.mp3");
  const another = new Audio("./src/sounds/anotherone.mp3");
  let offersIndex = 1;
  offersDiv.innerHTML = offers[0][0];
  gifBubu.src = offers[0][1];

  nextButton.addEventListener("click", () => {
    offersDiv.innerHTML = offers[offersIndex][0];
    gifBubu.src = offers[offersIndex][1];
    offersIndex++;
    if (offersIndex === offers.length) {
      offersIndex = 0;
    }
    another.currentTime = 0;
    another.play();
  });

  yesButton.addEventListener("click", () => {
    yay.play();
    document.querySelector(".main").innerHTML = `
      <h1 class="request">! I LOVE YOU  !</h1>
      <div class="success">
        <img class="gif" src="./src/images/success1.gif" />
        <img class="gif" src="./src/images/success2.gif" />
        <img class="gif" src="./src/images/success3.gif" />
        <img class="gif" src="./src/images/success4.gif" />
        <img class="gif" src="./src/images/success5.gif" />
      </div>
    `;
  });

  yesntButton.addEventListener("click", (event) => {
    const computedStyle = window.getComputedStyle(event.target);
    const currentWidth = parseFloat(computedStyle.width);
    const currentHeight = parseFloat(computedStyle.height);

    const newWidth = currentWidth / 2;
    const newHeight = currentHeight / 1.3;

    // Set the new width and height with units
    event.target.style.width = newWidth + "px";
    event.target.style.height = newHeight + "px";
    event.target.style.fontSize = `${newWidth / 5}px`;
    holyMoly.currentTime = 0;
    holyMoly.play();
    if (newWidth < 10 || newHeight < 10) {
      event.target.remove();
    }
  });
});
