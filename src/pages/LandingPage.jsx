

import CardCarousel from "../components/CardCarousel";
import CarouselTest from "../components/Carousel-Test.jsx";
function LandingPage() {

  return (
    <>
      <div className="flex flex-col-reverse  lg:flex-row items-center gap-10 lg:py-16 justify-center py-3 px-6 ">
        <div className="flex flex-col items-center lg:items-center gap-6 text-center lg:text-left">
          <h1 className="font-bold text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight">
            Feedback Anónimo, Cambios Reales
          </h1>

          <h3 className="font-extralight text-xl sm:text-2xl lg:text-3xl text-black opacity-80 pb-2.5">
            Tu privacidad es nuestra prioridad. Comparte tus reportes de manera
            anónima y ayuda a construir una mejor experiencia educativa.
          </h3>

          <button
            type="button"
            className="w-full sm:w-auto  text-white bg-[var(--primary-color)] transition-colors duration-500 ease-in-out focus:outline-none font-medium rounded-full text-base px-7 py-2 hover:bg-white hover:text-[var(--primary-color)] hover:scale-105 hover:shadow-md hover:cursor-pointer"
          >
            Comienza
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1529946825183-536c6317f60e?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Educational Background"
          className="w-80 h-80 lg:w-110 lg:h-110 xl:w-150 xl:h-150 shadow-lg mt-8 lg:mt-0 object-cover rounded-full"
        />
      </div>
      
     <div className="p-8 mt-20 ">
<CarouselTest/>
     </div>

    </>
  );
}

export default LandingPage;

