'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _yeomanGenerator = require('yeoman-generator');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _osenv = require('osenv');

var _osenv2 = _interopRequireDefault(_osenv);

var TestGenerator = (function (_Base) {
    function TestGenerator() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, TestGenerator);

        _get(Object.getPrototypeOf(TestGenerator.prototype), 'constructor', this).apply(this, args);
        this.argument('TaskGenerator');
        console.log('constructing test generator');
    }

    _inherits(TestGenerator, _Base);

    _createClass(TestGenerator, [{
        key: 'prompting',
        get: function () {
            var _this2 = this;

            this.log(_yosay2['default']('Scaffolding...'));

            this.prompt([{
                name: 'taskName',
                message: 'What is the name of your task?',
                validate: function validate(str) {
                    return !/\s/.test(str);
                }
            }], function (props) {
                _this2.props = props;

                console.log('all done');
            });
        }
    }]);

    return TestGenerator;
})(_yeomanGenerator.Base);

exports['default'] = TestGenerator;
module.exports = exports['default'];