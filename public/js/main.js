const deleteText = document.querySelector('.fa-trash')

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deletePlugin)
})