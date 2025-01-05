import { database, get, ref } from "../firebase/firebase-init.js";
import { renderInMain, html } from "../lib/lit-html.js";

const template = (posts) => html`
<div id="posts-container">
    <div id="posts-content">
    ${posts.map(post => html`
        <div class="post-box">
            <a href="/posts/${post.key}/details"><img src="${post.image}"></a>
            <h2>Author: ${post.author}</h2>
        </div>`)}
    </div>
</div>
`;

export default async function postsView(ctx) {
    const dbRef = ref(database, 'Posts/');
    try{
        renderInMain(html`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`);
        const posts = await get(dbRef);
        let data = await posts.val();
        data = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        renderInMain(template(data));
    } catch(err){
        console.log(err.message);
    }
    

    
}