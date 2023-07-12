const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

const testimonials = [
    {
        name: "Hermon F.",
        photoUrl:"https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        text: "Apple has completely surpassed our expectations. Apple is both attractive and highly adaptable. Apple saved my business."
    }

   ,
    {
        name: "Queenie O",
        photoUrl:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHx1c2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60",
        text: "Apple was worth a fortune to my company. This is simply unbelievable! I don't always clop, but when I do, it's because of Apple. Since I invested in Apple I made over 100,000 dollars profits."
    }
    ,
    {
        name: "Evonne W.",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
        text: "Thank You! It's all good. Apple was worth a fortune to my company. Thanks to Apple, we've just launched our 5th website!"
    }
   
];

let index = 0;
updateTestimonial();

function updateTestimonial(){
    
   const {name, photoUrl, text} = testimonials[index];
   imgEl.src = photoUrl;
   textEl.innerText = text;
   nameEl.innerText = name;
   index++;
   if(index === testimonials.length){
       index = 0;
   }

   setTimeout(()=>{
     updateTestimonial();
   }, 5000)
}



