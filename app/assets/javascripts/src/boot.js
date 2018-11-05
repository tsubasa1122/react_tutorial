import 'babel-polyfill'
import $ from './vendor/jquery'
import page from 'page'
import CommentRouter from './router/comment'

$(() => {
  const commentRouter = new CommentRouter()
  commentRouter.register()

  page({click: false})
})
