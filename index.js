import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-7c4b4-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
let listOfItemsInDB = []


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    if (inputValue !== ""){
        
        const isDuplicate = listOfItemsInDB.some(item => item[1] === inputValue)
        
        if (!isDuplicate) {
             push(shoppingListInDB, inputValue)
            
        }
    }
    
    clearInputFieldEl()
})


onValue(shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        listOfItemsInDB = Object.entries(snapshot.val())
        
        clearShoppingListEl()
        
        const uniqueItems = new Set()
        
        for (let i = 0; i < listOfItemsInDB.length; i++) {
            let currentItem = listOfItemsInDB[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            if(!uniqueItems.has(currentItemValue)){
                appendItemToShoppingListEl(currentItem)
                uniqueItems.add(currentItemValue)
            }
            
        }    
    } else {
        shoppingListEl.innerHTML = `<p> No items here... yet</p>`
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    shoppingListEl.append(newEl)
}

