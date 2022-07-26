export let addIva = () => {
    
    let addIva = document.querySelector('.add-iva');
    let  displayIvaAdd = document.querySelector('.display-iva-add');
    let closeIva = document.querySelector('.close-iva');
    let buttonIvaClose = document.querySelector('.button-iva-close');
    if (addIva){

        addIva.addEventListener('click', () => {
            displayIvaAdd.classList.toggle("active");
        });
          
           closeIva.addEventListener('click', () => {
            displayIvaAdd.classList.remove("active");
             });
        
             buttonIvaClose.addEventListener('click', () => {
            displayIvaAdd.classList.remove("active");
        });
        
    }

}