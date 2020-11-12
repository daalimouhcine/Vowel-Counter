//Creat Varibles
const input = document.querySelector("#text");
const submit = document.querySelector("#submit");
const body = document.querySelector("body");


//Creat Events 
submit.addEventListener("click",calculVowels);


//Creat functions
function calculVowels (e) {
    e.preventDefault();

    if(input.value !== "") {
        let numVowels = 0;
        let text = input.value;

        text = text.split("");
        text.forEach(function(item) {
            switch(item) {
                case "a":
                case "e":
                case "u":
                case "i":
                case "o":
                    numVowels++;
                    break;
                
                default:
                    numVowels = numVowels;
                    break;
            };
        });
        const container = document.createElement("div");
        container.classList.add("container");
        const div = document.createElement("div");
        const btn = document.createElement("button");
        const p = document.createElement("p");

        btn.innerHTML = '<i class="fas fa-times"></i>';
        p.innerText = `There ar ${numVowels} vowels!`;

        //Append elements
        body.appendChild(container);
        container.appendChild(div);
        div.appendChild(btn);
        div.appendChild(p);

        input.value = "";

        btn.addEventListener("click",deleteMessage);
    }
}

function deleteMessage(e) {
    const parent = e.target.parentNode.parentNode.parentNode;

    if(parent.classList[0] === "container") 
        parent.remove();
    

}