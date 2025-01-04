import { render, html } from "../../node_modules/lit-html/lit-html.js";

const mainEl = document.querySelector("main");
const headerEl = document.querySelector("header");

export const renderInMain = (template) => render(template, mainEl);
export const renderInHeader = (template) => render(template, headerEl);

export{
    html
}