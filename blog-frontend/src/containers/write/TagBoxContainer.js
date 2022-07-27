import { useDispatch, useSelector } from "react-redux"
import TagBox from "../../components/write/TagBox"
import { changeField } from "../../modules/write"


const TagBoxContainer = () => {
  const dispatch = useDispatch()
  const tags = useSelector(state => state.write.tags)
  const onChangeTags = tags => dispatch(changeField({
    key: 'tags',
    value: tags,
  }))
  return <TagBox
    onChangeTags={onChangeTags}
    tags={tags}
  />
}

export default TagBoxContainer