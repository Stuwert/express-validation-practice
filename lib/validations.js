module.exports = {
  nameIsNotBlank: function(name){
    var length = name.split('').filter(function(item){
      return item === " " ? false : true
    }).length;
    console.log(name);
    return length > 0 ? '' : "Name cannot be blank"
  },
  emailIsValid: function(email){
    var filtered = email.split('').filter(function(item){
      return item === ' ' ? false : true;
    })
    var at = filtered.filter(function(item){
      return item === '@' ? true : false;
    })
    return filtered.length > 0 && at.length === 1 ? '' : 'Email is invalid'
  },
  phoneIsValid: function(phone){
    var array = phone.split('-');
    var bool;
    bool = array[0].match(/\d{3}/) ? true : false;
    bool = bool && array[1].match(/\d{3}/) ? true : false;
    bool = bool && array[2].match(/\d{4}/) ? true : false;
    return bool ? '' : 'Phone number is invalid'
  }
}
