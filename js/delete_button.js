export let deleteButton = () => {
    let deleteButton = document.querySelector('.button-delete');
    let display = document.querySelector('.display');
    let close = document.querySelector('.cuestion-close');
    let closeButton = document.querySelector('.close-button');
    
    if (deleteButton){

        deleteButton.addEventListener('click', () => {
            display.classList.toggle("active");
        });
        
        close.addEventListener('click', () => {
            display.classList.remove("active");
        });

        closeButton.addEventListener('click', () => {
            display.classList.remove("active");
        });

    }

}