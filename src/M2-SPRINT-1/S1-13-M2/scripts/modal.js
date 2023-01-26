function handleModal() {
  const buttonModal = document.querySelector(".btn-cadastrar");
  buttonModal.addEventListener("click", openModal);
}

function openModal() {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.showModal();

  closeModal();
}

function closeModal() {
  const buttonCloseModal = document.querySelector(".close-modal");
  const modalContainer = document.querySelector(".modal-container");
  buttonCloseModal.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();
