import { renderInMain, html } from "../lib/lit-html.js"

const template = () => html`
`;

export default async function postDetailsView(ctx) {
    const postID = ctx.params.postID;
    
    renderInMain(template())
}