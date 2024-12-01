const AuthenticationServices = {
    login: async (email, password) => {
        try {
            //check if the user exists
            //check if the password is correct
            //generate a token
            //return the token
            
        } catch (error) {
            throw new Error(error);
        }
    },
    REGISTER: async (name, mail, password, district) => {
        try {
            //check if the user exists
            //check if the password is correct
            //generate a token
            //return the token
            
        } catch (error) {
            throw new Error(error);
        }
    },
    logout: async () => {
        try {
            //clear the token
        } catch (error) {
            throw new Error(error);
        }
    },
    isAuthenticated: () => {
        //check if the token is valid
        //return true or false
    },
    getUser: () => {
        //return the user
    },
    getToken: () => {
        //return the token
    },
    getRole: () => {
        //return the role
    },
    getRefreshToken: () => {
        //validate the token
        //generate a new token
        //return the token
    },
}