import SlimSelect from 'slim-select'

import { serviceCats } from "./service-cats";
import { createCats } from "./create-cats";
import { catchErr } from "./catch-err";
import { handlerSelect } from "..";

const select = document.querySelector('.js-select');

function addSelect() {
    serviceCats()
        .then(data => {
            select.insertAdjacentHTML('beforeend', createCats(data));
            new SlimSelect({
                select: '#selectElement',
                events: {
                    afterChange: () => {
                        handlerSelect();
                    }
                }
            })
        })
        .catch(err => {
            catchErr();
        });
}

export { addSelect };

