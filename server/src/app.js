const Router = require('@koa/router')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')

const root = require('./root.json')

const app = new Koa()
app.use(json()).use(bodyParser())

const router = new Router()

router.get('/path', (ctx, next) => {
  const path = ctx.request.query.path.split('/').filter((name) => name.length > 0)

  let tmp = root

  while (path.length > 0) {
    console.log(path)
    const curName = path.shift()
    console.log(curName)
    tmp = tmp.children[curName]
    if (!tmp.children) tmp = curName
    console.log('---')
  }

  let structure, type
  console.log({ tmp })
  if (tmp.children) {
    structure = Object.keys(tmp.children).reduce((acc, name) => {
      acc[name] = tmp.children[name].type
      return acc
    }, {})
    type = 'dir'
  } else {
    structure = tmp
    type = 'file'
  }

  ctx.body = {
    data: { structure, type },
    status: 200,
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT)

app.use(router.routes())
