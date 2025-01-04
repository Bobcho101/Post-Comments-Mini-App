import { navViewHome, navViewPosts, navViewCreate } from "../components/navView.js";

export default function navMiddleware(ctx, next){
    if(ctx.path === '/'){
        navViewHome();
    } else if(ctx.path === '/posts'){
        navViewPosts();
    } else if(ctx.path === '/create'){
        navViewCreate();
    }
    next();
}