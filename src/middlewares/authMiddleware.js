const withLogin = (req, res, next) =>{
    if(req.session.user == undefined){
        res.render('./users/login');
    }
    next();
}

const withoutLogin = (req, res, next) =>{
    if(req.session.user){
        res.render('./users/profile', {user: req.session.user});
    }
    next();
}
const adminLogin = (req, res, next) =>{
    // if(req.session.user == undefined && req.session.user.admin != true){
    //     res.send('No sos admin pa');
    // }
    next();
    
}
    
    
    

    
    
    

    
    
    


module.exports = {withLogin, withoutLogin, adminLogin};