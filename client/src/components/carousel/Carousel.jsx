import campo1 from '../../assets/campos/0d83f4474c77d94966d16c8eccf6c92d--white-cottage-argentina.jpg'
import casa1 from '../../assets/casas/cochera-de-losa-de-concreto-y-vigas-metalicas_86210.webp'
import casa2 from '../../assets/casas/entre_rios_2_0.jpg'
import casa3 from '../../assets/casas/Viviendas-para-Villa-Elisa-Gestiones-Foto-ilustrativa.jpg'
import depto1 from '../../assets/depto/1855605248.jpg'
import depto2 from '../../assets/depto/13567500386008455317295260924305744512737901385624467496417857277669530359761.jpg'
import depto3 from '../../assets/depto/29945929160403679706717581221071594015050933931229311061694613781538667915511.jpg'
import depto4 from '../../assets/depto/N3II5DMMINHLDAREU5ZTA66IIU.avif'




export default function Carousel() {
  return (

    <div id="default-carousel" class="relative w-full" data-carousel="static">
      <div class="relative h-56 overflow-hidden md:h-[70vh]">
        {/* <!-- Item 1 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={campo1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={casa1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={casa2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={casa3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 6 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item="active">
          <img src={depto1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 7 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={depto2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 8 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={depto3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 9 --> */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
          <img src={depto4} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

  )
}