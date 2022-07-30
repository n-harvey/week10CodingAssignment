let itemID = 0

function addItem(item, quantity) {
    let table = document.getElementById('list')
    let row = table.insertRow(1)
    row.setAttribute('id', `item-${itemID}`)
    row.insertCell(0).innerHTML = item
    row.insertCell(1).innerHTML = quantity
    row.insertCell(2).appendChild(createDeleteButton(itemID++))
}


document.getElementById('additem').addEventListener('click', () => {
    if(document.getElementById('item').value == '' || document.getElementById('quantity').value == ''){
        alert(`Please enter an item and quantity`)
    }
    else{
    let item = document.getElementById('item').value
    let quantity = document.getElementById('quantity').value
    addItem(item, quantity)
    document.getElementById('item').value = ''
    document.getElementById('quantity').value = ''
    }
})

function createDeleteButton(itemID){
    let removeButton = document.createElement('button')
    removeButton.className = 'btn btn-danger'
    removeButton.id = itemID
    removeButton.innerHTML = 'Remove'
    removeButton.onclick = () =>{
        let removeItem = document.getElementById(`item-${itemID}`)
        removeItem.parentNode.removeChild(removeItem)
    }
    return removeButton
}