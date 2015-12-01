function addLeadingZeroes(string, digitCount) {

    var zeroString,
        hasLeadingZero,
        hasCorrectLength;

    
    zeroString = '';
    for (var i = 0; i < digitCount - 1; i++) {
      zeroString += '0';
    }
    hasLeadingZero = zeroString + string;

    
    hasCorrectLength = hasLeadingZero.substr(digitCount * -1);

    return hasCorrectLength;
  }

$(document).ready(function(){

    var dateTime,
        milliseconds,
        seconds,
        minutes,
        hours;

    
    var $milliseconds = $('#milliseconds'),
        $seconds = $('#seconds'),
        $minutes = $('#minutes'),
        $hours = $('#hours');

    window.setInterval(function(){

      
      dateTime = new Date();

      
      milliseconds = dateTime.getMilliseconds();
      seconds = dateTime.getSeconds();
      minutes = dateTime.getMinutes();
      hours = dateTime.getHours();

      
      minutes = addLeadingZeroes(minutes, 2);
      seconds = addLeadingZeroes(seconds, 2);
      milliseconds = addLeadingZeroes(milliseconds, 3);


     
      $milliseconds.text(milliseconds);
      $seconds.text(seconds);
      $minutes.text(minutes);
      $hours.text(hours);
    }, 100);

 });
