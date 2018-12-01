/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: function (req, res) {

        let username = req.param('username'),

        password = req.param('password')
            
        if(!username){
        
        return res.badRequest({err:'Invalid bro'});
        
        }
        
        User.create({
        
        username : username,
        
        password : password,
        
        })
        
        .then(_user => {
        
        // if(!_user){
        //     return res.serverError({err:'Unable to create user'});
        // } 
        
        return res.ok(_user);
        
        })
        
        .catch(err => res.serverError(err.message));
        
        }

};

