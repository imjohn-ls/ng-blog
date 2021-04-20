
export default {
  onlyNum (ele, binding, vnode) {
    const el = ele.tagName === 'INPUT' ? ele : ele.querySelector('input')
    // 控制键入数字
    el.onkeypress = function (event) {
      alert('onkeypress')
      console.log(event)
    }
    el.onkeyup = function() {}
    el.onblur = function() {}
    el.onfocus = function () {}
  }
}
