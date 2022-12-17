console.log("script runnning...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburg').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');    
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.click').style.display = 'inline'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.click').style.display = 'none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
        
    }
})