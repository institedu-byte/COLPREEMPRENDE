
document.addEventListener('DOMContentLoaded', () => {  

    const emprendimientos = [  
        {"nombre": "Punto TiTi", "tipo": "ARTESANÍAS", "propositos": "Recrear con amor los muñecos preferidos de nuestros clientes", "slogan": "Dónde vive tu amigurumis", "descripcion": "Crochet", "precio": "Desde 4.000 en adelante", "canales": "Redes sociales", "proyeccion": "Enseñar para calmar la ansiedad y depresión de una forma sana", "integrantes": "María Paula Quesada Julio", "grado": "SEGUNDO", "email": "puntotiti04@gmail.com", "contacto": "3125644846"},  
        {"nombre": "JJ DONUTS", "tipo": "GASTRONOMICO", "propositos": "Endulzarte el día", "slogan": "Mini donas que alegran el corazón", "descripcion": "Mini donas", "precio": "Desde 2000 hasta 3500", "canales": "WhatsApp", "proyeccion": "Crecer en la venta de mini donas", "integrantes": "Juan Jose Velasquez Quesada", "grado": "SEGUNDO", "email": "juanvelasquez@iepresoca.edu.co", "contacto": "3125644846"},  
        {"nombre": "Kumis.con", "tipo": "GASTRONOMICO", "propositos": "Dar a conocer el producto y comercialización.", "slogan": "Con Kumis.con comes sano y vives bien.", "descripcion": "Materiales: Leche y probióticos. Elaboración: Pasteurización, aplicación del cultivo, maduración y preparación.", "precio": "Vaso 7 onz: 3.00, Litro $12.000", "canales": "Redes sociales y feria", "proyeccion": "Posicionmiento en el mercado.", "integrantes": "Juan Francisco Galeano, Francisco Galeano Torrado, Paola Gisela Mendoza", "grado": "N/A", "email": "paolla24@hotmail.com", "contacto": "3188709922"},  
        {"nombre": "Dulcecitos Luciana", "tipo": "GASTRONOMICO", "propositos": "Compartir momentos de alegría a través de tortas elaborados con amor.", "slogan": "Endulzando corazónes", "descripcion": "Tortas genoveses con ingredientes de calidad, preparación artesanal.", "precio": "$4.000", "canales": "WhatsApp, instagram y feria", "proyeccion": "Crecer en el mercado local y consolidar la marca.", "integrantes": "Luciana Vasquez (Fundadora), Luisa Ayala (Apoyo logístico)", "grado": "CUARTO", "email": "ayalaluisa207@gmail.com", "contacto": "3003132293"},  
        {"nombre": "Empanadas fusión", "tipo": "GASTRONOMICO", "propositos": "Mezclar la tradición de la empanada colombiana y argentina.", "slogan": "Sabores que se mezclan y conquistan.", "descripcion": "Bajas en grasas y altas en proteína, sin gluten. Doradas por fuera, jugosas por dentro.", "precio": "$5.000", "canales": "Cocina oculta (WhatsApp, Instagram)", "proyeccion": "Tener punto de atención y fabricación.", "integrantes": "Paola Marcela Reyes, Nicolás Meza Reyes", "grado": "NOVENO", "email": "paoreyescastellanos@hotmail.com", "contacto": "3143984922"},  
        {"nombre": "SONORA CREACIONES", "tipo": "ARTESANÍAS", "propositos": "Llevar el Evangelio por medio de bisutería devocional.", "slogan": "HECHO A MANO HECHO CON AMOR", "descripcion": "Bisutería Religiosa (Manillas, Rosarios, Demarios) en Murano, Perla de Río, Mostacilla, Porcelanicron.", "precio": "Depende de los materiales", "canales": "@sonora_creaciones (Instagram)", "proyeccion": "Taller de salud mental familiar y esparcimiento.", "integrantes": "Claudia Meneses Jacome, Sofía Ramírez Meneses, Noelia Ramírez Meneses", "grado": "TERCERO", "email": "md.cmeneses82@gmail.com", "contacto": "3164740898"},  
        {"nombre": "MULTYDRINK", "tipo": "INDUSTRIAL", "propositos": "Brindar la experiencia de degustar nuestro producto.", "slogan": "Tu cuerpo pide cambios, tu energía los merece hoy", "descripcion": "Super bebida 100% orgánica con Ganoderma Luxidum, Miel de Agave Azul, Té Negro, Resveratrol y Miel de Café.", "precio": "Caja por 21 sobres $100.000", "canales": "Venta directa", "proyeccion": "Llegar a muchos consumidores y distribuidores.", "integrantes": "Aura Maria Prada", "grado": "ONCE", "email": "auramariapradaospino@gmail.com", "contacto": "3173032019"},  
        {"nombre": "Tu soda", "tipo": "GASTRONOMICO", "propositos": "Darnos a conocer y que mi niña viva la experiencia.", "slogan": "Tu soda refrescante", "descripcion": "Soda, frutas, limón, gomas.", "precio": "$5.000", "canales": "Redes sociales, voz a voz", "proyeccion": "Darnos a conocer y vender todo.", "integrantes": "Mariana Salas Sanchez (caja), Mario Pino (preparador), Laura Sánchez (vendedor)", "grado": "SEPTIMO", "email": "profelauragallardo@gmail.com", "contacto": "3138837225"},  
        {"nombre": "Pulseras Neizla Ibarra", "tipo": "ARTESANÍAS", "propositos": "Vender las manillas hechas a mano.", "slogan": "Manillas únicas, hechas a mano con amor", "descripcion": "Dijes en pasta, acero, goma, hilo chino tejido a mano.", "precio": "Desde $4.000 en adelante", "canales": "Instagram (neizla.2638), 3175757708", "proyeccion": "Dando a conocer mi trabajo.", "integrantes": "Neizla Ibarra (emprendedora), Adelaida Torrado (acompañante)", "grado": "ONCE", "email": "neizlaibarra@gmail.com", "contacto": "3175757708"},  
        {"nombre": "Juli Postres", "tipo": "GASTRONOMICO", "propositos": "Emprender en familia.", "slogan": "Un pedacito de amor en cada bocado", "descripcion": "Postres de maracuyá, mora y fresa, elaborados con leche y galletas.", "precio": "$7.000", "canales": "Instagram y WhatsApp", "proyeccion": "Venderlos y emprender.", "integrantes": "Marta Juliana Pérez (repostera), Emmanuel Navarro Pérez (organizador)", "grado": "ONCE", "email": "mp7391909@gmail.com", "contacto": "3202967512"},  
        {"nombre": "Delicias de Luz", "tipo": "GASTRONOMICO", "propositos": "Hacer feliz el paladar de los Ocañeros y conectar con la tradición.", "slogan": "Hallacas con tradición, hechas con amor", "descripcion": "Hallacas y Bollos de plátano maduro, envueltos en hoja de vijao.", "precio": "Hallacas: $4.500, Bollos: $2.500", "canales": "Por encargo (WhatsApp y Facebook)", "proyeccion": "Expandir en el mercado local y regional.", "integrantes": "Yaniris Pedraza (distribución), Luz Dary Pedraza (producción)", "grado": "SEPTIMO", "email": "shairaperez@iepresoca.edu.co", "contacto": "3165318906"},  
        {"nombre": "LauraLuna Bisuteria", "tipo": "ARTESANÍAS", "propositos": "Elaborar accesorios significativos de nuestra región y en tendencia.", "slogan": "Un toque ideal", "descripcion": "Accesorios en rodio, acero, bronce, oro laminado, miyuky, murano.", "precio": "Desde $15.000 - $150.000", "canales": "Redes sociales, Punto fisico en Kuna", "proyeccion": "Ser una empresa reconocida a nivel nacional e internacional.", "integrantes": "Laura Lorena Luna Ropero, Sara Valentina Reyes Luna, Alvaro Jose Reyes Luna, Blanca Ropero Mora", "grado": "QUINTO", "email": "lllunar@hotmail.com", "contacto": "3123740967"},  
        {"nombre": "Postrecitos ticol", "tipo": "GASTRONOMICO", "propositos": "Lograr independencia financiera.", "slogan": "Ven y disfruta de tus deliciosos postres", "descripcion": "Postres de Napoleón, maracuya, mora y limón.", "precio": "$5.000", "canales": "Ninguno", "proyeccion": "Aprender a ser emprendedor.", "integrantes": "Nicol sanguino y Luciana coronel", "grado": "DECIMO", "email": "nicolsanguino@iepresoca.edu.com", "contacto": "3144744564"},  
        {"nombre": "Dulzura", "tipo": "GASTRONOMICO", "propositos": "Ofrecer mini donitas frescas, innovadoras y de calidad.", "slogan": "El sabor que alegra tu corazón", "descripcion": "Mini donitas esponjosas, pequeñas y dulces, ideales para compartir.", "precio": "$1.000 - $1.500", "canales": "Venta directa", "proyeccion": "Generar ingresos para reinvertir y crecer.", "integrantes": "María José Ramírez, Valentina Montañez", "grado": "ONCE", "email": "majitojerez2308@gmail.com", "contacto": "3122230511"},  
        {"nombre": "Hechos con amor", "tipo": "ARTESANÍAS", "propositos": "Adquirir experiencia.", "slogan": "Hecho con amor, tejido para ti", "descripcion": "Productos artesanales tejidos con lana e hilos, con detalles como ojos, relleno, mostacillas, etc.", "precio": "Desde 5.000 en adelante", "canales": "Instagram", "proyeccion": "Vender todos los productos y aumentar los pedidos.", "integrantes": "Daniela y Gabriela", "grado": "ONCE", "email": "reyesgabrielag.colpre@gamil.com", "contacto": "3106118478"},  
        {"nombre": "Sugar Salu", "tipo": "GASTRONOMICO", "propositos": "Incentivar el emprendimiento y el hábito de ahorro.", "slogan": "sugar salu", "descripcion": "Dulce de leche con receta de la abuela, a base de leche con arroz licuado.", "precio": "Dependiendo del tamaño", "canales": "Instagram y WhatsApp", "proyeccion": "Generar en las niñas el hábito de ahorro y gasto necesario.", "integrantes": "Liliana Claro Álvarez (líder), Luciana Sánchez Claro, Salomé Sánchez Claro", "grado": "DECIMO", "email": "sarahvalentinasf@gmail.com", "contacto": "3168292458"},  
        {"nombre": "Coco beauty", "tipo": "BELLEZA", "propositos": "Ofrecer productos que solucionen dificultades.", "slogan": "Compramos por ti en USA", "descripcion": "Productos importados.", "precio": "$20.000", "canales": "Virtual", "proyeccion": "Publicidad", "integrantes": "Karina Cardenas", "grado": "DOCENTE", "email": "kari_cardenas12@hotmail.com", "contacto": "3006687768"},  
        {"nombre": "Borealis", "tipo": "ARTESANÍAS", "propositos": "Crear tejidos artesanales que transmitan belleza y calidez.", "slogan": "No tengo", "descripcion": "Productos elaborados a mano con técnica de crochet, usando hilos de algodón y acrílico.", "precio": "Desde $8.000 hasta $60.000", "canales": "Ferias y punto de venta Barbatuscas casa floral", "proyeccion": "Darme a conocer como una marca que transmite calidez y creatividad.", "integrantes": "Sara Liliana Gelves Torres (artesana)", "grado": "ONCE", "email": "lilisgelvest@gmail.com", "contacto": "3118533387"},  
        {"nombre": "ESGO", "tipo": "BELLEZA", "propositos": "Dar a conocer nuestra marca.", "slogan": "Vamos a tener un ego especial", "descripcion": "Marca pensada para resaltar la esencia de cada mujer. Splashes y cremas corporales.", "precio": "Crema $28.000, Splash $20.000", "canales": "Instagram @esgo2_025", "proyeccion": "Crecer exponencialmente.", "integrantes": "Ruth Paulina Ballesteros Vila (docente), Leidy Esperanza Gomez Ballesteros (inversionista)", "grado": "DOCENTE", "email": "leidyg2397@gmail.com", "contacto": "3144698197"},  
        {"nombre": "Pura Vida", "tipo": "GASTRONOMICO", "propositos": "Ofrecer productos naturales que transforman vidas.", "slogan": "Bienestar desde adentro", "descripcion": "Kéfir: bebida probiótica. Golden Shot: bebida natural de cúrcuma, jengibre y especias.", "precio": "12.000 - 34.000", "canales": "Venta directa, domicilio, redes sociales.", "proyeccion": "Aumentar ventas y expandir la clientela.", "integrantes": "Yuneidy Vega (Dueña)", "grado": "NOVENO", "email": "saragarciacolpre1309@gmail.com", "contacto": "3218042151"},  
        {"nombre": "Satinstore2024.", "tipo": "OTROS", "propositos": "Proyectarme como una gran empresaria.", "slogan": "Satin", "descripcion": "Perfumería árabe, de nicho y diseñador.", "precio": "N/A", "canales": "Instagram, Facebook y físico", "proyeccion": "Tener mi propio local.", "integrantes": "Liceth Johana Casadiego Villalba", "grado": "N/A", "email": "licethjcavi@gmail.com", "contacto": "3165201350"},  
        {"nombre": "Calzado jarme", "tipo": "MARROQUINERÍA", "propositos": "Distribuir productos y generar empleos.", "slogan": "Calidad y confort para nuestros clientes", "descripcion": "Fabricamos botas y zapatos en cuero (bandas marciales, colegiales), guayos y chanclas.", "precio": "Varios, ej: Botas 115.000", "canales": "Puerta a puerta, WhatsApp", "proyeccion": "Conseguir nuevos clientes y crecer la producción.", "integrantes": "Jorge Emilio Areniz Benavides y otros.", "grado": "N/A", "email": "jearenizb@ufpso.edu.co", "contacto": "3156014912"},  
        {"nombre": "Oboticario", "tipo": "OTROS", "propositos": "Crear oportunidades para que la belleza transforme vidas.", "slogan": "Donde hay amor, hay belleza.", "descripcion": "Productos veganos con activos únicos, enfocados en sostenibilidad.", "precio": "Varios", "canales": "Físico y Catálogo", "proyeccion": "Crecer juntos y revolucionar el mercado.", "integrantes": "Karina Carrascal, Melina Gandur", "grado": "PRIMERO", "email": "ykarinacd@hotmail.com", "contacto": "3115811404"},  
        {"nombre": "Beeluroiss", "tipo": "OTROS", "propositos": "Llevar nuestros aromas a más hogares.", "slogan": "Esencia real", "descripcion": "Cera de molde, moldes, fragancias, colorantes.", "precio": "Varios", "canales": "Redes sociales", "proyeccion": "N/A", "integrantes": "Sara Sofia López Espinosa", "grado": "N/A", "email": "sarasofialopezespinoza@gmail.com", "contacto": "3184614169"},  
        {"nombre": "DECORACIÓN PARA EL HOGAR", "tipo": "OTROS", "propositos": "Innovar.", "slogan": "Decoracion para el hogar", "descripcion": "Porcelana de yeso.", "precio": "N/A", "canales": "Ventas por redes desde mi casa", "proyeccion": "N/A", "integrantes": "Liceth Paola vega Arévalo, Emanuel Osorio vega", "grado": "SEXTO", "email": "EmanuelOsorio@iepresoca.edu.co", "contacto": "3118612520"},  
        {"nombre": "Obleas y dulces la abuela", "tipo": "GASTRONOMICO", "propositos": "Innovar.", "slogan": "N/A", "descripcion": "Dulce de leche y obleas.", "precio": "N/A", "canales": "Ventas por redes", "proyeccion": "N/A", "integrantes": "Matías Osorio vega", "grado": "CUARTO", "email": "MatíasOsorio@iepresoca.edu.co", "contacto": "3118612520"},  
        {"nombre": "Delish!!! Desserts", "tipo": "GASTRONOMICO", "propositos": "Desarrollar habilidades empresariales e independencia económica.", "slogan": "Dulces momentos, sabores inolvidables", "descripcion": "Postres de maracuya, limón y quesillo.", "precio": "$5.000", "canales": "Venta Directa", "proyeccion": "Crear en un futuro una microempresa.", "integrantes": "Marialucia Moreno, Kleyra Gonzalez, Nubia Avila", "grado": "SEPTIMO", "email": "kleyraga3@gmail.com", "contacto": "3150953454"},  
        {"nombre": "Mini Donad LuLu", "tipo": "GASTRONOMICO", "propositos": "Dar a conocer nuestro emprendimiento.", "slogan": "Un mordisco de felicidad en cada Dona", "descripcion": "Huevos, Azúcar, Leche, Endulzantes, Chocolate y toppings.", "precio": "$4.000", "canales": "WhatsApp", "proyeccion": "Tener un punto físico.", "integrantes": "Luciana Forero (Repostera), Luciana Sánchez (Decoradora)", "grado": "N/A", "email": "lucianasanchesclaro@gmail.com", "contacto": "3113480331"},  
        {"nombre": "EL CARAJO CEVICHERÍA & COCINA", "tipo": "GASTRONOMICO", "propositos": "N/A", "slogan": "N/A", "descripcion": "N/A", "precio": "N/A", "canales": "N/A", "proyeccion": "N/A", "integrantes": "Elha sofia santos", "grado": "TERCERO", "email": "elhasantos@iepresoca.edu.co.", "contacto": "3152621966"}  
    ];  

    const container = document.getElementById('emprendimientos-container');  
    const searchInput = document.getElementById('search-input');  
    const filterTipo = document.getElementById('filter-tipo');  
    const filterGrado = document.getElementById('filter-grado');  

    // Cargar opciones de grado dinámicamente  
    const grados = [...new Set(emprendimientos.map(e => e.grado).filter(g => g !== 'N/A'))].sort();  
    grados.forEach(grado => {  
        const option = document.createElement('option');  
        option.value = grado;  
        option.textContent = grado.charAt(0).toUpperCase() + grado.slice(1).toLowerCase();  
        filterGrado.appendChild(option);  
    });  

    const renderEmprendimientos = (emprendimientosFiltrados) => {  
        container.innerHTML = '';  
        if (emprendimientosFiltrados.length === 0) {  
            container.innerHTML = '<p>No se encontraron emprendimientos con esos criterios.</p>';  
            return;  
        }  

        emprendimientosFiltrados.forEach(e => {  
            const card = document.createElement('div');  
            card.className = 'emprendimiento-card';  
            card.innerHTML = `  
                <div class="card-header">  
                    <h4>${e.nombre}</h4>  
                    <p class="card-slogan">${e.slogan !== 'N/A' ? e.slogan : ''}</p>  
                </div>  
                <div class="card-body">  
                    <p><strong>Propósito:</strong> ${e.propositos !== 'N/A' ? e.propositos : 'No especificado'}</p>  
                    <p><strong>Descripción:</strong> ${e.descripcion !== 'N/A' ? e.descripcion : 'No especificado'}</p>  
                    <p><strong>Integrantes:</strong> ${e.integrantes}</p>  
                    <p><strong>Contacto:</strong> ${e.email} / ${e.contacto}</p>  
                </div>  
                <div class="card-footer">  
                    <span class="tag tag-grado">${e.grado !== 'N/A' ? e.grado : 'N/D'}</span>  
                    <span class="tag tag-tipo">${e.tipo.replace(/o/gi, "O")}</span>  
                </div>  
            `;  
            container.appendChild(card);  
        });  
    };  

    const filterAndRender = () => {  
        const searchTerm = searchInput.value.toLowerCase();  
        const tipoSeleccionado = filterTipo.value;  
        const gradoSeleccionado = filterGrado.value;  

        const filtrados = emprendimientos.filter(e => {  
            const matchesSearch = searchTerm === '' ||   
                e.nombre.toLowerCase().includes(searchTerm) ||   
                e.descripcion.toLowerCase().includes(searchTerm) ||  
                e.integrantes.toLowerCase().includes(searchTerm);  

            const matchesTipo = tipoSeleccionado === 'todos' || e.tipo.toUpperCase() === tipoSeleccionado.toUpperCase();  
            
            const matchesGrado = gradoSeleccionado === 'todos' || e.grado.toUpperCase() === gradoSeleccionado.toUpperCase();  

            return matchesSearch && matchesTipo && matchesGrado;  
        });  

        renderEmprendimientos(filtrados);  
    };  

    searchInput.addEventListener('input', filterAndRender);  
    filterTipo.addEventListener('change', filterAndRender);  
    filterGrado.addEventListener('change', filterAndRender);  

    // Render inicial  
    renderEmprendimientos(emprendimientos);  
});  
