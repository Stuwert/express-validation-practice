module.exports = {
  nameIsNotBlank: function(name){
    return notBlank(name) ? true :  "Name cannot be blank"
  },
  emailIsValid: function(email){
    var filtered = email.split('@');
    var bool = "Email is invalid";
    if (filtered.length > 1){
      var com = filtered[1].split('.');
      if (notBlank(filtered[0])){
        if(notBlank(com[0])){
          if(validSuffix(com[1])){
            bool = true;
          }
        }
      }
    }
    return bool;
  },
  phoneIsValid: function(phone){
    var array = phone.split('-');
    var bool;
    if (array.length === 1){
      bool = array[0].match(/\d{10}/) || array[0].match(/\d{11}/);
    }else{
      bool = array[0].match(/\d{3}/) ? true : false;
      bool = bool && array[1].match(/\d{3}/) ? true : false;
      bool = bool && array[2].match(/\d{4}/) ? true : false;
    }
    return bool ? true : 'Phone number is invalid'
  },

}

function notBlank(thing){
  var length = thing.split('').filter(function(item){
    return item === " " ? false : true
  }).length;
  return length > 0 ? true : false;
}

function validSuffix(suffix){
  var bool = false;
  var array = [
    /com/,
    /net/,
    /edu/,
    /org/,
    /it/
  ];
  array.forEach(function(regex){
    if (suffix.match(regex)){
      bool = true;
    }
  })
  return bool;
}
