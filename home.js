const flow = document.querySelector('.flow')
const singUp = document.querySelector('.singUp')
const gmail = document.querySelector('.gmail')
const password = document.querySelector('.pass')
const problem = document.querySelector('.problem')


const creatD = document.querySelector('.text-creat-note')
 // 
function create(){

  creatD.classList.add('hidden')
  flow.classList.remove('hidden')
   allBox.classList.remove('hidden')
}
problem.classList.add('hidden')

 function singBtn() {
     // Assuming `gmail` is the input element (not the value itself)
     var emailInput = document.querySelector('.gmail'); // Get the input element     var emailValue = emailInput.value; // Get the value of the input
     var passWord = document.querySelector('.pass')
     var passValue = passWord.value
      var emailValue = emailInput.value
     // Check if the email value matches
     if (emailValue === 'largofakhrddin@gmail.com' && passValue === '123456789') {
         flow.classList.add('hidden')
         singUp.classList.add('hidden')
     } else {
         problem.classList.remove('hidden')
     }
    
   
    

}




// notess


const note1 =document.querySelector('.note1')
const note2 =document.querySelector('.note2')
const note3 =document.querySelector('.note3')
const note4 =document.querySelector('.note4')
const note5 =document.querySelector('.note5')
const note6 =document.querySelector('.note6')
const note7 =document.querySelector('.note7')
const note8 =document.querySelector('.note8')
const note9 =document.querySelector('.note9')
const note10 =document.querySelector('.note10')

// add hidden for notess

/*note1.classList.add('hidden')
note2.classList.add('hidden')
note3.classList.add('hidden')
note4.classList.add('hidden')
note5.classList.add('hidden')
note6.classList.add('hidden')
note7.classList.add('hidden')
note8.classList.add('hidden')
note9.classList.add('hidden')
note10.classList.add('hidden')
*/




// note 1
const noteBox1 = document.querySelector('.note-box1')
const infoBox = document.querySelector('.info-box')
const readingBox = document.querySelector('.reading-box')
const widthinfo = document.querySelector('.width-for-info-box')
const widthreading = document.querySelector('.width-for-reading-box')

noteBox1.classList.add('hidden')




function btnOpen(){
    readingBox.classList.remove('hidden')
readingBox.classList.add('width-for-reading-box')
noteBox1.classList.add('width-for-reading-box')
infoBox.classList.add('hidden')


}
function goback(){
    noteBox1.classList.add('width-for-info-box')
infoBox.classList.add('width-for-info-box')
    readingBox.classList.add('hidden')
    infoBox.classList.remove('hidden')
    noteBox1.classList.remove('width-for-reading-box')

}





// inputs



const title = document.querySelector('.title-for-head')
const allBox = document.querySelector('.all-box')
const inputName = document.getElementById('input-for-name')



allBox.classList.add('hidden')

function addtitle(){

let namas = inputName.value
title.textContent = namas
flow.classList.add('hidden')
allBox.classList.add('hidden')
noteBox1.classList.remove('hidden')


}

