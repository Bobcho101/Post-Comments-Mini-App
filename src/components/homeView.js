import { html, renderInMain } from "../lib/lit-html.js";

const template = () => html`
<h1>Hello this a home page!</h1>
`;

export default function homeView(ctx){
    renderInMain(template());
}