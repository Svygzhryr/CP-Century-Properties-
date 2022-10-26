let b = document.querySelectorAll('.search__button');
console.log(b.childNodes)

b.forEach(e => {

    function appear() {
        let classActive = 'search__button--active';
        let popup = e.querySelector('.search-popup')
        if (popup.classList.contains(classActive) && event.target === event.currentTarget) {
            popup.classList.remove(classActive)
        } else popup.classList.add(classActive);
        popup.style.transform = 'translate(0, 20%)';
    }
    
    e.addEventListener('mousedown', appear);
})
