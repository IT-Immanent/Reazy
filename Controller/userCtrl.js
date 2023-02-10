const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateRegister = require("../Validations/registerValidation");
const validateLogin = require("../Validations/validateLogin");


const userCtrl = {

    // REgistering user..
    register: async (req, res) => {
        try {
            const { errors, isValid } = validateRegister(req.body);
            // Check Validation
            if (!isValid) {
                return res.json({ status: 0, errors });
            }
            const { full_name, phone, email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                return res.json({
                    status: 0,
                    errors: { email: "email already registered" },
                });
            }
            const passwordhash = await bcrypt.hash(password, 10);

            let newUser = new User({
                full_name,
                phone,
                email,
                password: passwordhash
            });
            await newUser.save();

            return res.json({
                // userName: `Hey '${full_name}' you are successfully registered`,
                status: 1,
                msg: `Hey '${full_name}' you are successfully registered`,
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Login user
    login: async (req, res) => {
        try {
            const { errors, isValid } = validateLogin(req.body);
            // Check Validation
            if (!isValid) {
                return res.json({ status: 0, errors });
            }
            const { email, password } = req.body;
            /** Fetch user from MongoDB by email */
            const user = await User.findOne({ email });

            if (!user) {
                return res.json({
                    status: 0,
                    errors: { email: "you are not registered *" },
                });
            }

            /** Authentication Mechanism: match user password */
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.json({
                    status: 0,
                    errors: { password: "Invalid Password, please try again" },
                });
            }

            /** Generate jwt */
            //create jsonwebtoken for authentication
            const accesstoken = createAccessToken({ id: user._id });
            const refreshtoken = createRefreshToken({ id: user._id });

            /** Set refresh token cookie */
            var token = "refreshtoken";
            let maxage = 8 * 60 * 60 * 1000;
            res.cookie("refreshtoken", refreshtoken, {
                httpOnly: true,
                path: "/api/user/refresh_token",
                maxAge: maxage, //user will be logged out after for 8 hrs
            });

            /** Send access token in response body */
            return res.json({
                token: "refreshtoken",
                accesstoken: accesstoken,
                // user: {
                //     ...user._doc,
                //     password: " ",
                // },
                status: 1,
                // role: user.role,
                msg: `Hey ${user.full_name} you are successfully Logged in`,
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },


    // implementing Google Login
    loginWithGoogle: async (req, res) => {
        try {

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // generating users refresh token
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) {
                return res.json({ status: 0, msg: "please login first" });
            }
            //Verifying jwt token
            jwt.verify(
                rf_token,
                process.env.REFRESH_TOKEN_SECRET,
                async (err, result) => {
                    if (err) {
                        return res.json({
                            status: 0,
                            msg: "an error occured while verifying referesh token",
                        });
                    }
                    if (!result) {
                        return res.json({ status: 0, msg: "user does not exist" });
                    }
                    const user = await User.findById(result.id);
                    let access_token;
                    if (user) {
                        access_token = createAccessToken({ id: user._id });
                    } else {
                        return res.json({ status: 0, msg: "error occured" });
                    }
                    res.json({
                        status: 1,
                        access_token: access_token,
                        // role: user.role,
                        user: {
                            ...user._doc,
                            password: " ",
                        },
                    });
                }
            );
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },


    // will be forget password function
    forgotPassword: async (req, res) => {
        try {

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // stripe payment integration
    propertyPayment: async (req, res) => {
        try {

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }



};

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" })
};
const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "3d" });
};

module.exports = userCtrl;