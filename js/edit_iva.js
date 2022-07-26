export let editIva = () => {
    
    let editIvas = document.querySelectorAll('.edit-button');
    let  displayIvaedit = document.querySelector('.display-iva-edit');
    let closeIvas = document.querySelectorAll('.close-iva');
    let buttonIvaCloses = document.querySelectorAll('.button-iva-close');

    if (editIva){

        editIvas.forEach(editIva => {

            editIva.addEventListener('click', () => {
                displayIvaedit.classList.toggle("active");
            });

        });

      
        closeIvas.forEach(closeIvaEdit => {

            closeIvaEdit.addEventListener('click', () => {
                displayIvaedit.classList.remove("active");
            });
        })
           
        buttonIvaCloses.forEach(buttonIvaClose => {

            buttonIvaClose.addEventListener('click', () => {
                displayIvaedit.classList.remove("active");
            });
            
        })
        
    }

}