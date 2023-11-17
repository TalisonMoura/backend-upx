module.exports = class ValidateTrait {

    /**
     * @param {string} password
     * @returns boolean
     */
    isValidPassword(password) {

        if (password.length < 8) {
            return false;
        }

        if (!password.match(/[a-zA-Z]/) || !password.match(/[0-9]/)) {
            return false;
        }

        return !(!password.match(/[a-z]/) || !password.match(/[A-Z]/));
    }

    /***
     * @param {string} email
     * @returns boolean
     */
    isValidEmail(email) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);
    }
}