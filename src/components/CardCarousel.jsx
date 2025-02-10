import CardLanding from "./CardLanding";
import Slider from "react-slick";

const cards = [
    {
        icon: "bx bxs-user-circle",
        title: "Perfil de Usuario",
        content: "Gestiona tu información personal, preferencias y seguridad.",
    },
    {
        icon: "bx bx-star",
        title: "Reseñas",
        content: "Lee las opiniones de otros usuarios y comparte tus experiencias.",
    },
    {
        icon: "bx bx-bell",
        title: "Notificaciones",
        content: "Recibe alertas sobre nuevas funciones, promociones y actualizaciones importantes.",
    },
    {
        icon: "bx bx-cog",
        title: "Configuración",
        content: "Personaliza la aplicación según tus necesidades y preferencias.",
    },
    {
        icon: "bx bx-question-mark",
        title: "Ayuda y Soporte",
        content: "Encuentra respuestas a preguntas frecuentes y contacta con nuestro equipo de soporte.",
    },
    {
        icon: "bx bx-heart",
        title: "Favoritos",
        content: "Guarda tus productos, servicios o contenidos favoritos para acceder a ellos rápidamente.",
    },
    {
        icon: "bx bx-cart",
        title: "Carrito de Compras",
        content: "Revisa los artículos que has añadido a tu carrito y finaliza tu compra.",
    },
    {
        icon: "bx bx-gift",
        title: "Promociones",
        content: "Descubre ofertas especiales, descuentos y promociones exclusivas.",
    },
    {
        icon: "bx bx-search",
        title: "Buscar",
        content: "Encuentra rápidamente lo que buscas dentro de la aplicación.",
    },
];

function CardCarousel() {
    const settings = {

        speed: 500,
        slidesToShow: 4,

        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1413,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,



                }
            }
        ]
    };
    return (
        <div className="w-full max-w-[90%] mx-auto  p-8 "> {/* Better width control */}
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className=""> {/* Adds spacing between slides */}
                        <CardLanding {...card} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CardCarousel;
