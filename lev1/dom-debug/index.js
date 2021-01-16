const colors = ["choose color", "red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    e.preventDefault()
    const subItem = createSubItem()
    document.getElementById("list").appendChild(subItem)
    document.getElementById("input").value = ""
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        // e.target.parent.backgroundColor = e.target.value
        // console.log(this.parentNode)
        this.parentNode.style.color = "white"
        this.parentNode.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(){
    const subItem = document.createElement("div")
    let subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


