import { database, get, push, ref, set } from "../firebase/firebase-init.js";
import { renderInMain, html } from "../lib/lit-html.js"
import page from "../lib/page.js";

const template = (post, commentSubmit, comments) => html`
<div id="detailed-post-container">
    <a href="/posts"><button>Back</button></a>
    <div id="detailed-post-content">    
        <div id="detailed-post-info">
            <img src="${post.image}">
            <h1>Author: ${post.author}</h1>
        </div>
        <div id="detailed-post-comments">
            <form @submit=${commentSubmit} id="add-comment-form">
                <div class="comment-add-headers1">
                    <label for="author">Author: </label>
                    <input type="text" name="author" id="author"/>
                </div>
                <div class="comment-add-headers2">
                    <label for="comment">Comment: </label>
                    <textarea id="comment" name="comment" rows="5" cols="50"></textarea>
                </div>
                <button type="submit">Comment</button>
            </form>
            <div id="comments-container">
               ${comments !== undefined
                   ? comments.map(comment => html`
                    <div class="comment-box">
                        <div class="comment-box-text">
                            <h1>@${comment.author}</h1>
                            <h2>${comment.comment}</h2>
                        </div>
                    </div>`)
                   : html`<h1>No comments</h1>`
               }
            </div>
        </div>
    </div>
</div>
`;

export default async function postDetailsView(ctx) {
    const postID = ctx.params.postID;
    const dbRef = ref(database, `Posts/${postID}`);
    try{
        renderInMain(html`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`);
        const response = await get(dbRef);
        const data = response.val();
        let comments = data.comments;
        if(comments !== undefined){
            comments = Object.values(data.comments);
        }
        renderInMain(template(data, commentSubmitHandler.bind(ctx), comments));
        
        
        
    } catch(err){
        console.log(err.message);
    }   
}
async function commentSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const author = formData.get('author');
    const comment = formData.get('comment');

    if(author === "" || comment === "") return alert('All fields are required!');

    const itemID = this.params.postID;

   const dbRef = ref(database, `Posts/${itemID}/comments`);

    try{
        const newCommentRef = push(dbRef);
        const response = await set(newCommentRef, {    
            author,
            comment
        });
        location.reload();
    } catch(err){
        console.log(err.message);
    }
}