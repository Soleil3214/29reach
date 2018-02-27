var fatp;
   fatp = function(height, weight) {

      return ((weight - (height * height * 22.0029))/(height * height * 22.0029) * 100);
   };
   alert(fatp(1.9, 92));
