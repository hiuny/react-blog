import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Editor from '../../components/write/Editor'
import { changeField, initialize } from '../../modules/write'

const EditorContainer = () => {
  const dispatch = useDispatch()
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }))
  const onChangeField = useCallback(payload =>
    dispatch(changeField(payload)), [dispatch])
  // 언마운트될 때 초기화
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      void dispatch(initialize())
      console.log('컴포넌트가 화면에서 사라짐');
    }
  }, [dispatch])
  return <Editor
    onChangeField={onChangeField}
    title={title}
    body={body}
  />
}

export default EditorContainer