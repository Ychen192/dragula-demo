function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target'), $('drop-target1'), $('drop-target2')], {
  copy: function (el, source) {
    return source === $('drag-elements');
  },
  accepts: function (el, target) {
    return target !== $('drag-elements');
  }
});
