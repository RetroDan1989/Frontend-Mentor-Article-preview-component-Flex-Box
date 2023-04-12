const share_button = document.querySelector(".share-button");

const share_options = document.querySelector(".share-options");

let share_states = false;


share_button.addEventListener("click", () => {
    if(share_states==false) {
        share_options.classList.add("active");
        share_states = true;

        console.log("Hola adelita sapuda");
    }
    else {
        share_options.classList.remove("active");
        share_states = false;

        console.log("Hola reyes");
    }
});