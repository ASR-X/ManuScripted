const DragAndDropModule = require('quill-drag-and-drop-module');

function doSomethingWithBase64Image(base64_content) {
    return "http://quilljs.com/images/quill-photo.jpg";
}

var basic_editor = new Quill('#basic-editor', {
  modules: {
    dragAndDrop: {
      draggables: [
        {
          content_type_pattern: '^image/',
          tag: 'img',
          attr: 'src'
        }
      ],
      onDrop: function(file) {
        return DragAndDropModule.utils.getFileDataUrl(file).then(function(base64_content) {
          console.log(base64_content)
        });
      },
    }
  }
});
