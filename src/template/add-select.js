import { serviceCats } from "./service-cats";
import { createCats } from "./create-cats";
import { catchErr } from "./catch-err";

const select = document.querySelector('.js-select');

function addSelect() {
    serviceCats()
        .then(data => {
            select.insertAdjacentHTML('beforeend', createCats(data));
        })
        .catch(err => {
            catchErr();
        });
}

export { addSelect };

