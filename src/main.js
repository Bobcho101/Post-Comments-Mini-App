import page from "./lib/page.js";
import homeView from "./components/homeView.js";
import navMiddleware from "./middlewares/navMiddleware.js";
import createView from "./components/createView.js";
import postsView from "./components/postsView.js";


page(navMiddleware);

page('/', homeView);
page('/create', createView);
page('/posts', postsView);

page.start();