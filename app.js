let dot = document.querySelector('.material-icons')
let users = document.querySelectorAll('.user')
let counter = document.querySelector('.count')
let markAllAsRead = document.querySelector('.mark')


let notificationNumber = 0
users.forEach(user => {
    user.addEventListener('click', function(){
        if(notificationNumber < 0){
            notificationNumber = 0
        }
        user.classList.toggle('userBackground')
        if(user.classList.contains('userBackground')){
            notificationNumber += 1

        }else{
            notificationNumber -= 1

        }
        counter.textContent = notificationNumber
    })
});

markAllAsRead.addEventListener('click', ()=>{
    notificationNumber = 0
    counter.textContent = notificationNumber
    users.forEach(user => {
        user.classList.remove('userBackground')
    })
})