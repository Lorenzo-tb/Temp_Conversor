let input = document.querySelector("input");
let btn = document.querySelectorAll("button");

let telaum = document.querySelector("#resultum");
let teladois = document.querySelector("#resultdois");
let telatres = document.querySelector("#resulttres");
let telaquatro = document.querySelector("#resultquatro");

let p = document.querySelector("#primeira");

let opcum = document.querySelectorAll("option");



let click;

        btn.forEach((btns)=>{
            btns.addEventListener("click", (e)=>{
            let butao = e.target.innerHTML;
            let total = parseFloat(input.value);
                    switch(butao){
                    case "Celsius":
                    telaum.textContent = total;
                    teladois.innerHTML = ((total * 9/5) + 32).toFixed(2);
                    telatres.innerHTML = total * 9/5 + 491.67;
                    telaquatro.innerHTML = total + 273.15;
                    break;
            
                    case "Fahrenheit":
                    telaum.innerHTML = (total - 32) * 5/9;
                    teladois.innerHTML = total;
                    telatres.innerHTML = total +459.67;
                    telaquatro.innerHTML = (total - 32) * 5/9 + 273.15;
                    break;

                    case "Rankine":
                    telaum.innerHTML = (total - 491.67) * 5/9;
                    teladois.innerHTML = total - 459.67;
                    telatres.innerHTML = total;
                    telaquatro.innerHTML = total *5/9;
                    break;

                    case "Kelvin":
                    telaum.innerHTML = total - 273.15;
                    teladois.innerHTML = (total - 273.15) * 9/5 + 32;
                    telatres.innerHTML = total * 1.8;
                    telaquatro.innerHTML = total;
                    break;
                    }
                })
        })

    


