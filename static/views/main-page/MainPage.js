"use strict";

import template from "./main-page.pug";

export default class MainPage {
    constructor() {
        MainPage.render();
    }

    static render() {
        for (let i = 0; i < 5; i++) {
            console.log("RENDER PUG");
        }

        let pugBox = document.querySelector(".centerBox");
        pugBox.innerHTML = template();
    }
}
