import koa from 'koa';
import router from './routes/routes.js';
import render from 'koa-ejs';
import bodyparser from 'koa-bodyparser';

// app initilization
const app = new koa();

// use bodyparser before anything else
app.use(bodyparser());

// router settings
app.use(router.routes()).use(router.allowedMethods());

// view rendering settings
render(app, {
    root: "/Users/chinmayagrawal/Desktop/first_koa_app/views",
    layout: 'layout',
    viewExt: 'html',
})

// response
app.use(ctx => {
  ctx.body = "Hello World";
});

// Server running app
app.listen(3000, () => {
    console.log(`App running on localhost:3000`)
});