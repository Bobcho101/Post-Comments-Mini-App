import { database, set, ref, push } from "../firebase/firebase-init.js";
import { renderInMain, html } from "../lib/lit-html.js";
import page from "../lib/page.js";

const template = (onSubmit) => html`
<div id="create-post-container">
    <div id="create-post-content">
        <form @submit=${onSubmit} id="create-form">
            <div class="create-form-el">
                <label for="author">Author: </label>
                <input type="text" name="author" id="author"/> 
            </div>
            <div class="create-form-el">
                <label for="image">Image: </label>
                <input type="file" name="image" id="image"/> 
            </div>
            <button type="submit">Post</button>
        </form>
    </div>
</div>
`;

export default async function createView(ctx){
    renderInMain(template(createSubmitHandler));
}

async function createSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const author = formData.get('author');
    const image = formData.get('image');

    const reader = new FileReader();

    if(author === "" || !image) return;

    if (!image || image.size === 0) {
        alert("Please select a valid image.");
        return;
    }

    reader.onload = async () => {
        const photoBase64 = reader.result;
        const dbRef = ref(database, 'Posts/');
        const newPostRef = push(dbRef);
        const response = await set(newPostRef, {    
            author,
            image: photoBase64,
            comments: {
                
            }
        });
        page.redirect('/posts');
    }
    reader.onerror = () => {
        alert("Failed to read the photo. Please try again.");
    };
    reader.readAsDataURL(image);
}