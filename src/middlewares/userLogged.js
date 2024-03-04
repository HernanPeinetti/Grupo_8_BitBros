const { User } = require("../database/models")

const userLoggedMiddelware = async (req, res, next) => {
    try {
        if (req.cookies.rememberUser !== undefined && req.session.user === undefined) {
            const userFound = await User.findOne({
                include: [{ association: "user_type" }],
                where: {
                    email: req.cookies.rememberUser,
                    
                }
            })

            if (userFound) {
                delete userFound.dataValues.password;
                delete userFound._previousDataValues.password;

                req.session.user = userFound;
            }
        }
        
        res.locals.user = req.session.user
        next();
    } catch (error) {
        console.log(error)
    }

};

module.exports = userLoggedMiddelware;