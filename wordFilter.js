;(function(w,u){
  
  var regex,
      regex_string;
      //f_word_regex_string = '([^\\s]*([f]+[^A-Za-z0-9]*[u]+[^A-Za-z0-9]*([c]+)?[^A-Za-z0-9]*[k]+)[^\\s]*)',
      //f_word_regex = new RegExp(f_word_regex_string,'gi'),
      //add_f_word = false,
      //f_word_test = function(str){ var reg = new RegExp(f_word_regex,'gi') return reg.test(str) };
  
  var ltr = {
    a : "a4@",
    b : "b6",
    c : "c",
    d : "d",
    e : "e3£",
    f : "f",
    g : "g6",
    h : "h",
    i : "i\\|1\\!ijl",
    j : "j\\|1\\!ijl",
    k : "k",
    l : "l\\|1\\!ijl",
    m : "m",
    n : "n",
    o : "o0",
    p : "p",
    q : "q",
    r : "r7",
    s : "s\\\$5",
    t : "t7",
    u : "u",
    v : "v",
    w : "w",
    x : "x",
    y : "y",
    z : "z5"
  }
  
  function _test(str) {
    regex = new RegExp(regex_string,'gi');
    console.log(str.match(regex));
    return regex.test(str);
  }
  
  function Filter(A){
    regex_string = '(';
    
    console.log(typeof A);
    
    switch( typeof A ) {
      case 'string':
          regex_string += wordReg(A);
        break;
      case 'object':
      case 'array':
        for(i=0;i<A.length;i++) {
          A[i] = A[i].replace(/[^a-z]/gi,'');
          if(i) regex_string += '|';
          regex_string += '(' + wordReg(A[i]) + ')';
        }
        break;
    }
    
    regex_string += ')+[^A-Za-z0-9]|$';
    
    this.regex_string = regex_string;
    this.wordArray = A;
    //this.regex = new RegExp(regex_string,'gi');
    this.test = _test;
  }
  
  function wordReg(str) {
    var word = str.split(''),
        str = '';
    for( l in word ) {
      str +=  '[' +  ltr[ word[l] ] + ']+';
      str += l<word.length-1? '[^A-Za-z0-9]*' : '';
    }
    return str;
  }
  
  w.Filter = Filter;
})(window,undefined);

var filter = new Filter(['filter','these','words']);