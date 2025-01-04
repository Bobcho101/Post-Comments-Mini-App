import navView from "../components/navView.js";

export default function navMiddleware(ctx, next){
    navView();
    next();
}