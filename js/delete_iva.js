export let deleteIva = () => {
    
    let deleteIvas = document.querySelectorAll('.trash-button');
    let  displayIvaDelete = document.querySelector('.display-iva-delete');
    let closeIvas = document.querySelectorAll('.close-iva');
    let buttonIvaCloses = document.querySelectorAll('.button-iva-close');

    if (deleteIvas){

        deleteIvas.forEach(deleteIva => {
            deleteIva.addEventListener('click', () => {
                displayIvaDelete.classList.toggle("active");
            });
        })

       
          
        closeIvas.forEach(closeIvaEdit => {

            closeIvaEdit.addEventListener('click', () => {
                displayIvaDelete.classList.remove("active");
            });
        })
           
        buttonIvaCloses.forEach(buttonIvaClose => {

            buttonIvaClose.addEventListener('click', () => {
                displayIvaDelete.classList.remove("active");
            });
        })
        
    }

}