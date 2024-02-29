const get_source = (main_dir, dir, file) => {
  const disclaimer = '';
  const url = 'Model/design_patterns/' + (file !== 'Facade' ? main_dir + '/' + dir + '/' : '') + file + '.js';

  $.ajax({
    url: url,
    dataType: file !== 'Facade' ? 'script' : 'text',
    success: function(data) {
      const editor = ace.edit('editor_' + file);

      editor.setTheme('ace/theme/chrome');
      editor.getSession().setMode('ace/mode/javascript');
      editor.getSession().setUseWrapMode(true);
      editor.setReadOnly(true);
      editor.setValue(disclaimer + data, -1);
    },
    error: function(_) {
      const editor = ace.edit('editor_' + file);

      editor.setTheme('ace/theme/chrome');
      editor.getSession().setMode('ace/mode/javascript');
      editor.getSession().setUseWrapMode(true);
      editor.setValue(disclaimer + '//Not yet', -1);
    },
  });
};
