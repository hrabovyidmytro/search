document.querySelector("button").addEventListener("click", () => {
    search()
})

let dataSearch = document.querySelector("[data = 'search']")
let dataPicture = document.querySelector("[data = 'picture']")
let dataAdvance = document.querySelector("[data = 'advance']")
let dataLucky = document.querySelector("[data = 'lucky']")
let data = 'search'
dataSearch.addEventListener('click', () => {
    data = 'search'
    document.querySelector("button").innerText = 'пошук'
    document.querySelector('[input = "corect" ]').style.display = 'none'
    document.querySelector('[input = "anythinc" ]').style.display = 'none'
    document.querySelector('[input = "nothink" ]').style.display = 'none'

})
dataPicture.addEventListener('click', () => {
    data = 'picture'
    document.querySelector("button").innerText = 'пошук по зображенням'
    document.querySelector('[input = "corect" ]').style.display = 'none'
    document.querySelector('[input = "anythinc" ]').style.display = 'none'
    document.querySelector('[input = "nothink" ]').style.display = 'none'

})
dataAdvance.addEventListener('click', () => {
    data = 'advance'
    document.querySelector("button").innerText = 'розширений пошук'
    document.querySelector('[input = "corect" ]').style.display = 'flex'
    document.querySelector('[input = "anythinc" ]').style.display = 'flex'
    document.querySelector('[input = "nothink" ]').style.display = 'flex'

})
dataLucky.addEventListener('click', () => {
    window.location = 'https://www.google.com/doodles'

})



const search = () => {

    switch (data) {
        case("search"):
            window.location = 'https://www.google.com/search?q=' + document.querySelector("[input='search']").value
            break;
        case("picture"):
            window.location = 'https://www.google.com/search?q=' + document.querySelector("[input='search']").value + '&source=lnms&tbm=isch'
            break;
        case("advance"):
            window.location = 'https://www.google.com/search?as_q=' + document.querySelector("[input='search']").value + '&as_epq=' + document.querySelector("[input='corect']").value + '&as_oq=' + document.querySelector("[input='nothink']").value + '&as_eq=' + document.querySelector("[input='anythinc']").value
            break;
    }
}