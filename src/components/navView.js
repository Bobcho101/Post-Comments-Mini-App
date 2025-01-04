import { html, renderInHeader } from "../lib/lit-html.js"



const template = () => html`
<nav>
    <div id="nav-box">
        <ul id="nav-content">
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
        </ul>
    </div>
</nav>
`;

export default function navView(ctx){
    renderInHeader(template());
}