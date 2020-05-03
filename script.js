class Slider {
    constructor(nameClass, nameStyle) {
        this.nameClass = nameClass;
        this.nameStyle = nameStyle;

        this.img = document.querySelector('img');
        this.arrowLeft = document.querySelector(".arrowLeft");
        this.arrowRight = document.querySelector(".arrowRight");
        this.span = document.querySelector("span");
        this.numberDiv = document.querySelector(".number");
        this.number = 1
        this.start = () => {
            this.arrowLeft.classList.add("deactive");
            this.arrowLeft.style.pointerEvents = "none";
        }

        this.nextSlide = () => {
            console.log(this.nextSlide)
        this.arrowRight.classList.remove("deactive");
        this.arrowLeft.classList.remove("deactive");
        this.arrowLeft.style.pointerEvents = "initial";
        this.arrowRight.style.pointerEvents = "initial";
        this.number++
    
        if(this.number >= 5) {
            this.number = 5
            this.arrowRight.classList.add("deactive");
            this.arrowRight.setAttribute("disabled", true);
            this.arrowRight.style.pointerEvents = "none";
        }
    
        this.img.src=`./img/${this.number}.jpg`;
    
        this.numberDiv.innerHTML = `${this.number}/5`
    }

    this.arrowRight.addEventListener("click", this.nextSlide);


    /////////////Back
    this.backSlide = () => {
        console.log(this.backSlide)
    this.arrowLeft.classList.remove("deactive");
    this.arrowRight.classList.remove("deactive");
    this.arrowRight.style.pointerEvents = "initial";
    this.arrowLeft.style.pointerEvents = "initial";
    this.number--

    if(this.number <= 1) {
        this.number = 1
        this.arrowLeft.classList.add("deactive");
        this.arrowLeft.setAttribute("disabled", true);
        this.arrowLeft.style.pointerEvents = "none";
    }

    this.img.src=`./img/${this.number}.jpg`;

    this.numberDiv.innerHTML = `${this.number}/5`
}

this.arrowLeft.addEventListener("click", this.backSlide);
}
    
}



const start = new Slider("deactive", "none")
start.start()
