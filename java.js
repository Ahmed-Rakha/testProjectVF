const cards=[
    {
        card:1,
        title: 'Fibra y móvil con un',
        descripion:"dispositivo GRATIS y lo último de Vodafone",
        img:'images/Image-HB-1-1.jpg'
    },

    {
        card:2,
        title: 'yu Fibra 300MB',
        descripion:"por 27€/mes. sin permanencia",
        img:'images/Desktop-Image-HB-2.jpg'
    },

    {
        card:3,
        title: 'Datos y minutos ilimitados',
        descripion:"por 24€/mes. sin permanencia",
        img:'images/Image-HB-3-1.jpg'
    },

    {
        card:4,
        title: 'Llévate un dispositivo',
        descripion:"GRATIS con tu tarifa de Fibra y movil",
        img:'images/desktop-hb-558-BTS-DisposGRATIS.jpg'
    },
    {
        card:5,
        title: 'Nuevo Iphone 15 pro',
        descripion:"Resérvalo ya",
        img:'images/Desktop-Image-HB-5.jpg'
    },
];

let title= document.querySelector('.title');
let descripion= document.querySelector('.descripion');
let img= document.querySelector('.img');
let cardito1=document.querySelector(".cardito1");
let cardito2=document.querySelector(".cardito2");
let cardito3=document.querySelector(".cardito3");
let cardito4=document.querySelector(".cardito4");
let cardito5=document.querySelector(".cardito5");
let customDivBorder= document.querySelectorAll('.custom-div-border');

let next=document.querySelector(".next");
let prev= document.querySelector(".prev");
let counter=1;

next.addEventListener('click',function(){
    if(counter > cards.length-1){
        counter=0
    }
    showReview();

})
prev.addEventListener('click',function(){
    counter--;
    if(counter < 0){
        counter=cards.length-1;
    }
    showReview2();

})
function showReview(){

    title.textContent=cards[counter].title;
    descripion.textContent=cards[counter].descripion;
    img.src=cards[counter].img;
    counter++;
}
function showReview2(){

        title.textContent=cards[counter].title;
        descripion.textContent=cards[counter].descripion;
        img.src=cards[counter].img;
}

cardito1.addEventListener('click',function(){
    title.textContent=cards[0].title;
    descripion.textContent=cards[0].descripion;
    img.src=cards[0].img;
    // afterPseudo.backgroundColor='red';

})
cardito2.addEventListener('click',function(){
    title.textContent=cards[1].title;
    descripion.textContent=cards[1].descripion;
    img.src=cards[1].img;

})
cardito3.addEventListener('click',function(){
    title.textContent=cards[2].title;
    descripion.textContent=cards[2].descripion;
    img.src=cards[2].img;

})
cardito4.addEventListener('click',function(){
    title.textContent=cards[3].title;
    descripion.textContent=cards[3].descripion;
    img.src=cards[3].img;

})
cardito5.addEventListener('click',function(){
    title.textContent=cards[4].title;
    descripion.textContent=cards[4].descripion;
    img.src=cards[4].img;

})
// for (let counter=0;counter<cards.length;counter++)