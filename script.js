const navbar = document.querySelector('nav');
const button = document.querySelector('nav .button');
let isOpened = false;
button.addEventListener('click', () =>{
    if(isOpened){
        navbar.style.backgroundColor = 'hsla(1, 0%,0%,0)';
    navbar.style.left = '-200px';
    isOpened = false;
    }else{
        navbar.style.backgroundColor = 'hsla(1, 0%,0%,.5)';
        navbar.style.left = '0';
        isOpened = true;
    }   
   

    
})

