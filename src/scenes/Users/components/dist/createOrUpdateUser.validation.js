"use strict";
exports.__esModule = true;
var abpUtility_1 = require("../../../lib/abpUtility");
var rules = {
    name: [{ required: true, message: abpUtility_1.L('ThisFieldIsRequired') }],
    surname: [{ required: true, message: abpUtility_1.L('ThisFieldIsRequired') }],
    userName: [{ required: true, message: abpUtility_1.L('ThisFieldIsRequired') }],
    title: [{ required: true, message: abpUtility_1.L('ThisFieldIsRequired') }],
    emailAddress: [
        { required: true, message: abpUtility_1.L('ThisFieldIsRequired') },
        {
            type: 'email',
            message: abpUtility_1.L('TheInputIsNotValidEMail')
        },
    ]
};
exports["default"] = rules;
