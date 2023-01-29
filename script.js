const box = document.querySelector(".container");
const btn = document.querySelector("button");
const palete1 = document.querySelector(".palete1");
const palete2 = document.querySelector(".palete2");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");

let a;
function gradientBackground(){

    function random_color(a) {
        let h = Math.floor(Math.random() * 361);
        let s = Math.floor(Math.random() * 101);
        let l = Math.floor(Math.random() * 101);
        a += "hsl(" + h + "," + s + "%," + l + "%)";
        console.log(a);
        return a;
    }
    
    let color1 = random_color('');
    let color2 = random_color('');

    const gradient = "linear-gradient(to left" + ", " + color1 + ", " + color2 + ")";
    box.style.background = gradient;
    palete1.innerHTML = color1;
    value1.style.background = color1;
    palete2.innerHTML = color2;
    value2.style.background = color2;

    console.log(color1);
    console.log(color2);

}

btn.addEventListener("click", gradientBackground); 
