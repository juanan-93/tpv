export let buyButton = () =>{

    let buy = document.querySelector('.button-buy');
    let display = document.querySelector('.display-payment');
    let closes = document.querySelectorAll('.cuestion-close');
    let closeButton = document.querySelector('.close-button-payment');
    
    if(buy){

        buy.addEventListener('click', () => {
            display.classList.toggle("active");
        });

        closes.forEach(close => {
            close.addEventListener('click', () => {
                display.classList.remove("active");
            });
        })
       
        closeButton.addEventListener('click', () => {
            display.classList.remove("active");
        });

    }

}