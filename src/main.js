import page from "./lib/page.js";
import homeView from "./components/homeView.js";
import navMiddleware from "./middlewares/navMiddleware.js";

page(navMiddleware);

page('/', homeView);

page.start();