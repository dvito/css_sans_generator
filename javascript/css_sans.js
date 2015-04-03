CssSans = {}

CssSans.mapLetter = function(inputLetter){
  if(inputLetter.toUpperCase() != inputLetter.toLowerCase() )
    return "<div class=\""+ inputLetter.toUpperCase() + "\"></div>";
  else if(inputLetter.trim() !== '')
    return "<div class=\"space\"></div>";
  else
    return "";
}

CssSans.convertText = function(inputText){
  outputContent = [];
  for(var i=0; i < inputText.length; i++){
    outputContent.push(CssSans.mapLetter(""+inputText.charAt(i)));
  }
  return outputContent.join("");
}