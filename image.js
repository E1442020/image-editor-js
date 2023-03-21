let img =document.getElementById('img');
let imgbox =document.querySelector('.img-box');

let upload =document.getElementById('upload');



let saturation =document.getElementById('saturation');
let contrast = document.getElementById('contrast');
let brightness =document.getElementById('brightness');
let sepia =document.getElementById('sepia');
let grayscale =document.getElementById('grayscale');
let blur =document.getElementById('blur');
let huerotate =document.getElementById('hue-rotate');


let download =document.getElementById('download');
let reset =document.getElementById('reset');


// reset value and filler when upload new image
function resetVlue(){
    img.style.filter='none';
    saturation.value='100'
    contrast.value='100'
    brightness.value='100'
    sepia.value='0'
    grayscale.value='0'
    blur.value='0'
    huerotate.value='0'
}


// reset value and filler when click reset button
reset.onclick=function(){
    img.style.filter='none';
    saturation.value='100'
    contrast.value='100'
    brightness.value='100'
    sepia.value='0'
    grayscale.value='0'
    blur.value='0'
    huerotate.value='0'

}

window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    imgbox.style.display='none';
}


upload.onchange=function(){
    resetVlue()
    download.style.display='block';
    reset.style.display='block';
    imgbox.style.display='block';
    //read file
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src= file.result;
    }
}



let filters=document.querySelectorAll('input');
filters.forEach( filter => {
    filter.addEventListener('input' ,function(){

        
    img.style.filter=`
    saturate(${saturation.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)
  
  `
       
    })
})



