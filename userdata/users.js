var users = [
    { id: 1, name: "userstudent", email: "userstudent@mail.com", password: "student123" },
    { id: 2, name: "userstudent1", email: "userstudent1@mail.com", password: "student111" },
    { id: 3, name: "userteacher", email: "userteacher@mail.com", password: "teacher123" },
];

var checkCredentials = function (username, password) {
    var user = users.find(function (u) {
        return u.name === username && u.password === password;});
    return user

}

exports.checkCredentials = checkCredentials;