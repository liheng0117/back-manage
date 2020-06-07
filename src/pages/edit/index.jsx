import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Button } from 'antd'
import './style.less'

export default class Edit extends Component {
  state = {
    editorState: BraftEditor.createEditorState('<p>Hello World!</p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>',
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML(),
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <div className="edit">
        <div className="editor-wrapper">
          <BraftEditor value={editorState} onChange={this.handleChange} />
        </div>
        <div className="btn">
          <Button type="primary">提交</Button>
        </div>
      </div>
    )
  }
}
