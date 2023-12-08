function bold()   {
    document.execCommand('bold', true , null) 
 }
 function underline()   {
    document.execCommand('underline', true , null) 
 }
 function italic()   {
    document.execCommand('italic', true , null) 
 } 
 $('.dropdown-menu .color-option').on('mousedown', function () {
    var fontColor = this.dataset.color;
    document.execCommand('foreColor', false, fontColor);
    document.getElementById('editor').focus();
    return false; // Prevents the button from losing focus
 });
$('.left').on('click',function(){
    document.getElementById('editor').style.textAlign = 'left '
 }) 
 $('.center').on('click',function(){
    document.getElementById('editor').style.textAlign = 'center '
 }) 
 $('.right').on('click',function(){
    document.getElementById('editor').style.textAlign = 'right '   
 }) 

  $('.justify').on('click', function() {
    document.getElementById('editor').style.textAlign = 'justify '
  })
  var contentHistory = [""]
  var currentStep = 0
 
  function undo() {
     if (currentStep > 0) {
         currentStep--
         if (contentHistory[currentStep] != undefined) {
             document.getElementById('editor').innerHTML = contentHistory[currentStep]
         }
     }
  }

  function redo() {
    currentStep++
        if (contentHistory[currentStep] != undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep]
        }
 }

  document.querySelectorAll ('#editor').forEach(function (element) {
    element.addEventListener('input', function() {
        currentStep++
        if (currentStep < contentHistory.length){
            contentHistory = contentHistory.slice(0, currentStep)
        }

        contentHistory.push(document.getElementById('editor').innerHTML)
    })
 })