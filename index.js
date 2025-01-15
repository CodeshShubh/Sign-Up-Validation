document.addEventListener('DOMContentLoaded', ()=>{


let email = document.getElementById('email');
let password = document.getElementById('password')

email.addEventListener('change', ()=>{
    let paragraph = document.getElementById('email_para');
    if(email.value.length>2 && (email.value).includes('@') && (email.value).includes('.') ){
        
        paragraph.style.display ="block"
        paragraph.innerText = `Looking good 😊`
        paragraph.style.color = 'green'
          
    }else{
        paragraph.style.color = 'red'
        paragraph.style.display='block';
       
    }
})

 password.addEventListener('change', ()=>{
    let paragraph2 = document.getElementById('password_para');
    if((password.value.length)>8){
        paragraph2.style.display='block'
        paragraph2.innerText= `Looking good 😊`
        paragraph2.style.color = 'green'
    }else{
        paragraph2.style.color = 'red'
        paragraph2.style.display='block';
    }
 })

 let btn = document.getElementById('btn');
 btn.addEventListener('click', (e)=>{
    e.preventDefault(); 
      let confirmation = confirm('Are you sure you want to submit?');
      if(confirmation && email.value !=='' && password.value!=='') {
        alert('Successful signup!');
       let form =  document.querySelector('form');
    //    form.style.display = 'none';
       form.innerHTML = `<h1>Successful signup!</h1>
        <button type='submit'>Go Home</button>`
    }else{
        alert('Please fill email id and password both')
    }

 });

});

