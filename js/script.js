const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click",() => {
    const item = document.querySelector('#item')
    createItem(item)
})

function displayItem() {
    let items = ""
    for(let i = 0; i < itemsArray.length; i++) {
        items += `
            <div class="item">
                <div class="inputController">
                    <textarea disabled>${itemsArray[i]}</textarea>
                    <div class="editController">
                        <i class="fas fa-check deleteBtn btn btn-danger"></i>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector(".toDoList").innerHTML = items
    activateDeleteListeners()
}
    
function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db,i)=> {
        db.addEventListener("click",() => {
            deleteItem(i)
        })
    })
}

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}
function createItem () {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload()
}

function displayDate() {
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[2] + "/" + date[1] + "/" + date[3]
}

window.onload = function() {
    displayDate()
    displayItem()
}