const fName = document.getElementById('frName');
// const btn = document.getElementById('btn');
const in1 = document.querySelector('.in1')
const in2 = document.querySelector('.in2')
const in3 = document.querySelector('.in3')
const in4 = document.querySelector('.in4')
const in5 = document.querySelector('.in5')
const ntg = document.querySelector('.ntg')
const linkFor = document.querySelector('.link-for')


const cbx =document.querySelector('.cbx')
const eror = document.querySelector('.error')
// in1.classList.add('if-have-problem')
// in2.classList.add('if-have-problem')
// in3.classList.add('if-have-problem')
// in4.classList.add('if-have-problem')
// in5.classList.add('if-have-problem')
const loginUser = document.querySelector('.login-user')
const profilUsr = document.querySelector('.profils')
//loginUser.classList.add('hidden1')

profilUsr.classList.add('hidden1')
const userName = document.querySelector('.user-name')
function btn() {
    
   var firstnameInput = fName.value; 
  var  inputVal2 = in2.value
  var  inputVal3 = in3.value
  var  inputVal4 = in4.value
  var  inputVal5 = in5.value

    if( !isNaN(firstnameInput) && firstnameInput.trim() === ''){
        in1.classList.add('if-have-problem')
    }else if( !isNaN(inputVal2) && inputVal2.trim() === ''){
        in2.classList.add('if-have-problem')
    }else if(inputVal3.trim() === ''){
        in3.classList.add('if-have-problem')
    }else if(inputVal4.trim() === '' ){
        in4.classList.add('if-have-problem')
    }else if(inputVal5.trim() === '' || inputVal5 !== inputVal4){
        in5.classList.add('if-have-problem')

    }else{  
        
        in5.classList.remove('if-have-problem')
        ntg.classList.add('hidden')
        linkFor.classList.remove('hidden')
        profilUsr.classList.remove('hidden1')
        loginUser.classList.add('hidden1')
        userName.textContent = `${firstnameInput}_${inputVal2}`

    }
    var   checkbox = cbx.value

    if(!checkbox.checked){
        eror.style.color = 'red'
    }else{
        
//userName.textContent = `${firstnameInput}_${inputVal2}`
        in5.classList.remove('if-have-problem')
        ntg.classList.add('hidden')
        linkFor.classList.remove('hidden')
    console.log(`${firstnameInput}_${inputVal2}`);
    }


// firstnameInput
// inputVal2


}



userName.textContent = 'hello '
// USERS 

