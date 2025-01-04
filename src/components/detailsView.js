import { renderInMain, html } from "../lib/lit-html.js"

const template = () => html`
`;

export default async function postDetailsView(ctx) {
    renderInMain(template())
}