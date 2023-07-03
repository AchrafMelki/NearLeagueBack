class User {
    constructor(id, username, email, password, role, jwtToken) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.jwtToken = jwtToken;
    }
}
module.exports = { User };

