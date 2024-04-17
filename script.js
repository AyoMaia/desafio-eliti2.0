var btn = document.querySelector('#show-text');
var container = document.querySelector('#container');

btn.addEventListener('click', function() {

    if(container.style.display === 'block'){
        return btn.textContent = 'Ver Mais',
        container.style.display = 'none';
    } else {
        container.style.display = 'block'
        btn.textContent = 'Ver menos';

    }
})
