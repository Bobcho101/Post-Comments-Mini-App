import { html, renderInMain } from "../lib/lit-html.js";

const template = () => html`
<div id="home-container">
    <div id="home-content">
        <h1>Share posts with your friends?</h1>
        <a href="/create"><button>Create a Post</button></a>
    </div>
</div>

`;

export default function homeView(ctx){
    renderInMain(template()); 
}