var UserProfile = (function() {
  var name = "";
  var email = "";
  var login = false;

  var getName = function() {
    return this.name;    // Or pull this from cookie/localStorage
  };

  var getEmail = function() {
    return this.email;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    this.name = name;     
    // Also set this in cookie/localStorage
  };

  var setEmail = function(email) {
    this.email = email;     
    // Also set this in cookie/localStorage
  };

  var setLogin = function(status){
    this.login = status
  }
  var getLogin = function(){
    return this.login
  }

  return {
    getName: getName,
    setName: setName,
    setEmail: setEmail,
    getEmail: getEmail,
    setLogin: setLogin,
    getLogin: getLogin
  }

})();

export default UserProfile;