var progress=document.querySelector('input[name="experience"]')
progress.onchange=function(){
    document.getElementById('ertek').innerHTML=progress.value+' év'
}
console.log(progress)