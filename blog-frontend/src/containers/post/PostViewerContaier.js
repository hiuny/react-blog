import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import PostActionButtons from "../../components/post/PostActionButtons"
import PostViewer from "../../components/post/PostViewer"
import { removePost } from "../../lib/api/posts"
import { readPost, unloadPost } from "../../modules/post"
import { setOriginalPost } from "../../modules/write"

const PostViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { postId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    user: user.user,
  }))
  
  useEffect(() => {
    dispatch(readPost(postId))
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => dispatch(unloadPost())
  }, [dispatch, postId])

  const onEdit = () => {
    dispatch(setOriginalPost(post))
    navigate('/write')
  }
  const onRemove = async () => {
    try {
      await removePost(postId)
      navigate('/') // 홈으로 이동
    } catch (e) {
      console.log(e)
    }
  }
  const ownPost = user?._id === post?.user._id

  return <PostViewer
    post={post}
    loading={loading}
    error={error}
    actionButtons={
      ownPost && <PostActionButtons
        onEdit={onEdit}
        onRemove={onRemove}
      />
    }
  />
}

export default PostViewerContainer