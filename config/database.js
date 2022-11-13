// config/database.js
const dbName = 'tierList'
const userName = 'jerry'
const passWord = 'jerry'

module.exports = {
    'url' : `mongodb+srv://${userName}:${passWord}@cluster0.sqkte.mongodb.net/${dbName}?retryWrites=true&w=majority`, 
    'dbName': 'tierList'
};
