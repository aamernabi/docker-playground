import { Application, Router } from './deps.ts'
import { createBlog, getBlogs } from './routes/blogs.ts'

const app = new Application()

const router = new Router()
router
  .get('/', (ctx) => {
    ctx.response.body = 'Welcome to deno example api!'
  })
  .get('/blogs', getBlogs)
  .post('/blogs', createBlog)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: 5000 })
console.log('Listening on port 5000')
