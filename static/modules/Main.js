"use strict";

import "../views/main-page/main-page.scss";
import MainPage from "../views/main-page/MainPage";


class Main {
    constructor() {
        let a = 5;
        let b = 10;
        let c = a + b;
        console.log(c);

        this.mainPage = new MainPage();
    }
}

window.onload = function() {
    new Main();
};
