const flow = document.querySelector('.flow')
const singUp = document.querySelector('.singUp')
const gmail = document.querySelector('.gmail')
const password = document.querySelector('.pass')
const problem = document.querySelector('.problem')

singUp.classList.add('hidden')
flow.classList.add('hidden')
const creatD = document.querySelector('.text-creat-note')
 // 
function create(){

  creatD.classList.add('hidden')
  flow.classList.remove('hidden')
   allBox.classList.remove('hidden')
}
problem.classList.add('hidden')

 function singBtn() {
     
     var emailInput = document.querySelector('.gmail'); 
     var passWord = document.querySelector('.pass')
     var passValue = passWord.value
      var emailValue = emailInput.value

     if (emailValue === 'largofakhrddin@gmail.com' && passValue === 'fakhwiss') {
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
const addPo =document.querySelector('.add-posi-ab')
noteBox1.classList.add('hidden')
//addPo.classList.add('hidden')
infoBox.classList.add('hidden')
//readingBox.classList.remove('hidden')

function btnOpen(){
    readingBox.classList.remove('hidden')
readingBox.classList.add('width-for-reading-box')
noteBox1.classList.add('width-for-reading-box')
infoBox.classList.add('hidden')
//addPo.classList.remove('hidden')

}
function goback(){
    noteBox1.classList.add('width-for-info-box')
infoBox.classList.add('width-for-info-box')
    readingBox.classList.add('hidden')
    infoBox.classList.remove('hidden')
    noteBox1.classList.remove('width-for-reading-box')
    //addPo.classList.add('hidden')
}





// inputs



const title = document.querySelector('.title-for-head')
const allBox = document.querySelector('.all-box')
const inputName = document.getElementById('input-for-name')

const proInfo = document.querySelector('.pro-info')

proInfo.classList.add('hidden')
allBox.classList.add('hidden')

function addtitle(){

let namas = inputName.value


let in1 = inputInfo1.value
let in2 = inputInfo2.value
let in3 = inputInfo3.value

//let inputNtg = document.querySelector('.input-ntg').value
if(in1 === '' || in2 === '' || in3 === ''){
proInfo.classList.remove('hidden')
}else{

title.textContent = namas
flow.classList.add('hidden')
allBox.classList.add('hidden')
noteBox1.classList.remove('hidden')
info1.textContent = in1
info2.textContent = in2
info3.textContent = in3
}

}


const inputInfo1 = document.getElementById('input-info1')
const inputInfo2 = document.getElementById('input-info2')
const inputInfo3 = document.getElementById('input-info3')

const info1 = document.querySelector('.li-for-info1')
const info2 = document.querySelector('.li-for-info2')
const info3 = document.querySelector('.li-for-info3')

infoBox.classList.remove('hidden')


/// addcontent()


function addcontent(){

    noteBox1.classList.add('width-for-info-box')
    infoBox.classList.add('width-for-info-box')
        readingBox.classList.add('hidden')
        infoBox.classList.remove('hidden')
        noteBox1.classList.remove('width-for-reading-box')
        addPo.classList.add('hidden')
}

// const fontss = document.querySelector('.fontss')
// const inp1 =document.querySelector('.inpf1')
// const removeBTn = document.querySelector('.remov')
// const fint1 =document.querySelector('.font-f1')
// const fint2 =document.querySelector('.font-f2')
// const fint3 =document.querySelector('.font-f3')

// // remove
// function removeBtn(){
//     removeBTn.classList.toggle('hidden')
// fontss.classList.toggle('hidden')
// flow.classList.toggle('hidden')
// }

// function font(){

// removeBTn.classList.remove('hidden')
// fontss.classList.toggle('hidden')
// flow.classList.toggle('hidden')

// }
// removeBTn.classList.add('hidden')


// function f1(){
// inp1.classList.add('font-f1')
// fontss.classList.add('hidden')
// textFont.classList.remove('font-f2')
// textFont.classList.remove('font-f3')
// }

// function f2(){
//     inp1.classList.add('font-f2')
// fontss.classList.add('hidden')
// textFont.classList.remove('font-f1')
// }
// function f3(){
//     inp1.classList.add('font-f3')
// fontss.classList.add('hidden')
// textFont.classList.remove('font-f1')
// textFont.classList.remove('font-f2')
// }t.remove('font-f3')
// textFont.classLis