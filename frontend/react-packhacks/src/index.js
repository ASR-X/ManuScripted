import React, {Component, useState} from 'react'
import ReactDOM from 'react-dom'

function MyComponent() {

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}/>
  );
}

ReactDOM.render(
    React.createElement(MyComponent, {}, null),
    document.getElementById('create-checkpoint-quill')
);