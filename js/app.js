let b = document.querySelectorAll('.search__button');
let popup = document.querySelectorAll('.popup__item');
let search = document.querySelector('.popup__input')
console.log(b.childNodes)

b.forEach(e => {

    function appear() {
        let classActive = 'search__button--active';
        let popup = e.querySelector('.search-popup');
        let item = e.querySelectorAll('.popup__item')
        if (popup.classList.contains(classActive) && event.target === event.currentTarget) {
            popup.classList.remove(classActive)
        } else popup.classList.add(classActive);
        popup.style.transform = 'translate(0, 20%)';
        popup.style.background = 'white'
        item.forEach(e => {e.style.opacity = 1;})
    }
    
    e.addEventListener('click', appear);
})

popup.forEach(e => {
    function change() {
        let text = e.textContent;
        let btn = e.closest('.search__button');
        btn.querySelector('.search-button__info').innerHTML = text;
    }

    e.addEventListener('click', change)
})

function changeInput() {
    let data = search.value;
    let btn = search.closest('.search__button');
    btn.querySelector('.search-button__info').innerHTML = '$' + data + 'k';
    
}

search.addEventListener('change', changeInput)




