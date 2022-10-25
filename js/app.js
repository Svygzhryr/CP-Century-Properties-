let b = document.querySelectorAll('.search__button');
let p = document.querySelectorAll('.search-popup');

b.forEach(e => {

    function appear() {
        let classActive = 'search__button--active';

        if (e.classList.contains(classActive)) {
            e.classList.remove(classActive)
        } else e.classList.add(classActive);
        
    }
    
    e.addEventListener('click', appear);
})
