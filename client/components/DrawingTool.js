import React from 'react'
import Button from '@material-ui/core/Button'

export default class DrawingTool extends React.Component {
  constructor(props) {
    super(props)

    this.drawOnCanvas = this.drawOnCanvas.bind(this)
  }

  drawOnCanvas() {
    console.log('drawing....')
    this.props.canvas.isDrawingMode = !this.props.canvas.isDrawingMode
    if (this.props.canvas.isDrawingMode) {
      document.getElementById('draw-button').innerHTML = 'Draw Mode ON'
    } else {
      document.getElementById('draw-button').innerHTML = 'Draw Mode OFF'
    }
  }

  render() {
    return (
      <Button
        id="draw-button"
        onClick={() => {
          this.drawOnCanvas()
        }}
      >
        Draw Mode : OFF
      </Button>
    )
  }
}
