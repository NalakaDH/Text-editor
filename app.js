function bold()   {
    document.execCommand('bold', true , null) 
 }
 function underline()   {
    document.execCommand('underline', true , null) 
 }
 function italic()   {
    document.execCommand('italic', true , null) 
 } 
 $('.font-color').on('click', function() {
    var selection = window.getSelection()
    var highlightedText = selection.toString()
    var span = "<span style='color: red'>" + highlightedText + "</span>"
    var text = document.getElementById('editor').innerHTML
    document.getElementById('editor').innerHTML = text.replace(highlightedText, span)
})
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

  document.querySelectorAll ('#editor').forEach(function (element) {
    element.addEventListener('input', function() {
        currentStep++
        if (currentStep < contentHistory.length){
            contentHistory = contentHistory.slice(0, currentStep)
        }

        contentHistory.push(document.getElementById('editor').innerHTML)
    })
 })