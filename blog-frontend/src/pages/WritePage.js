import Responsive from '../components/common/Responsive'
import EditorContainer from '../containers/write/EditorContainer'
import TagBoxContainer from '../containers/write/TagBoxContainer'
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonContainer'

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  )
}

export default WritePage