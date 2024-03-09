const input = document.querySelector(".type");
const black = document.querySelector(".black");
const overflow = document.querySelector(".overflow");

class 스타 {
  constructor() {
    this.star = document.createElement("div");
    const height = window.innerHeight;
    const width = window.innerWidth;
    this.star.className = "star";
    console.log(height);
    black.appendChild(this.star);
    this.star.style.top = Math.random() * height + "px";
    this.star.style.right = Math.random() * width + "px";
    this.star.style.animationDelay = Math.random() * 3 + "s";
    this.star.style.animationDuration = Math.random() * 6 + 1 + "s";
  }
}

for (var a = 0; a < 60; a++) {
  new 스타();
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const 새로운투두 = new 투두();
    overflow.appendChild(새로운투두.bigbox);
    input.value = "";
  }
});

class 투두 {
  constructor() {
    this.isclick = false;
    this.bigbox = document.createElement("div");
    this.bigbox.className = "bigbox";
    this.checkbox = document.createElement("input");
    this.checkbox.type = "checkbox";
    this.checkbox.className = "size";
    this.valuebox = document.createElement("div");
    this.valuebox.className = "text";
    this.valuebox.innerText = input.value;
    this.Xbox = document.createElement("button");
    this.Xbox.className = "xbox";
    this.Xbox.innerText = "X";
    this.bigbox.appendChild(this.checkbox);
    this.bigbox.appendChild(this.valuebox);
    this.bigbox.appendChild(this.Xbox);
    this.checkbox.addEventListener("click", () => {
      if (this.isclick === false) {
        this.valuebox.className = "cancel";
        this.isclick = true;
      } else if (this.isclick === true) {
        this.valuebox.className = "text";
        this.isclick = false;
      }
    });
    this.Xbox.addEventListener("click", () => {
      overflow.removeChild(this.bigbox);
    });
  }
}
