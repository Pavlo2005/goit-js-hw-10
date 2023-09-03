import SlimSelect from 'slim-select'

import { fetchBreeds } from './cat-api';
import { createCats } from "./create-cats";
import { catchErr } from "./catch-err";
import { handlerSelect } from "..";

const select = document.querySelector('.js-select');

const element = {
    loader: document.querySelector('.js-loader')
}

function addSelect() {
    fetchBreeds()
        .then(data => {
            select.insertAdjacentHTML('beforeend', createCats(data));
            new SlimSelect({
                select: '#selectElement',
                settings: {
                    placeholderText: 'Your cat',
                },
                events: {
                    afterChange: () => {
                        handlerSelect();
                    }
                }
            })
            element.loader.classList.replace('loader', 'loader-hidden');
            select.classList.replace('breed-select-hidden', 'breed-select');
        })
        .catch(err => {
            catchErr();
        });
}

export { addSelect };

