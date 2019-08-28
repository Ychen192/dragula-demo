function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target')], {
  copy: function (el, source) {
    return source === $('drag-elements');
  },
  accepts: function (el, target) {
    return target !== $('drag-elements');
  }
});