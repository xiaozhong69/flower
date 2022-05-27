const Koa = require('koa'); // 引入koa
const Router = require('koa-router'); // 引入koa-router

const app = new Koa(); // 创建koa应用
const router = new Router(); // 创建路由，支持传递参数
const cors = require('koa2-cors');

// get请求获取json
router.get('/json', async (ctx) => {
  ctx.type = 'json';
  ctx.body = {
    a: 1,
    b: 2,
  };
});

app.use(
  cors({
    origin: '*',
    maxAge: 2592000,
    credentials: true,
  })
);

app.use(router.routes());
app.use(
  router.allowedMethods({
    // throw: true, // 抛出错误，代替设置响应头状态
    // notImplemented: () => '不支持当前请求所需要的功能',
    // methodNotAllowed: () => '不支持的请求方式'
  })
);

// 启动服务监听本地3000端口
app.listen(9999, () => {
  console.log('应用已经启动，http://localhost:3000');
});
