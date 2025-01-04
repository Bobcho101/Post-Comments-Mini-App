import { navViewHome, navViewPosts, navViewCreate } from "../components/navView.js";

export default function navMiddleware(ctx, next){
    if(ctx.path === '/'){
        console.log('home');
        navViewHome();
    } else if(ctx.path === '/posts'){
        console.log('posts');
        navViewPosts();
    } else if(ctx.path === '/create'){
        console.log('create');
        navViewCreate();
    }
    next();
}