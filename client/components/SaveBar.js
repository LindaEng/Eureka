import React, {Component} from 'react'
import {fabric} from 'fabric'
import PopUp from './SavePopUp'
import Canvas from './Canvas'
import {saveAs} from 'file-saver'
import {addStoryToUser} from '../store/singleStory'
import {me} from '../store/user'
import {addPageToStory} from '../store/pages'
import {connect} from 'react-redux'
import SaveToNewStoryCard from './SaveToNewStoryCard'
import AddPageToStory from './AddPageToStory'
import SaveChange from './SaveChange'
import Button from '@material-ui/core/Button'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    color: '#EAEAEA',
    borderRadius: '50%',
    backgroundColor: '#EAA286',
    padding: 25,
    marginLeft: '24px'
  }
}))

const SaveBar = props => {
  const classes = useStyles()
  const saveFile = (title, canvas) => {
    let canvasJSON = JSON.stringify(this.props.canvas.toDatalessJSON())
  }

  const exportFile = () => {
    // 1) change background color to white, then render the canvas
    // 2) grab canvas 'DOM' element
    // 3) call ToBlob function on the canvas DOM and SaveAs.'file_name.jpeg'
    props.canvas.setBackgroundColor(
      'white',
      props.canvas.renderAll.bind(props.canvas)
    )
    const exportCanvas = document.getElementById('my-canvas')
    exportCanvas.toBlob(function(blob) {
      saveAs(blob, 'eureka_img.jpeg')
    })
  }

  return (
    <div id="save-bar">
      <Button onClick={() => exportFile()}> EXPORT </Button>
      <SaveToNewStoryCard
        canvas={props.canvas}
        addStory={props.addStoryToUser}
        user={props.user}
        stories={props.stories}
      />
      <AddPageToStory
        canvas={props.canvas}
        addPage={props.addPage}
        getAllStories={props.getAllStories}
        stories={props.stories}
        user={props.user}
      />
      <SaveChange
        canvas={props.canvas}
        addPage={props.addPage}
        getAllStories={props.getAllStories}
        stories={props.stories}
        user={props.user}
        PageId={props.pageId}
      />
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    addStoryToUser: (userId, newStory, fileToUpload) =>
      dispatch(addStoryToUser(userId, newStory, fileToUpload)),
    addPage: (storyId, newPage, fileToUpload) =>
      dispatch(addPageToStory(storyId, newPage, fileToUpload))
  }
}
export default connect(null, mapDispatch)(SaveBar)
