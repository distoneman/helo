const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        console.log('hit')
        const {username, password} = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user_name({username:username})
        if(userArr.length >= 1) {
            return res.status(200).send({message: "User already exists."})
        } 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user({username: username, password:hash});
        // req.session.user = {
        //     id: newUserArr[0].id, 
        //     username: newUserArr[0].username
        // }
        res.status(200).send({message: 'logged in', userData: newUserArr, loggedIn: true})
    },

    login: async (req, res) => {
        const {username,password}  = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user_name({username: username});
        if(!userArr[0]) {
            return res.status(200).send({message:'Username not found.'});
        }
        const result = bcrypt.compareSync(password, userArr[0].password)
        if(!result) {
            return res.status(401).send({message: 'Password Incorrect.'})
        }
        // req.session.user = {id: accountArr[0].acc_id, email: accountArr[0].acc_email}
        res.status(200).send({message: 'logged in', userData: userArr, loggedIn: true})
    },
}
