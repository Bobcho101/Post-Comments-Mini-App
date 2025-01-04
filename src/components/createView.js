import { renderInMain, html } from "../lib/lit-html.js";

const template = () => html`
<div id="create-post-container">
    
</div>
`;

export default async function createView(ctx){
    renderInMain(template());
}