"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getAssigned;

var _firebaseConfig = require("../config/firebaseConfig");

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAssigned(dispatch, uid) {
    var db = _firebaseConfig2.default.firestore();

    db.collection("tasks").where("volunteerUid", "==", uid).where("timestamp", ">", new Date()).get().then(function (querySnapshot) {
        var tasks = [];
        querySnapshot.forEach(function (doc) {
            var task = doc.data();
            task.id = doc.id;
            tasks.push(task);
        });
        dispatch({ type: 'ASSIGNEDTASKS', tasks: tasks });
    });
}