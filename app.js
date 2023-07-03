import koa from 'koa';
import router from './routes/routes.js';
import bodyparser from 'koa-bodyparser';
import connectDb from './db/dbconnection.js';

// app initilization
const app = new koa();

// use bodyparser before anything else
app.use(bodyparser());

// router settings
app.use(router.routes()).use(router.allowedMethods());

// Database Connection
connectDb('mongodb://localhost:27017');

// response
app.use(ctx => {
  ctx.body = {"msg": "Working"};
});

// Server running app
app.listen(3000, () => {
    console.log(`App running on localhost:3000`)
});