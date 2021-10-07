const UserModel = function(id = null,name=null,identification,password){
    this.id = id;
    this.identification = identification;
    this.password = password;
    this.name= name;
};
module.exports = UserModel;
