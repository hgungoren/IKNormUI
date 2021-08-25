"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var antd_1 = require("antd");
var abpUtility_1 = require("../../../lib/abpUtility");
var createOrUpdateUser_validation_1 = require("./createOrUpdateUser.validation");
var TabPane = antd_1.Tabs.TabPane;
var CreateOrUpdateUser = /** @class */ (function (_super) {
    __extends(CreateOrUpdateUser, _super);
    function CreateOrUpdateUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            confirmDirty: false
        };
        _this.compareToFirstPassword = function (rule, value, callback) {
            var form = _this.props.formRef.current;
            if (value && value !== form.getFieldValue('password')) {
                return Promise.reject(abpUtility_1.L('TwoPasswordsThatYouEnterIsInconsistent'));
            }
            return Promise.resolve();
        };
        _this.validateToNextPassword = function (rule, value, callback) {
            var _a = _this.props.formRef.current, validateFields = _a.validateFields, getFieldValue = _a.getFieldValue;
            _this.setState({
                confirmDirty: true
            });
            if (value && _this.state.confirmDirty && getFieldValue('confirm')) {
                validateFields(['confirm']);
            }
            return Promise.resolve();
        };
        return _this;
    }
    CreateOrUpdateUser.prototype.render = function () {
        var roles = this.props.roles;
        var formItemLayout = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 10 },
                md: { span: 6 },
                lg: { span: 6 },
                xl: { span: 6 },
                xxl: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 14 },
                sm: { span: 14 },
                md: { span: 18 },
                lg: { span: 18 },
                xl: { span: 18 },
                xxl: { span: 18 }
            }
        };
        var tailFormItemLayout = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 10 },
                md: { span: 6 },
                lg: { span: 6 },
                xl: { span: 6 },
                xxl: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 14 },
                sm: { span: 14 },
                md: { span: 18 },
                lg: { span: 18 },
                xl: { span: 18 },
                xxl: { span: 18 }
            }
        };
        var _a = this.props, visible = _a.visible, onCancel = _a.onCancel, onCreate = _a.onCreate;
        var options = roles.map(function (x) {
            var test = { label: x.displayName, value: x.normalizedName };
            return test;
        });
        return (React.createElement(antd_1.Modal, { width: '80%', visible: visible, cancelText: abpUtility_1.L('GiveUp'), okText: abpUtility_1.L('Save'), onCancel: onCancel, onOk: onCreate, title: abpUtility_1.L('UserDetail'), destroyOnClose: true },
            React.createElement(antd_1.Form, { ref: this.props.formRef },
                React.createElement(antd_1.Tabs, { defaultActiveKey: 'userInfo', size: 'small', tabBarGutter: 64 },
                    React.createElement(TabPane, { tab: abpUtility_1.L('User'), key: 'userInfo' },
                        React.createElement(antd_1.Row, null,
                            React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 10, offset: 2 }, xl: { span: 10, offset: 2 }, xxl: { span: 10, offset: 2 } },
                                React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Name') }, formItemLayout, { name: 'name', rules: createOrUpdateUser_validation_1["default"].name }),
                                    React.createElement(antd_1.Input, null)),
                                React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Surname') }, formItemLayout, { name: 'surname', rules: createOrUpdateUser_validation_1["default"].surname }),
                                    React.createElement(antd_1.Input, null)),
                                React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Title') }, formItemLayout, { name: 'title', rules: createOrUpdateUser_validation_1["default"].title }),
                                    React.createElement(antd_1.Input, null)),
                                React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('UserName') }, formItemLayout, { name: 'userName', rules: createOrUpdateUser_validation_1["default"].userName }),
                                    React.createElement(antd_1.Input, null))),
                            React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 10, offset: 0 }, xl: { span: 10, offset: 0 }, xxl: { span: 10, offset: 0 } },
                                React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Email') }, formItemLayout, { name: 'emailAddress', rules: createOrUpdateUser_validation_1["default"].emailAddress }),
                                    React.createElement(antd_1.Input, null)),
                                this.props.modalType === 'edit' ? (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Password') }, formItemLayout, { name: 'password', rules: [
                                        {
                                            required: true,
                                            message: abpUtility_1.L('PleaseInputYourPassword')
                                        },
                                        {
                                            validator: this.validateToNextPassword
                                        },
                                    ] }),
                                    React.createElement(antd_1.Input, { type: "password" }))) : null,
                                this.props.modalType === 'edit' ? (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('ConfirmPassword') }, formItemLayout, { name: 'confirm', rules: [
                                        {
                                            required: true,
                                            message: abpUtility_1.L('PleaseInputYourConfirmPassword')
                                        },
                                        {
                                            validator: this.compareToFirstPassword
                                        },
                                    ] }),
                                    React.createElement(antd_1.Input, { type: "password" }))) : null,
                                React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('IsActiveStatus') }, tailFormItemLayout, { name: 'isActive', valuePropName: 'checked' }),
                                    React.createElement(antd_1.Checkbox, { defaultChecked: true }, abpUtility_1.L('Active')))))),
                    React.createElement(TabPane, { tab: abpUtility_1.L('Roles'), key: 'rol', forceRender: true },
                        React.createElement(antd_1.Form.Item, __assign({}, tailFormItemLayout, { name: 'roleNames' }),
                            React.createElement(antd_1.Checkbox.Group, { options: options })))))));
    };
    return CreateOrUpdateUser;
}(React.Component));
exports["default"] = CreateOrUpdateUser;
