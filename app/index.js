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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yeomanGenerator = require('yeoman-generator');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _osenv = require('osenv');

var _osenv2 = _interopRequireDefault(_osenv);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var UrbanGenerator = (function (_Base) {
    function UrbanGenerator() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, UrbanGenerator);

        _get(Object.getPrototypeOf(UrbanGenerator.prototype), 'constructor', this).apply(this, args);

        this.pkg = require('../package.json');
        this.option('skip-prompt', {
            desc: 'Skips the prompt and uses defaults',
            required: false,
            defaults: false
        });

        if (process.env.DEBUG) {
            this.destinationRoot(_path2['default'].join(__dirname, '/../debug'));
        }
    }

    _inherits(UrbanGenerator, _Base);

    _createClass(UrbanGenerator, [{
        key: 'hello',
        value: function hello() {
            this.log(_yosay2['default']([_chalk2['default'].cyan('Urban Web Client'), 'Feed me information...'].join('\n')));
        }
    }, {
        key: 'prompting',
        value: function prompting() {
            var _this2 = this;

            if (this.options['skip-prompt']) {
                this.log('Skipping prompt');
                this.props = {
                    projectName: 'debug-project',
                    projectDescription: 'project description',
                    authorName: 'Arthur Debug',
                    userName: 'adebug'
                };
                return;
            }

            this.prompt(UrbanGenerator.prompts, function (props) {
                _this2.props = props;
            });
        }
    }, {
        key: 'app',
        value: function app() {
            var _this3 = this;

            var done = this.async();

            this.log('Copying templates');

            _glob2['default'](_path2['default'].join(this.sourceRoot(), '*'), {
                dot: true
            }, function (err, files) {
                if (err) {
                    throw new Error(err);
                }

                files.map(function (file) {
                    return file.replace(_this3.sourceRoot(), '');
                }).forEach(function (file) {
                    _this3.fs.copyTpl(_this3.templatePath(file), _this3.destinationPath(file), _this3.props, {
                        evaluate: /\{\{\{(.+?)\}\}\}/g,
                        interpolate: /\{\{(.+?)\}\}/g,
                        escape: /\{\{-(.+?)\}\}/g
                    });
                });

                done();
            });
        }
    }, {
        key: 'install',
        value: function install() {
            if (this.options['skip-install']) {
                this.log('Skipping install');
                return;
            }

            this.installDependencies({
                bower: false
            });
        }
    }], [{
        key: 'prompts',
        value: [{
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: function validate(str) {
                return !/\s/.test(str);
            }
        }, {
            name: 'projectDescription',
            message: 'What is the project description?'
        }, {
            name: 'authorName',
            message: 'What is the author name?',
            'default': _osenv2['default'].user(),
            store: true
        }, {
            name: 'userName',
            message: 'What is your github username?',
            'default': _osenv2['default'].user().toLowerCase().replace(/\s/g, ''),
            store: true
        }],
        enumerable: true
    }]);

    return UrbanGenerator;
})(_yeomanGenerator.Base);

exports['default'] = UrbanGenerator;
module.exports = exports['default'];