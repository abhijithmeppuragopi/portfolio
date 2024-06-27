const activeLinks=document.getElementsByClassName("active-links");
const activeTabs=document.getElementsByClassName("active-tabs");
function opentab(classname){
for(let activelink of activeLinks){
    activelink.classList.remove("active-links");
}
for(let activetab of activeTabs){
    activetab.classList.remove("active-tabs");
}

event.currentTarget.classList.add('active-links');
document.getElementById(classname).classList.add('active-tabs');
}

// function colormode(light){
//     const lightMode=document.getElementById('color');   
//     console.log(lightMode);
//     if(light==="black"){
//         lightMode.classList.remove("white");
//         lightMode.classList.add(light);

//     }else{
//         lightMode.classList.remove("black");
//         lightMode.classList.add(light);

//     }
    
    
// }
// const menu=document.getElementById('#sidebar');
// function open(){
//     menu.style.right="0";
// }
// function close(){
//     menu.style.right="-200px";
// }
const open=document.querySelector('#open');
const close=document.querySelector('#close');

open.addEventListener("click",function(){
    console.log(open.parentElement);
    close.parentNode.style.right='0';
    
});
close.addEventListener("click",function(){
    console.log(open.parentElement);
    close.parentNode.style.right='-200px';
   
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJTqjFGafmXxGfR4zr6GB2XVKAtqmU3h4mEByVkdXzvR_07toz_MALO9m6SJBJWTeeeA/exec'
  const form = document.forms['submit-to-google-sheet']
  const success=document.getElementById('success');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{ 
        success.innerHTML="Message sent successfully"
        setTimeout(() => {
        success.innerHTML=""
      }, 5000);
      form.reset();})
      .catch(error => console.error('Error!', error.message))
  })

  //scroll down animation
  // Define the callback function that will be executed when visibility changes
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is in view!');
      // Perform any additional actions here
      entry.target.classList.add('show');

    }
  });
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(callback);

// Target the element to observe
const target = document.querySelectorAll('.hidden');

// Start observing the target element
target.forEach((entries)=>{
  observer.observe(entries);
})