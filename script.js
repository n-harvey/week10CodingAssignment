//itemID is an indentify to allow tracking of items added into the list

let itemID = 0


//addItem function takes an input of item and quantity from the input
//adds item and quantity into the grocery list
//adds a remove button to the end of the row to remove items

function addItem(item, quantity) {
    let table = document.getElementById('list')
    let row = table.insertRow(1)
    row.setAttribute('id', `item-${itemID}`)
    row.insertCell(0).innerHTML = item
    row.insertCell(1).innerHTML = quantity
    row.insertCell(2).appendChild(createDeleteButton(itemID++))
}

//Eventlistener for the add item button
//takes the values of the item and quantity inputs and checks if they are empty
//if empty alert out values are needed
//then checks if items are already in list using checkItems() function
//if items already exist in list createAlert() is called to add a styled alert
//If item has a value and does not exist then addItem() is called to able row into table

document.getElementById('additem').addEventListener('click', () => {

    document.getElementById('alert').setAttribute('style', 'display:none')
    let item = document.getElementById('item').value
    let quantity = document.getElementById('quantity').value

    if(item == '' || quantity == ''){
        createAlert(item, quantity)
    }
    else if(checkItems(item)){
        createAlert(item, quantity)
    }
    else{
        addItem(item, quantity)
        document.getElementById('item').value = ''
        document.getElementById('quantity').value = ''
    }
})


//function to create the delete button with the itemID
//uses itemID to attached delete button to specific item in table when row is made
//button removes item from the table

function createDeleteButton(itemID){
    let removeButton = document.createElement('button')
    removeButton.className = 'btn btn-danger'
    removeButton.id = itemID
    removeButton.innerHTML = 'Remove'
    removeButton.onclick = () =>{
        document.getElementById(`item-${itemID}`).parentNode.removeChild(document.getElementById(`item-${itemID}`))
    }
    return removeButton
}

//function to check if and item already exists in the table
//grabs all td elements and stores in an array
//for loop iterates through the cells text content and attempts to match the item
//if a match is found return true

function checkItems(item) {
    let rows = document.querySelectorAll('tr')
    for (let i = 0; i < rows.length; i++) {
        if(rows[i].cells[0].textContent.toLowerCase() === item.toLowerCase()){
            return true
        }
    }
}

//Creates the alert if an item is already in the list
//adds a button to dismiss the alert which then hides the element using display:none

function createAlert(item, quantity){
    let alertButton = document.createElement('button')
    alertButton.setAttribute('class', "btn-close")
    alertButton.setAttribute('type', 'button')
    alertButton.setAttribute('id', 'dismissButton')
    alertButton.setAttribute('aria-label', 'close')
    let alert = document.getElementById('alert')
    alert.classList.add('show')
    alert.setAttribute('style', 'display:block')
    if(item === '' || quantity === ''){
        alert.innerHTML = `Please enter an item and quantity`
    }
    else{
    alert.innerHTML = `${item} is already in list, please remove and change quantity`
    }
    alert.appendChild(alertButton)
    document.getElementById('dismissButton').addEventListener('click', () =>{
        alert.classList.remove('show')
        alert.classList.add('hidden')
        alert.setAttribute('style', 'display:none')
    })
}
