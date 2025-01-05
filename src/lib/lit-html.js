import { render, html } from "lit-html";

const mainEl = document.querySelector("main");
const headerEl = document.querySelector("header");

export const renderInMain = (template) => render(template, mainEl);
export const renderInHeader = (template) => render(template, headerEl);

export{
    html
}