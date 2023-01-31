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
}
registrBtn.onclick = function(event){
    registration.classList.add('display');
    window.pageYOffset='0'
}


closeLogInBlock.addEventListener('click', function(){
    logIn.classList.remove('display')
    document.body.style.overflow='auto'
})

closeRegistrBtn.onclick = function(){
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