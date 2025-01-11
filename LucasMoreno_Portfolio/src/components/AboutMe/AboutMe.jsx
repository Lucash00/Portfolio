import React from 'react';
import ContactButtons from '../Utils/Link/ContactButtons';

const AboutMe = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12">
            {/* Contenedor de la imagen y el botón */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:justify-start mb-8 md:mb-0">
                <div className="relative w-60 h-60 md:w-72 md:h-72">
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
            <div className="w-full md:w-2/3">
                <div className="rounded-lg border-t-2 border-l-2 border-r-2 border-transparent bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700 dark:to-transparent p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-200 mb-8">
                        Hola, soy <span className="text-amber-400">Lucas Moreno</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify whitespace-break-spaces">
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
