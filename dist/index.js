

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle("/* my own crazy css */\nbutton {\n  padding: 1px 2px;\n  margin: 5px 5px;\n  border-radius: 5px;\n  border-style: none;\n  font-size: small;\n  font-weight: 100;\n}\n\n.btn-primary {\n  background-color: #3474BA;\n  color: white;\n}\n\n.btn-secondary {\n  background-color: white;\n  color: #3474ba;\n}\n\n.btn-medium {\n  width: 60px;\n  height: 30px;\n}\n\n.btn-small {\n  width: 20px;\n  height: 20px;\n}\n\n.btn-large {\n  width: 180px;\n  height: 75px;\n}\n\n.card-vertical {\n  width: 250px;\n  height: 300px;\n  margin: 10px 10px;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\n.card-horizontal {\n  width: 350px;\n  height: 250px;\n  margin: 10px 10px;\n  background-color: whitesmoke;\n  border-radius: 5px;\n}\n\n.label-simple {\n  width: 40px;\n  padding: 10px;\n  background-color: #3474ba;\n  color: white;\n  opacity: 80%;\n  font-family: \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 200;\n}\n\n.label-outlined {\n  width: fit-content;\n  padding: 10px;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  border: thin;\n  border-style: solid;\n  border-color: #b3b0b0;\n}\n\n/* Custom css */\n.quantity-label {\n  margin: 0 35%;\n}");

var useState = React.useState;
function Button(props) {
    var size = useState(props.size)[0];
    var type = useState(props.type)[0];
    return (React.createElement("button", { className: "btn-" + type + " btn-" + size }, props.children));
}

var useState$1 = React.useState;
function Card(props) {
    var position = useState$1(props.position)[0];
    return (React.createElement("div", { className: "card-" + position }, props.children));
}

var useState$2 = React.useState;
function Label(props) {
    var variant = useState$2(props.variant)[0];
    return (React.createElement("p", { className: "label-" + variant }, props.children));
}

exports.Card = Card;
exports.Label = Label;
exports.default = Button;
//# sourceMappingURL=index.js.map
