import React from 'react';
import ContactButtons from '../Utils/Link/ContactButtons';

const AboutMe = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12">
            {/* Contenedor de la imagen y el botón */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:justify-start mb-8 lg:mb-0">
                <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-100 2xl:h-100 ">
                    <img
                        src="animeprofile.png"
                        alt="Lucas Moreno Corral - Anime Avatar"
                        className="rounded-full shadow-lg object-cover w-full h-full"
                    />
                    {/* Fondo abstracto imagen */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-full blur-sm opacity-50"></div>
                </div>
                {/* Contact Button justo debajo de la imagen */}
                <div className="mt-4">
                    <ContactButtons/>
                </div>
            </div>

            {/* Información */}
            <div className="w-full lg:w-2/3">
                <div className="sm:p-4 md:p-6 rounded-lg border-t-2 border-l-2 border-r-2 border-transparent bg-gradient-to-b to-transparent from-gray-700 ">
                    <h1 className="sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl sm:mb-4 md:mb-8 font-bold text-slate-200 ">
                        Hola, soy <span className="text-amber-400">Lucas Moreno</span>
                    </h1>
                    <p className="sm:text-base md:text-md lg:text-lg xl:text-lg 2xl:text-lg text-gray-300 leading-relaxed text-justify">
                        Soy desarrollador web apasionado por la creación de experiencias digitales únicas, funcionales y centradas en el usuario. Mi enfoque combina habilidades de <strong>FrontEnd</strong> y <strong>BackEnd</strong>, lo que me permite abordar proyectos de manera integral, desde la concepción de interfaces <strong>atractivas</strong> y <strong>responsive</strong>, hasta la implementación de sistemas <strong>robustos</strong> y <strong>escalables</strong>.
                        <br /><br />
                        Mi compromiso con la excelencia técnica se refleja en cada detalle: <strong>diseño intuitivo</strong>, <strong>análisis de datos</strong>, <strong>optimización de rendimiento</strong> y una <strong>comunicación fluida</strong> que garantiza que cada proyecto alcance su máximo potencial. La adaptabilidad y la curiosidad son las claves que me permiten seguir creciendo y explorar nuevas formas de transformar ideas en soluciones tecnológicas reales.
                        <br /><br />
                        Cuando no estoy programando, disfruto aprendiendo sobre tendencias emergentes, perfeccionando mi conocimiento de la programación y explorando cómo la tecnología puede impactar positivamente.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;
