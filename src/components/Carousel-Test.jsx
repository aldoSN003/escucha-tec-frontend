function CarouselTest(){
    var swiper = new Swiper(".fraction-slide-carousel", {
        loop: true,
        fraction: true,
        navigation: {
          nextEl: ".fraction-slide-carousel .swiper-button-next",
          prevEl: ".fraction-slide-carousel .swiper-button-prev",
        },
        pagination: {
          el: '.fraction-slide-carousel .swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function(number) {
            return number;
          }
        },
        });
return(

  
    <div class="w-full relative">
    <div class="swiper centered-slide-carousel swiper-container relative ">
    <div class="swiper-wrapper">
     <div class="swiper-slide">
       <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
         <span class="text-3xl font-semibold text-indigo-600">Slide 1 </span>
       </div>
     </div>
     <div class="swiper-slide">
       <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
         <span class="text-3xl font-semibold text-indigo-600">Slide 2 </span>
       </div>
     </div>
     <div class="swiper-slide">
       <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
         <span class="text-3xl font-semibold text-indigo-600">Slide 3 </span>
       </div>
     </div>
     <div class="swiper-slide">
       <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
         <span class="text-3xl font-semibold text-indigo-600">Slide 4 </span>
       </div>
     </div>
     <div class="swiper-slide">
       <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
         <span class="text-3xl font-semibold text-indigo-600">Slide 5 </span>
       </div>
     </div>
     <div class="swiper-slide">
       <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
         <span class="text-3xl font-semibold text-indigo-600">Slide 6 </span>
       </div>
     </div>
    </div>
    <div class="swiper-pagination "></div>
    </div>
    </div>

);
}

export default  CarouselTest;