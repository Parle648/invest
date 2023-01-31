const logIn = document.querySelector('.log-in-block'),
      logInBtn = document.querySelector('.link-btn'),
      closeLogInBlock = document.querySelector('.close-log-pop'),
      registrBtn = document.querySelector('.registration-btn'),
      registration = document.querySelector('.registration-block'),
      closeRegistrBtn = document.querySelector('.close-pop')

logInBtn.onclick = function(){
    this.scrollTop = 0
    logIn.classList.add('display');
    document.body.style.overflow='hidden'
    logIn.parentNode.style.display='block'
    scroll(0,0)
}

closeLogInBlock.addEventListener('click', closeLogIn)



const recoverPasswd = document.querySelector('.forgot-passwd')

recoverPasswd.onclick = function(){
    closeLogIn();

}

function closeLogIn(){
    logIn.classList.remove('display')
    document.body.style.overflow='auto'
    logIn.parentNode.style.display='none'
}

// registration pop

registrBtn.onclick = function(event){
    registration.parentNode.style.display='block'
    registration.classList.add('display');
    document.body.style.overflow='hidden'
    scroll(0,0)
}

closeRegistrBtn.onclick = function(){
    registration.parentNode.style.display='none'
    registration.classList.remove('display')
    document.body.style.overflow='auto'
}

//accorderon code
const accordeonBtn = document.querySelectorAll('.plus');

accordeonBtn.forEach(function(e){
    e.onclick = function(event){
        let targetBlock = event.target.parentNode.nextElementSibling;
        
        if(event.target.classList.contains('plus-active')){
            event.target.classList.remove('plus-active')
            targetBlock.classList.remove('active-paragr')
        }
        else{
        accordeonBtn.forEach((i) => {
            i.classList.remove('plus-active')
            i.parentNode.nextElementSibling.classList.remove('active-paragr')
        })

        event.target.classList.toggle('plus-active')
        targetBlock.classList.toggle('active-paragr')
        }
    }

})

//rules pop

const RulePop = document.querySelector('.rules-pop'),
      closeRulesBtn = document.querySelector('.close-rules-pop')

document.querySelector('.rules-btn').onclick = function(){
    RulePop.classList.add('rules-active')
}

closeRulesBtn.onclick = function(){
    RulePop.classList.remove('rules-active')
}