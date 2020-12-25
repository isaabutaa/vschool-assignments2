const pokemonList = document.getElementById("pokemon-list")
const btn = document.getElementById("btn")

function getData() {
    const xhr = new XMLHttpRequest()
    
    xhr.open("GET", "https://api.vschool.io/pokemon", true)
    xhr.send()
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const JSONdata = xhr.responseText
            const data = JSON.parse(JSONdata).objects[0].pokemon

            for(let i = 0; i < data.length; i++) {
                const newPokemonItem = document.createElement("li")
                newPokemonItem.textContent = data[i].name.charAt(0).toUpperCase().concat(data[i].name.slice(1, data[i].name.length))
                pokemonList.appendChild(newPokemonItem)
            }
        } 
    }

    btn.removeEventListener("click", getData)
}

btn.addEventListener("click", getData)