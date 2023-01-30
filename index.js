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

