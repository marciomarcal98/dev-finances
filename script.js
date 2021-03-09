const Modal = {
  open(){
    //Abrir modal - adicionar classe active.
    document
      .querySelector('.modal-overlay')
      .classList.add('active')
  },
  close(){
    //fechar o modal - remover classe active
    document 
      .querySelector('.modal-overlay')
      .classList.remove('active')
  }
}