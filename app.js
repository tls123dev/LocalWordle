const WORDS = [
    ["PLAYA", "Zona arenosa a la orilla del mar."],
    ["BRISA", "Viento suave y fresco."],
    ["CALMA", "Estado de tranquilidad y silencio."],
    ["CAMPO", "Terreno extenso fuera de la ciudad."],
    ["CANTO", "Emisión musical de la voz."],
    ["CARTA", "Escrito dirigido a una persona."],
    ["CIELO", "Espacio que rodea la Tierra."],
    ["CINCO", "Número que sigue al cuatro."],
    ["CLIMA", "Condiciones atmosféricas habituales."],
    ["COCHE", "Vehículo de motor de cuatro ruedas."],
    ["COLOR", "Percepción visual producida por la luz."],
    ["CORTE", "Acción de separar con un instrumento."],
    ["COSTA", "Orilla del mar o de un río."],
    ["CUBRE", "Acción de tapar o proteger algo."],
    ["CURVA", "Línea que se desvía continuamente."],
    ["DANZA", "Arte del movimiento rítmico del cuerpo."],
    ["DISCO", "Objeto circular plano; también música."],
    ["DUCHA", "Chorro de agua para el aseo."],
    ["DULCE", "Sabor agradable, como el azúcar."],
    ["FINCA", "Propiedad rural o urbana."],
    ["FLOTA", "Conjunto de barcos o vehículos."],
    ["FORMA", "Figura exterior de un objeto."],
    ["FRASE", "Conjunto de palabras con sentido."],
    ["FRUTA", "Producto comestible de las plantas."],
    ["FUEGO", "Combustión que produce luz y calor."],
    ["GENTE", "Conjunto de personas."],
    ["GLOBO", "Esfera de goma inflada con aire."],
    ["GOLPE", "Choque brusco de dos cuerpos."],
    ["GRAMO", "Unidad de masa del sistema métrico."],
    ["GRUPO", "Conjunto de personas o cosas."],
    ["GUSTO", "Sentido que percibe los sabores."],
    ["HIELO", "Agua en estado sólido."],
    ["HOGAR", "Lugar donde vive una familia."],
    ["HORNO", "Aparato para cocinar con calor."],
    ["HUEVO", "Óvulo de ave, comestible."],
    ["JUEGO", "Actividad de entretenimiento."],
    ["JUSTO", "Que actúa con equidad y razón."],
    ["LAPIZ", "Instrumento para escribir o dibujar."],
    ["LARGO", "De gran extensión en longitud."],
    ["LECHE", "Líquido nutritivo producido por mamíferos."],
    ["LIBRO", "Conjunto de páginas encuadernadas."],
    ["LIMON", "Fruta cítrica de color amarillo."],
    ["LLANO", "Terreno sin elevaciones ni depresiones."],
    ["LUNES", "Primer día de la semana laboral."],
    ["MADRE", "Mujer que ha tenido hijos."],
    ["MANSO", "Tranquilo, apacible, sin violencia."],
    ["MANTO", "Capa o cobertura amplia."],
    ["MARCA", "Señal o huella dejada en algo."],
    ["MAREA", "Movimiento periódico del mar."],
    ["MEDIA", "Prenda que cubre el pie y la pierna."],
    ["MEDIO", "Centro entre dos extremos."],
    ["METRO", "Unidad de longitud; transporte urbano."],
    ["MIEDO", "Sensación de inquietud ante el peligro."],
    ["MUNDO", "La Tierra y todo lo que existe."],
    ["MUSGO", "Planta pequeña que crece en lugares húmedos."],
    ["NORTE", "Punto cardinal opuesto al sur."],
    ["NOCHE", "Período sin luz solar."],
    ["NOVIO", "Persona con quien se tiene relación amorosa."],
    ["NUBES", "Masas de vapor de agua en el cielo."],
    ["NUEVO", "Que existe o se conoce hace poco."],
    ["OJALA", "Expresa el deseo de que algo ocurra."],
    ["OLIVA", "Fruto del olivo, de donde se extrae aceite."],
    ["OMITE", "Deja de mencionar algo."],
    ["ORDEN", "Disposición correcta de las cosas."],
    ["ORUGA", "Larva de mariposa con cuerpo alargado."],
    ["PADRE", "Hombre que tiene hijos."],
    ["PARED", "Superficie vertical que forma una habitación."],
    ["PASTO", "Hierba que sirve de alimento al ganado."],
    ["PAUSA", "Breve interrupción en una actividad."],
    ["PEDAL", "Palanca que se acciona con el pie."],
    ["PEINE", "Utensilio para arreglar el cabello."],
    ["PERLA", "Joya producida por moluscos marinos."],
    ["PIANO", "Instrumento musical de cuerdas y teclas."],
    ["PICOS", "Puntas agudas de montañas o herramientas."],
    ["PIEZA", "Parte de un conjunto o mecanismo."],
    ["PINZA", "Utensilio para sujetar o agarrar."],
    ["PIZZA", "Plato italiano de masa con ingredientes."],
    ["PLATA", "Metal precioso de color blanco brillante."],
    ["PLAZA", "Espacio abierto rodeado de edificios."],
    ["PLUMA", "Apéndice de las aves; instrumento de escribir."],
    ["PODER", "Capacidad de hacer o influir en algo."],
    ["POLVO", "Partículas finas que flotan en el aire."],
    ["PRADO", "Campo cubierto de hierba."],
    ["PRIMA", "Pariente hija de tío o tía."],
    ["PUNTO", "Señal pequeña; también fin de frase."],
    ["QUESO", "Alimento elaborado con leche cuajada."],
    ["RADIO", "Aparato receptor de ondas; también hueso."],
    ["RAZON", "Facultad de pensar; argumento lógico."],
    ["RECTA", "Línea que no se curva."],
    ["REINO", "Territorio gobernado por un rey."],
    ["RELOJ", "Instrumento para medir el tiempo."],
    ["RESTA", "Operación aritmética de quitar."],
    ["RITMO", "Patrón regular de sonidos o movimientos."],
    ["RONDA", "Vuelta o recorrido periódico."],
    ["ROSCA", "Forma circular; también tipo de pan."],
    ["RUEDO", "Arena circular de una plaza de toros."],
    ["RUIDO", "Sonido desagradable o intenso."],
    ["RUMBO", "Dirección que sigue un barco o viaje."],
    ["SABOR", "Sensación producida por los alimentos."],
    ["SAGAZ", "Que tiene agudeza e inteligencia."],
    ["SALSA", "Mezcla líquida para condimentar; ritmo musical."],
    ["SALUD", "Estado de bienestar físico y mental."],
    ["SAMBA", "Baile de origen brasileño."],
    ["SAUCE", "Árbol de ramas largas y colgantes."],
    ["SELVA", "Bosque tropical denso."],
    ["SEÑAL", "Indicio o signo que avisa de algo."],
    ["SERIE", "Conjunto ordenado de elementos."],
    ["SILLA", "Mueble con respaldo para sentarse."],
    ["SIRVO", "Primera persona del verbo servir."],
    ["SOBRE", "Encima de; también envoltorio de carta."],
    ["SOLAR", "Relativo al sol; también terreno sin edificar."],
    ["SUEÑO", "Estado de reposo; también deseo."],
    ["SUELO", "Superficie pisable; también tierra."],
    ["SUMAR", "Operación de añadir cantidades."],
    ["SURCO", "Ranura hecha en la tierra para sembrar."],
    ["TABLA", "Pieza plana de madera; también lista."],
    ["TALLA", "Medida de ropa; también escultura en madera."],
    ["TANGO", "Baile típico argentino."],
    ["TARDE", "Parte del día después del mediodía."],
    ["TECHO", "Parte superior de una habitación."],
    ["TEXTO", "Conjunto de palabras escritas."],
    ["TIGRE", "Gran felino de rayas negras y naranjas."],
    ["TINTO", "De color rojo oscuro; vino tinto."],
    ["TORNO", "Máquina giratoria para dar forma."],
    ["TORRE", "Construcción alta y estrecha."],
    ["TORTA", "Pastel redondo; también golpe."],
    ["TRAMO", "Cada parte de un recorrido."],
    ["TRECE", "Número que sigue al doce."],
    ["TRIGO", "Cereal con el que se hace harina."],
    ["TRONO", "Asiento de reyes y reinas."],
    ["TRUCO", "Habilidad o engaño para lograr algo."],
    ["TURNO", "Orden en que se hace algo."],
    ["UNICO", "Que no tiene igual o semejante."],
    ["UNION", "Acción de juntar o unir cosas."],
    ["USURA", "Interés excesivo por un préstamo."],
    ["VACAS", "Hembras bovinas; también plural de vaca."],
    ["VALOR", "Cualidad de algo apreciado; también valentía."],
    ["VAPOR", "Gas producido al hervir el agua."],
    ["VASTO", "De gran extensión o tamaño."],
    ["VEJEZ", "Última etapa de la vida humana."],
    ["VENAS", "Vasos que llevan sangre al corazón."],
    ["VENTA", "Acción de vender algo."],
    ["VERDE", "Color de las plantas y la hierba."],
    ["VERSO", "Línea de un poema con medida."],
    ["VIAJE", "Recorrido de un lugar a otro."],
    ["VIBRA", "Oscila o produce movimiento rápido."],
    ["VIDEO", "Grabación de imágenes en movimiento."],
    ["VIEJO", "Que tiene mucha edad; también antiguo."],
    ["VILLA", "Población pequeña; también casa de campo."],
    ["VIRAL", "Que se propaga rápidamente, como un virus."],
    ["VISTA", "Sentido que permite ver; también panorama."],
    ["VIVIR", "Estar vivo; llevar una vida."],
    ["VOCAL", "Cada una de las letras a,e,i,o,u."],
    ["VUELO", "Desplazamiento por el aire."],
    ["YERNO", "Esposo de la hija respecto a los padres."],
    ["YESCA", "Material muy seco que arde con facilidad."],
    ["YOGUR", "Alimento lácteo fermentado."],
    ["ZAFIO", "Que es tosco y sin educación."],
    ["ZANJA", "Excavación larga y estrecha en el suelo."],
    ["ZARPA", "Garra de un animal; acción de zarpar."],
    ["ZENIT", "Punto más alto del cielo sobre un lugar."],
    // 6 letras
    ["ESCENA", "Fragmento de una obra teatral."],
    ["FUERZA", "Capacidad para mover o resistir."],
    ["HIERBA", "Planta de tallo verde y flexible."],
    ["LLUVIA", "Precipitación de agua desde las nubes."],
    ["MUSICA", "Arte de combinar sonidos agradables."],
    ["PRUEBA", "Demostración de algo; examen."],
    ["SONRISA", "Gesto de alegría con los labios."],
    ["TIMBRE", "Aparato para avisar; también calidad del sonido."],
    ["TITULO", "Nombre que identifica una obra o cargo."],
    ["TOMATE", "Fruto rojo y jugoso de la tomatera."],
    ["PIEDRA", "Roca sólida de origen mineral."],
    ["PILOTO", "Persona que conduce un avión o barco."],
    ["BLANCO", "Color de la nieve y la leche."],
    ["SEMANA", "Período de siete días."],
    ["COCINA", "Lugar para preparar alimentos."],
    ["LENGUA", "Órgano del gusto; también idioma."],
    ["CIUDAD", "Núcleo urbano de gran tamaño."],
    ["JARDÍN", "Terreno con plantas ornamentales."],
    ["PINTOR", "Artista que pinta cuadros."],
    ["CAMISA", "Prenda de vestir para la parte superior."],
    ["BOSQUE", "Zona con abundante vegetación arbórea."],
    ["PUERTA", "Abertura en una pared para entrar o salir."],
    ["NUMERO", "Símbolo que representa una cantidad."],
    ["CABEZA", "Parte superior del cuerpo humano."],
    ["TEATRO", "Arte de representar obras en escena."],
    ["VERANO", "Estación cálida del año."],
    ["ABRIGO", "Prenda de ropa para el frío."],
    ["HELADO", "Postre congelado y dulce."],
    ["COMIDA", "Alimento que se ingiere."],
    ["CAMINO", "Sendero para desplazarse."],
    ["FLORES", "Plantas con pétalos de colores."],
    ["BRILLO", "Resplandor o luz reflejada."],
    // 7 letras
    ["CABALLO", "Animal mamífero usado para montar."],
    ["VENTANA", "Abertura en la pared para luz y aire."],
    ["MONTANA", "Elevación natural del terreno."],
    ["CAMPEON", "Persona que gana una competición."],
    ["PALOMA", "Ave de plumas blancas y vuelo veloz."],
    ["FLAUTA", "Instrumento musical de viento."],
    ["MARTES", "Segundo día de la semana."],
    ["CUENTO", "Narración breve de ficción."],
    ["ESCUDO", "Objeto de defensa; también símbolo."],
    ["CIERRA", "Acción de cerrar algo."],
    ["FAMILIA", "Grupo de personas unidas por parentesco."],
    ["COLEGIO", "Centro de enseñanza primaria o secundaria."],
    ["PLANETA", "Cuerpo celeste que orbita una estrella."],
    ["ESTATUA", "Figura esculpida de una persona o animal."],
    ["JARDINE", "Persona que cuida jardines."],
    ["PESCADO", "Animal acuático comestible."],
    ["TAMBIEN", "Expresión de adición o acuerdo."],
    ["OCTUBRE", "Décimo mes del año."],
    ["DOMINGO", "Último día de la semana."],
    ["ABOGADO", "Profesional del derecho."],
    // 8 letras
    ["MARIPOSA", "Insecto con alas de colores llamativos."],
    ["ESTRELLA", "Cuerpo celeste que brilla en el cielo nocturno."],
    ["AVENTURA", "Experiencia emocionante e inesperada."],
    ["MOCHILLA", "Bolsa que se lleva a la espalda."],
    ["PROBLEMA", "Situación difícil que requiere solución."],
    ["MEDICINA", "Ciencia que estudia y trata enfermedades."],
    ["GUITARRA", "Instrumento musical de cuerdas pulsadas."],
    ["CABAÑA", "Casa pequeña de madera en el campo."],
    ["MADRUGADA", "Primeras horas del día, antes del amanecer."],
    ["PANTALLA", "Superficie donde se proyectan imágenes."],
    ["MANGUERA", "Tubo flexible para conducir agua."],
    ["ESCALERA", "Estructura con peldaños para subir y bajar."],
    ["MONTAÑA", "Gran elevación natural del terreno."],
    ["TORTILLA", "Preparación de huevo batido y frito."],
    ["BICICLETA", "Vehículo de dos ruedas movido a pedales."],
    ["PLATAFORMA", "Superficie elevada y horizontal."],
    ["CALENDARIO", "Sistema para organizar el tiempo."],
    ["ALMOHADA", "Cojín para apoyar la cabeza al dormir."],
    ["SOMBRERO", "Prenda de vestir para cubrir la cabeza."],
    ["ELEFANTE", "Gran mamífero de trompa larga."],
];

// TECLADO EN ESPAÑOL
const KB = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
];

let wordLenght = 5;
let validWords = [];
let target, targetMeaning, guesses, currentGuess, gameOver, stats;

function loadStats() {
    try {
        stats = JSON.parse(localStorage.getItem('wordle_stats') || 'null');
    } catch {
        stats = null;
    }
    if (!stats) {
        stats = { played: 0, wins: 0, streak: 0 };
    }
}

// GUARDA LAS ESTADISTICAS EN EL LOCALSTORAGE
function saveStats() {
    localStorage.setItem('wordle_stats', JSON.stringify(stats));
}

// ACTUALIZA LOS CONTADORES DE LAS ESTADISTICAS
function updateStatsDisplay() {
    document.getElementById('played').textContent = stats.played;
    document.getElementById('wins').textContent = stats.wins;
    document.getElementById('streak').textContent = stats.streak;
}

// INICIA EL JUEGO FILTRADO PARA UN LARGO DE PALABRAS, SI NO HAY PALABRAS DE ESE LARGO MUESTRA UNA ALERTA.
// OCULTA LA SELECCION DE MODO Y MUESTRA LAS GRILLAS DEPENDIENDO DEL MODO SELECIONADO
function startGame(len) {
    wordLenght = len;
    validWords = WORDS.filter(([w]) => w.length === len);
    if (validWords.length === 0) {
        alert(`No hay palabras de ${len} letras disponibles.`);
        return;
    }
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('game-wrap').style.display = 'flex';
    document.getElementById('game-title').textContent = `Wordle ${len} Letras`;
    newGame();
}

// VUELVE AL MENU DE SELECCION
function goMenu() {
    document.getElementById('mode-selection').style.display = 'flex';
    document.getElementById('game-wrap').style.display = 'none';
    hideModal();
}

// CONSTRUYE LA GRILLA DEL JUEGO
function buildGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let r = 0; r < 6; r++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = `row-${r}`;
        for (let c = 0; c < wordLenght; c++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${r}-${c}`;
            row.appendChild(tile);
        }
        grid.appendChild(row);
    }
}

// CONSTRUYE EL TECLADO EN EL HTML
function buildKeyboard() {
    KB.forEach((row, rkb) => {
        const kbrow = document.getElementById(`kb-row-${rkb}`);
        kbrow.innerHTML = '';
        row.forEach((k) => {
            const btn = document.createElement('button');
            btn.className = 'key' + (k.length > 1 ? ' wide' : '');
            btn.textContent = k === 'Backspace' ? '⌫' : k;
            btn.id = `key-${k}`;
            btn.addEventListener('click', () => handleKey(k));
            kbrow.appendChild(btn);
        });
    });
}

// INICIA EL JUEGO SELECCIONANDO UNA PALABRA AL AZAR
function newGame() {
    const pick = validWords[Math.floor(Math.random() * validWords.length)];
    target = pick[0];
    targetMeaning = pick[1];
    guesses = [];
    currentGuess = '';
    gameOver = false;
    buildGrid();
    buildKeyboard();
    hideModal();
    clearMessage();
}

// ACTUALIZA LA PALABRA ACTUAL, MANEJA EL BORRAR, ENVIAR Y LARGO DE LA PALABRA
function handleKey(key) {
    if (gameOver) return;
    if (key === '⌫' || key === 'Backspace') {
        currentGuess = currentGuess.slice(0, -1);
    } else if (key === 'ENTER' || key === 'Enter') {
        submitGuess();
        return;
    } else if (/^[A-ZÑ]$/i.test(key) && currentGuess.length < wordLenght) {
        currentGuess += key.toUpperCase();
    }
    renderCurrent();
}

// MUESTRA LA PALABRA EN LA GRILLA
function renderCurrent() {
    const row = guesses.length;
    for (let c = 0; c < wordLenght; c++) {
        const tile = document.getElementById(`tile-${row}-${c}`);
        if (!tile) continue;
        tile.textContent = currentGuess[c] || '';
        tile.className = 'tile' + (currentGuess[c] ? ' filled' : '');
    }
}

// ENVIA LA PALABRA, MANEJA EL LARGO Y DEFINE SI LA PALBRA ES CORRECTA. (EN CASO DE SER CORRECTA SE AUMENTA LAS WINS Y STREAK, SI NO SE RESETEA LA STREAK)
function submitGuess() {
    if (currentGuess.length < wordLenght) {
        showMessage(`¡La palabra debe tener ${wordLenght} letras!`);
        return;
    }

    const guess = currentGuess;
    guesses.push(guess);
    currentGuess = '';
    const result = scoreGuess(guess, target);
    const isLastGuess = guesses.length === 6;
    const won = result.every(r => r === 'correct');
    const isOver = won || isLastGuess;

    if (isOver) gameOver = true;

    revealRow(guesses.length - 1, guess, result, () => {
        updateKeyboard(guess, result);
        if (isOver) {
            stats.played++;
            if (won) {
                stats.wins++;
                stats.streak++;
            } else {
                stats.streak = 0;
            }
            saveStats();
            updateStatsDisplay();
            setTimeout(() => showModal(won, guess, guesses.length), 400);
        }
    });
}

// 
function scoreGuess(guess, target) {
    const result = Array(wordLenght).fill('absent');
    const targetLetters = target.split('');

    for (let i = 0; i < wordLenght; i++) {
        if (guess[i] === target[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
        }
    }

    for (let i = 0; i < wordLenght; i++) {
        if (result[i] === 'correct') continue;
        const idx = targetLetters.indexOf(guess[i]);
        if (idx !== -1) {
            result[i] = 'present';
            targetLetters[idx] = null;
        }
    }
    return result;
}

// ANIMACION PARA LAS GRILLAS, MANEJA 3 COLORES, VERDE PARA LETRAS CORRECTAS, AMARILLO PARA LETRAS CORRECTAS PERO EN POSICION INCORRECTA Y GRIS PARA LETRAS INCORRECTAS
function revealRow(row, guess, result, callback) {
    const DELAY = 300;
    for (let c = 0; c < wordLenght; c++) {
        const tile = document.getElementById(`tile-${row}-${c}`);
        setTimeout(() => {
            tile.className = 'tile reveal';
            setTimeout(() => {
                tile.className = `tile reveal ${result[c]}`;
                tile.textContent = guess[c];
            }, 250);
        }, c * DELAY);
    }
    setTimeout(callback, wordLenght * DELAY + 100);
}

// ACTUALIZA EL TECLADO CON LOS COLORES DE LAS LETRAS, VERDE PARA LETRAS CORRECTAS, AMARILLO PARA LETRAS CORRECTAS PERO EN POSICION INCORRECTA Y GRIS PARA LETRAS INCORRECTAS.
function updateKeyboard(guess, result) {
    const priority = { 'correct': 2, 'present': 1, 'absent': 0 };
    for (let i = 0; i < wordLenght; i++) {
        const key = document.getElementById(`key-${guess[i]}`);
        if (!key) {
            continue;
        }
        const cur = ['correct', 'present', 'absent'].find(c => key.classList.contains(c));
        if (!cur || (priority[result[i]] > (priority[cur] || 0))) {
            key.className = `key${key.classList.contains('wide') ? ' wide' : ''} ${result[i]}`;
        }
    }
}

let msgTimeout;

// MENSAJE DE ERROR CUANDO LA PALABRA NO TIENE 5 LETRAS
function showMessage(txt) {
    const el = document.getElementById('message');
    el.textContent = txt;
    el.classList.add('show');
    clearTimeout(msgTimeout);
    msgTimeout = setTimeout(() => el.classList.remove('show'), 2000);
}

// OCULTA MENSAJE DE ERROR LUEGO DE MOSTRARLO
function clearMessage() {
    document.getElementById('message').classList.remove('show');
}

// MENSAJE FINAL PARA CUANDO SE GANA
const WIN_MSGS = ['¡Increíble!', '¡Brillante!', '¡Excelente!', '¡Muy bien!', '¡Bien hecho!', '¡Lo lograste!'];

// MUESTRA MENSAJE FINAL CON EMOJI, TITULO, PALABRA CORRECTA, SIGNIFICADO Y ESTADISTICAS DE LA PARTIDA
function showModal(won, guess, attempts) {
    const emoji = won ? ['🎯', '🎉', '✨', '🌟', '🏆', '🥳'][attempts - 1] : '💀';
    const title = won ? WIN_MSGS[attempts - 1] : '¡Sin intentos!';
    document.getElementById('modal-emoji').textContent = emoji;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-word').textContent = target;
    document.getElementById('modal-meaning').textContent = targetMeaning;
    document.getElementById('modal-score').innerHTML = won
        ? `Resuelto en <strong>${attempts} intento${attempts > 1 ? 's' : ''}</strong> · Racha: <strong>${stats.streak}</strong>`
        : `La palabra era <strong>${target}</strong>`;
    document.getElementById('modal').classList.add('show');
}

// OCULTA EL MODAL DE RESULTADOS
function hideModal() {
    document.getElementById('modal').classList.remove('show');
}

// EVENTOS DEL TECLADO
document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.getElementById('game-wrap').style.display === 'none' ||
        document.getElementById('game-wrap').style.display === '') return;
    if (e.key === 'Enter' || e.key === 'Backspace') { handleKey(e.key); return; }
    if (/^[a-zA-ZñÑ]$/.test(e.key)) handleKey(e.key.toUpperCase());
});

loadStats();
updateStatsDisplay();