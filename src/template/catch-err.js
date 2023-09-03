const element = {
    error: document.querySelector('.js-error'),
    loader: document.querySelector('.js-loader')
}

function catchErr() {
    element.loader.classList.replace('loader', 'loader-hidden');
    element.error.classList.replace('error-hidden', 'error');
}

export { catchErr };