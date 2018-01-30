function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
var defaultStyle = {
  demo: {
    textAlign: 'center',
    marginTop: '50px'
  }
};

var Demo =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Demo, _Component);

  function Demo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Demo.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      style: defaultStyle.demo
    }, "Hello, world!");
  };

  return Demo;
}(Component);

export default Demo;