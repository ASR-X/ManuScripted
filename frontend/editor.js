window.BeyondGrammar.initBeyondGrammar();

var quill = new Quill('#editor-container', {
  theme: 'snow',
  modules: {
    toolbar: {
      container: [
        [{ header: ['1', '2', '3', false] }],
        ['bold', 'italic', 'underline', 'link'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['clean'],
        [{ beyondgrammar: ['en-US', 'en-GB', false] }]
      ],
      handlers: {
        beyondgrammar: window.BeyondGrammar.getToolbarHandler(quill)
      }
    },
    beyondgrammar: {
    	 service: {

      //You should signup for getting this key
      //other api key
      apiKey: "E8FEF7AE-3F36-4EAF-A451-456D05E6F2A3",

      //[optional] You can specify it for permanent access to your settings and dictionaries
      //userId: "<YOUR_USER_ID>",

      //[optional] path to js file with BeyondGrammar Core
      //sourcePath : "", 

      //[optional] path to service which provides grammar checking
      // url shouldn's contains / in the end
      //serviceUrl : "https://rtg.prowritingaid.com/api/v1", 
    },
    grammar: {
      //[optional] Default language [en-US, en-GB],
      languageIsoCode: "en-US",

      //[optional] checking Style. By default is "true"
      checkStyle: true,

      //[optional] checking Spelling. By default is "true"
      checkSpelling: true,

      //[optional] checking Grammar. By default is "true"
      checkGrammar: true,

      //[optional] Show thesaurus information by double click, by default true
      showThesaurusByDoubleClick: true,

      //[optional] Showing context thesaurus, works only if showThesaurusByDoubleClick = true, by default false
      showContextThesaurus: false,
    }
    }
  }
});