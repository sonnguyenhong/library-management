const { USER_ADMIN, USER_LIBRARIAN } = require("../constants/schema.constants");
const { AuthFailureError } = require("../cores/error.response")

const isAdmin = (req, res, next) => {
    if(!req.jobTitle || req.jobTitle !== USER_ADMIN) {
        throw new AuthFailureError('Authentication Error: You do not have permission!');
    }
    next();
}

const isLibrarian = (req, res, next) => {
    if(!req.jobTitle || req.jobTitle !== USER_LIBRARIAN) {
        throw new AuthFailureError('Authentication Error: You do not have permission!');    
    }
    next();
}

module.exports = {
    isAdmin,
    isLibrarian
}