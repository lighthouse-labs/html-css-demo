$(function () {
  var demoArea = $('#demo-area');
  var htmlArea = $('#html-area');
  var cssArea = $('#css-area');
  var styleDemo = $('#style-demo');
  function redrawDemo() {
    demoArea.html(htmlArea.text());
    styleDemo.text(cssArea.text());
  }
  redrawDemo();
  $(document).on('keyup', redrawDemo);
});
