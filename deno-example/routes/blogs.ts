import { RouterContext } from '../deps.ts'
import db from '../mongodb.ts'

const blogsCollection = db.collection('blogs')

const getBlogs = async (ctx: RouterContext) => {
  const blogs = await blogsCollection.find().toArray()
  ctx.response.body = blogs
}

const createBlog = async (ctx: RouterContext) => {
    const requestBody = await ctx.request.body()
    const data = await requestBody.value
    const blogId = await blogsCollection.insertOne(data)
    ctx.response.body = {
        status: 'success',
        blogId: blogId
    }
}

export { getBlogs, createBlog }
