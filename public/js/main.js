const deleteText = document.querySelector('.fa-trash')

Array.from(deleteText).forEach((element) => {
    element.addEventListener('click', deletePlugin)
})

async function deletePlugin() {
    const pluginName = this.parentNode.childNodes[1].innerText
    const companyName = this.parentNode.childNodes[3].innerText
    const linkName = this.parentNode.childNodes[5].innerText
    try {
        const response = await fetch('deletePlugin', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'nameS': pluginName,
                'companyS': companyName,
                'linkS': linkName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}