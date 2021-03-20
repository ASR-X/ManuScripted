import React, {Component, useState} from 'react'
import ReactDOM from 'react-dom'

import ReactQuill, {Quill} from 'react-quill';
import {DragAndDropModule} from 'quill-drag-and-drop-module'
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/DragAndDropModule', DragAndDropModule);

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}/>
  );
}

ReactDOM.render(
    React.createElement(MyComponent, {}, null),
    document.getElementById('create-checkpoint-quill')
);