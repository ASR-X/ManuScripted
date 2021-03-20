
var options = {
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    },
    placeholder: 'Your essay goes here!',
    theme: 'snow'  // or 'bubble
        };

var quill = new Quill('#editor-container', options);