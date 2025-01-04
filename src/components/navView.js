import { html, renderInHeader } from "../lib/lit-html.js"

const templateHome = () => html`
<nav>
    <div id="nav-box">
        <ul id="nav-content">
            <li><a id="home-anchor" href="/">Home</a></li>
            <li><a id="posts-anchor" href="/posts">Posts</a></li>
            <li><a id="create-anchor" href="/create">Create</a></li>
        </ul>
    </div>
</nav>
`;

export function navViewHome(ctx){
    renderInHeader(templateHome());
    const homeAnchor = document.querySelector('#home-anchor');
    homeAnchor.style.borderBottom = '2px solid black';
    const postsAnchor = document.querySelector('#posts-anchor');
    postsAnchor.style.border = 'none';
    const createAnchor = document.querySelector("#create-anchor");
    createAnchor.style.border = 'none';
}


const templatePosts = () => html`
<nav>
    <div id="nav-box">
        <ul id="nav-content">
            <li><a id="home-anchor" href="/">Home</a></li>
            <li><a id="posts-anchor" href="/posts">Posts</a></li>
            <li><a id="create-anchor" href="/create">Create</a></li>
        </ul>
    </div>
</nav>
`;
export function navViewPosts(ctx){
    renderInHeader(templatePosts());
    const homeAnchor = document.querySelector('#home-anchor');
    homeAnchor.style.borderBottom = 'none';
    const postsAnchor = document.querySelector('#posts-anchor');
    postsAnchor.style.borderBottom = '2px solid black';
    const createAnchor = document.querySelector("#create-anchor");
    createAnchor.style.border = 'none';
}


const templateCreate = () => html`
<nav>
    <div id="nav-box">
        <ul id="nav-content">
            <li><a id="home-anchor" href="/">Home</a></li>
            <li><a id="posts-anchor" href="/posts">Posts</a></li>
            <li><a id="create-anchor" href="/create">Create</a></li>
        </ul>
    </div>
</nav>
`;
export function navViewCreate(ctx){
    renderInHeader(templateCreate());
    const homeAnchor = document.querySelector('#home-anchor');
    homeAnchor.style.borderBottom = 'none';
    const postsAnchor = document.querySelector('#posts-anchor');
    postsAnchor.style.border = 'none';
    const createAnchor = document.querySelector("#create-anchor");
    createAnchor.style.borderBottom = '2px solid black';
}