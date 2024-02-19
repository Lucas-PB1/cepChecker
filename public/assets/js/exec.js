window.onload = function () {
    const masks = { cep: '00000-000' };

    for (let key in masks) {
        document.querySelectorAll('.' + key).forEach(el => IMask(el, masks[key]));
    }

    if (document.querySelector('.cep'))
        [...document.querySelectorAll('.cep')].map(element => element.addEventListener('keyup', ({ target }) => getData(target)))
}
