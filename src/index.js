"use strict";
import {flowEval} from "./todoEvent";
import {pageLoader} from "./loader";
import {changeMode} from "./darkmode";
window.addEventListener("load", () => {
pageLoader();
changeMode();
flowEval();
});