import ReactDecorator from '../base/react_decorator'
import BaseRouter from '../base/router'
import CommentBox from '../components/comments/CommentBox'

export default class CommentRouter extends BaseRouter {
  register() {
    this.route('/', this.decorateCommentBox)
  }

  decorateCommentBox(ctx, next) {
    (new ReactDecorator()).decorate('react-main', CommentBox)
    next()
  }
}
