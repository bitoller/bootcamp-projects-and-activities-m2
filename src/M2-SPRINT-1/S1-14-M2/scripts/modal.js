function handleModal() {
  const buttonHeader = document.querySelector("#openModalHeader");
  const buttonMain = document.querySelector("#openModalMain");
  buttonHeader.addEventListener("click", openModal);
  buttonMain.addEventListener("click", openModal);
}

function openModal() {
  const modalContainer = document.querySelector("#modalContainer");
  modalContainer.showModal();

  closeModal();
}

function closeModal() {
  const buttonCloseModal = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalContainer");
  buttonCloseModal.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();
