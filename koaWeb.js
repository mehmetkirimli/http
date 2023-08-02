const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = "Hello Koa.js , Bugün seninle http protokülü kurup baülantı sağlıyorumss.";
  console.log("Nerede yazıyoruz ? ");
});

app.listen(3003);
