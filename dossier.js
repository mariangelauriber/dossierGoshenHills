// Goshen Hills Dossier — section renderer (matches dossier.css contract)

const VILLAS = [
  { casa: "01", nombre: "Villa Luna",      descriptor: "Contemplación", tipologia: "Posterior", area: "213.35 m²", patio: null, singular: true,  singularNote: "Pieza icónica · Originó el logotipo", img: "casa01Luna" },
  { casa: "02", nombre: "Villa Brisa",     descriptor: "Movimiento",    tipologia: "Posterior", area: "220.28 m²", patio: null, singular: false, img: "casa02Brisa" },
  { casa: "03", nombre: "Villa Aurora",    descriptor: "Renacimiento",  tipologia: "Posterior", area: "219.79 m²", patio: null, singular: true,  singularNote: "Pieza singular matinal · Mejor golden hour al amanecer", img: "casa03Aurora" },
  { casa: "04", nombre: "Villa Celeste",   descriptor: "Amplitud",      tipologia: "Posterior", area: "223.43 m²", patio: null, singular: false, img: "casa04Celeste" },
  { casa: "05", nombre: "Villa Horizonte", descriptor: "Expansión",     tipologia: "Posterior", area: "232.93 m²", patio: null, singular: false, img: "casa05Horizonte" },
  { casa: "06", nombre: "Villa Serena",    descriptor: "Reposo",        tipologia: "Posterior", area: "211.71 m²", patio: null, singular: false, img: "casa06Serena" },
  { casa: "07", nombre: "Villa Coral",     descriptor: "Vitalidad",     tipologia: "Frontal",   area: "259.03 m²", patio: "Patio privado 38.23 m²", singular: false, img: "casa07Coral" },
  { casa: "08", nombre: "Villa Palma",     descriptor: "Tropicalidad",  tipologia: "Frontal",   area: "243.60 m²", patio: "Patio privado 27.01 m²", singular: false, img: "casa08Palma" },
  { casa: "09", nombre: "Villa Ámbar",     descriptor: "Plenitud",      tipologia: "Frontal",   area: "236.21 m²", patio: null, singular: true,  singularNote: "Pieza singular vespertina · Ámbar de las 17:42", img: "casa09Ambar" },
  { casa: "10", nombre: "Villa Marina",    descriptor: "Inmersión",     tipologia: "Frontal",   area: "240.18 m²", patio: null, singular: false, img: "casa10Marina" },
  { casa: "11", nombre: "Villa Sierra",    descriptor: "Arraigo",       tipologia: "Frontal",   area: "289.87 m²", patio: "Patio privado 74.98 m²", singular: true, singularNote: "Pieza mayor de la colección · 289.87 m² + patio 74.98 m²", img: "casa11Sierra" },
];

const SECTIONS = [
  { id: "01-portada", bloque: "I · Apertura", marker: "PORTADA", type: "cover", atmosphere: "midnight", eyebrow: "AQUALINDA S.A.S. · COLECCIÓN PRIVADA", title: "Goshen Hills", subtitle: "Once villas. Un horizonte irrepetible.", footer: "Santa Marta · Caribe colombiano", image: "axonometriaAerea" },
  { id: "02-umbral", bloque: "I · Apertura", marker: "I · EL UMBRAL", type: "manifesto", atmosphere: "midnight", eyebrow: "I · EL UMBRAL", title: "Goshen Hills no fue concebido para competir con el mercado.", subtitle: "Fue concebido para apartarse de él.", body: ["El Caribe colombiano se ha llenado de proyectos que prometen multiplicarse: torres que crecen en altura, condominios que crecen en número, ofertas que crecen en urgencia. Goshen Hills nació de una decisión opuesta.","Once villas, no doce. Sin segunda fase. Sin ampliaciones futuras. Sin otra cosa que esto.","La escala no es una limitación. Es la esencia del proyecto."], microcopy: "Once villas. Sin repetición. Sin ampliaciones." },
  { id: "03-promesa", bloque: "I · Apertura", marker: "II · LA PROMESA", type: "quote-page", atmosphere: "midnight", eyebrow: "II · LA PROMESA", title: "El lujo que no necesita exhibirse.", body: ["Hay una forma de lujo que ya no necesita demostrarse. No depende del exceso. No depende de la altura del edificio, ni de la cantidad de mármol, ni de la velocidad de la entrega.","Depende de la decisión de habitar un lugar concebido con criterio, donde lo importante es lo que respira, no lo que se exhibe.","Goshen Hills es esa forma de habitar."], pillars: ["Once familias","Una geografía","Una conversación silenciosa con el Caribe"], microcopy: "Lujo que no se exhibe. Se respira." },
  { id: "04-razon", bloque: "I · Apertura", marker: "III · LA RAZÓN DE SER", type: "editorial", atmosphere: "ivory", eyebrow: "III · LA RAZÓN DE SER", title: "Por qué existe Goshen Hills.", subtitle: "La decisión de un atelier, no la inercia de una promotora.", body: ["AQUALINDA S.A.S. no es una promotora masiva. Es un atelier de desarrollo inmobiliario que cree que el Caribe colombiano merece proyectos concebidos con criterio — no con tamaño. Goshen Hills es la primera colección de la firma.","Su socio fundador, Julián, viene de la estructuración financiera de proyectos. Después de años modelando desarrollos para otros, decidió diseñar el proyecto que siempre quiso habitar.","Aquí no hay una hoja de cálculo que dictó la cantidad de unidades. Hay una ladera, una vista, una escala que el lugar admite, y once familias para las que tiene sentido. La aritmética vino después de la intención."], quote: "Este proyecto no nació de una hoja de cálculo. Nació un sábado a las seis de la tarde, cuando la luz del atardecer convirtió el mar en cobre líquido.", quoteAuthor: "Julián, socio fundador", image: "viaInteriorComunidad", imageCaption: "La vía interior del conjunto · once familias, no once mil huéspedes", cta: "Solicitar dossier institucional" },
  { id: "05-firma", bloque: "I · Apertura", marker: "IV · LA FIRMA DEL ARQUITECTO", type: "editorial", atmosphere: "ivory", eyebrow: "IV · LA FIRMA DEL ARQUITECTO", title: "Raúl Caballería.", subtitle: "Matrícula A144552015-414917 · Consejo Profesional Nacional de Arquitectura.", body: ["Cada villa de Goshen Hills lleva la firma de Raúl Caballería. Su acercamiento al lote no propuso una arquitectura; propuso una lectura. Las once villas se implantan siguiendo las curvas de nivel naturales de la ladera. La arquitectura no compite con el paisaje — lo completa.","Las posteriores se elevan; las frontales descienden. Cada villa recibe la luz, la brisa y el horizonte de manera distinta, en función exacta de su posición sobre la ladera. Esa decisión de no estandarizar es lo que distingue a Goshen Hills de un condominio convencional: aquí no hay once veces lo mismo, hay once veces algo único."], quote: "La arquitectura no compite con el paisaje. Lo completa.", quoteAuthor: "Raúl Caballería, arquitecto", image: "axonometriaAerea", imageCaption: "Axonometría del conjunto · once villas escalonadas siguiendo la pendiente", microcopy: "Once villas. Una sola firma." },

  { id: "06-santa-marta", bloque: "II · Lugar", marker: "V · SANTA MARTA", type: "editorial", atmosphere: "ivory", eyebrow: "V · SANTA MARTA, LEÍDA EN SILENCIO", title: "Santa Marta, leída en silencio.", subtitle: "La geografía más completa del Caribe colombiano.", body: ["Santa Marta no se ofrece como destino. Se descubre como geografía.","Aquí convergen tres territorios que no se encuentran juntos en ningún otro lugar del Caribe: la Sierra Nevada, declarada Reserva de la Biósfera por la UNESCO; el Parque Nacional Natural Tayrona, uno de los ecosistemas costeros mejor preservados del continente; y el Mar Caribe, en su versión más cálida y silenciosa.","Esta convergencia es lo que define la atmósfera de Goshen Hills. Habitar en Santa Marta no es habitar una playa. Es habitar una geografía completa: aire de montaña, sal de mar, sombra de bosque tropical."], image: "mapaUbicacion", imageCaption: "Goshen Hills dentro del macroproyecto Reserva de la Montaña · Santa Marta", microcopy: "Aquí, el Caribe se respira con aire de montaña." },
  { id: "07-via", bloque: "II · Lugar", marker: "VI · LA VÍA AL RODADERO", type: "editorial", atmosphere: "ivory", eyebrow: "VI · LA VÍA AL RODADERO", title: "Cerca del movimiento. Por encima del ruido.", subtitle: "La Vía al Rodadero, leída desde 45 metros de elevación.", body: ["El Rodadero ha sido durante décadas el balcón al Caribe de Santa Marta. Su playa, sus restaurantes, sus servicios urbanos están a minutos. Pero Goshen Hills no se asoma desde la avenida — se eleva sobre ella.","La Vía al Rodadero asciende en curva por una ladera de cuarenta y cinco metros sobre el nivel del mar. A esa altura, el ruido urbano queda abajo. La brisa marina llega filtrada por la vegetación de la pendiente. La vista del Caribe se abre sin obstrucciones, hasta el horizonte.","Esa relación —cercanía urbana sin densidad urbana— es lo que define la decisión de implantar Goshen Hills aquí."], image: "viaAccesoPuerta", imageCaption: "Acceso al conjunto · curva ascendente por la ladera", microcopy: "Cinco minutos al Rodadero. Cuarenta y cinco metros sobre la avenida." },
  { id: "08-protegidos", bloque: "II · Lugar", marker: "VII · 62.900 M² PROTEGIDOS", type: "editorial", atmosphere: "ivory", eyebrow: "VII · 62.900 M² PROTEGIDOS", title: "62.900 metros cuadrados protegidos.", subtitle: "Goshen Hills dentro del macroproyecto Reserva de la Montaña.", body: ["Goshen Hills no se construye sobre un lote. Se implanta dentro de un macroproyecto urbanísticamente planificado: Reserva de la Montaña, un desarrollo de 62.900 m² que integra zonas residenciales, áreas comunes, vías internas, equipamiento y reservas verdes.","Esta condición es relevante para una decisión patrimonial. La protección del valor de una villa de lujo no depende solo de la villa. Depende del entorno urbanístico que la rodea. Una colección como Goshen Hills, dentro de un macroproyecto con planificación superior, está protegida frente al desorden urbano que erosiona el valor en el resto del Caribe colombiano."], image: "mapaUbicacion", imageCaption: "El macroproyecto urbanísticamente planificado", microcopy: "La protección del valor empieza fuera de la villa." },

  { id: "09-topografia", bloque: "III · Arquitectura", marker: "VIII · TOPOGRAFÍA COMO FORMA", type: "editorial", atmosphere: "ivory", eyebrow: "VIII · TOPOGRAFÍA COMO FORMA", title: "La topografía no se corrigió. Se escuchó.", subtitle: "La implantación escalonada como decisión de autor.", body: ["Cuando un lote es plano, la arquitectura puede imponerse. Cuando un lote es inclinado, la arquitectura debe negociar. Goshen Hills hizo de esa negociación su identidad.","Las once villas se distribuyen en dos filas escalonadas, separadas por una vía interior. La fila superior — las posteriores — se eleva siguiendo la pendiente ascendente. La fila inferior — las frontales — desciende hacia el horizonte, ganando privacidad y patios privados de mayor superficie.","Esta disposición no es un compromiso técnico. Es una decisión deliberada del arquitecto: ninguna villa obstruye la vista de otra. Cada residencia recibe el Caribe sin filtros."], image: "axonometriaConjunto", imageCaption: "La disposición escalonada · sección transversal del conjunto", microcopy: "Once villas. Once formas distintas de recibir el Caribe." },
  { id: "10-forma", bloque: "III · Arquitectura", marker: "IX · LA FORMA DE LA COLECCIÓN", type: "editorial", atmosphere: "ivory", eyebrow: "IX · LA FORMA DE LA COLECCIÓN", title: "Acceso. Vía. Comunidad.", subtitle: "La arquitectura del recorrido antes de entrar a casa.", body: ["El recorrido de Goshen Hills empieza antes de la villa. Una garita central regula el acceso al conjunto. Una vía interior, contenida y serena, atraviesa el proyecto en curva siguiendo la pendiente. Once parqueaderos privados se integran en cada villa.","En el corazón del conjunto — entre la fila de las posteriores y la fila de las frontales — se ubican los espacios comunes: una zona social aterrazada, una piscina orgánica de borde infinito, áreas verdes contenidas. La escala es la de una pequeña comunidad de once familias, no la de un condominio masivo.","Aquí el espacio común no es un servicio. Es un umbral compartido."], image: "planoAcceso", imageCaption: "Plano cenital del conjunto · garita, vía interior, once parqueaderos", microcopy: "Once familias. Cero rotación turística." },
  { id: "11-piscina", bloque: "III · Arquitectura", marker: "X · LA PISCINA COMO UMBRAL COMÚN", type: "image-hero", atmosphere: "midnight", eyebrow: "X · LA PISCINA COMO UMBRAL COMÚN", title: "El umbral compartido.", subtitle: "Una piscina orgánica de borde infinito sobre el Caribe.", body: ["Entre la fila de las posteriores y la fila de las frontales, sobre la cota más alta del conjunto y mirando al horizonte, se diseñó la pieza común que define la identidad social de Goshen Hills: una piscina de borde infinito, integrada con una zona social aterrazada en madera y piedra.","No es una piscina de hotel. No tiene música ambiente, ni servicio de bar, ni cabañas privadas alquiladas por hora. Es un umbral compartido — un lugar para once familias, no para once mil huéspedes rotativos."], image: "piscinaLateral", imageCaption: "La piscina de borde infinito sobre el Caribe", microcopy: "Donde el agua y el horizonte dejan de distinguirse." },
  { id: "12-posterior", bloque: "III · Arquitectura", marker: "XI · TIPOLOGÍA POSTERIOR", type: "editorial", atmosphere: "ivory", eyebrow: "XI · TIPOLOGÍA POSTERIOR", title: "La tipología que se eleva.", subtitle: "Casas 01–06 · 211–233 m² · Habitación contemplativa.", body: ["Las seis villas posteriores ocupan la fila superior del conjunto. Su acceso entra por la cota más baja, y la arquitectura crece hacia arriba en tres niveles: parqueadero en planta cero, social en planta uno, alcobas en planta dos.","Las posteriores son las villas que se habitan mirando hacia adelante: el horizonte está al frente, levemente debajo de la cota de las terrazas, y la sensación dominante es la de elevación serena. La luz de la mañana entra de costado; la brisa cruza la sala; la noche llega contenida por la altura de la ladera.","Son villas de carácter contemplativo. Para quien valora la pausa antes que la inmersión."], image: "tipologiaPosterior", imageCaption: "Tipología Posterior · 6 villas · 3 niveles ascendentes", microcopy: "Habitar el Caribe desde la pausa." },
  { id: "13-frontal", bloque: "III · Arquitectura", marker: "XII · TIPOLOGÍA FRONTAL", type: "editorial", atmosphere: "ivory", eyebrow: "XII · TIPOLOGÍA FRONTAL", title: "La tipología que desciende.", subtitle: "Casas 07–11 · 236–290 m² · Habitación inmersiva.", body: ["Las cinco villas frontales ocupan la fila inferior del conjunto. Su acceso entra por la cota más alta, y la arquitectura desciende hacia la ladera en tres niveles: parqueadero en planta cero, social en planta menos uno, alcobas en planta menos dos, con patios privados que pueden alcanzar los setenta y cinco metros cuadrados.","Las frontales son villas de inmersión. La privacidad de las plantas inferiores —protegidas por la propia geometría descendente— permite que cada villa tenga un patio íntimo casi imposible en el resto del Caribe colombiano.","Son villas para quien busca contacto, no contemplación."], image: "tipologiaFrontal", imageCaption: "Tipología Frontal · 5 villas · 3 niveles descendentes · patios 23–75 m²", microcopy: "Habitar el Caribe desde el contacto." },

  { id: "14-once", bloque: "IV · La Colección", marker: "XIII · ONCE NOMBRES PROPIOS", type: "villa-index", atmosphere: "midnight", eyebrow: "XIII · ONCE NOMBRES PROPIOS", title: "Once villas. Once nombres propios.", subtitle: "La colección, leída de derecha a izquierda — desde la piscina hasta el extremo de la ladera.", body: ["Cada villa de Goshen Hills tiene un nombre. No es un capricho editorial: es una decisión arquitectónica. Cada residencia, por su posición exacta sobre la ladera, recibe la luz, la brisa y el horizonte de una manera única. La diferencia entre una villa y la siguiente no es métrica — no se mide en metros cuadrados. Es atmosférica. Se siente."], microcopy: "La villa correcta se encuentra en conversación." },

  { id: "v01-luna", bloque: "IV · La Colección", marker: "CASA 01", type: "passport", atmosphere: "midnight", villaIndex: 0, posicion: "Extremo derecho · fila superior · cota más alta del conjunto", olfativo: "Después del atardecer, la villa entra en su perfil olfativo más reconocible: jazmín nocturno que florece en la vegetación de la ladera, sal marina suspendida en el aire calmo, y un fondo discreto de tierra húmeda que sube de la pendiente boscosa. Durante el día, el perfil es más neutro: predominan la madera de las terrazas y el aire seco de altura.", olfativoTitle: "Jazmín nocturno · sal marina · tierra húmeda", acustico: "La villa habita el silencio. Su posición en el extremo opuesto a la zona social común la coloca en la cota acústica más baja del conjunto. Después de las diez de la noche, el nivel de fondo cae por debajo de los 35 dB — el oleaje del Caribe se escucha como un murmullo lejano. El silencio aquí no es ausencia: es presencia.", acusticoTitle: "El silencio como presencia.", luminico: "Luna creciente reflejada sobre el Caribe. Es la única villa del conjunto cuyo eje visual nocturno coincide exactamente con el reflejo lunar sobre el agua — la perspectiva exacta que dio origen al logotipo de la colección. Durante el día, la luz entra de costado por la mañana y se modula con la sombra natural de la vegetación al atardecer.", luminicoTitle: "El reflejo lunar que originó el logotipo.", paraQuienes: "Quien valora el ritual antes que la inmediatez. Quien entiende que el final del día es el momento más preciso del día. Quien busca una residencia con vocación introspectiva — para leer, para escribir, para no hacer nada sin culpa.", firma: "La villa donde la marca se vuelve lugar." },
  { id: "v02-brisa", bloque: "IV · La Colección", marker: "CASA 02", type: "passport", atmosphere: "ivory", villaIndex: 1, posicion: "Fila superior · posterior", olfativoTitle: "El aire que nunca huele igual dos veces.", olfativo: "El aire en movimiento define su perfil olfativo: cada brisa cruzada trae una capa distinta. Durante la mañana, predominan el yodo marino y la flor de bugambilia de las terrazas vecinas. Al mediodía, el aire seco se carga de aroma a madera tostada por el sol. Al atardecer, regresa la salinidad combinada con un toque de jazmín que llega desde la fila vecina.", acusticoTitle: "El susurro continuo.", acustico: "La firma sonora de Villa Brisa es el susurro continuo: cortinas que ondulan, vegetación que se mueve, hojas que rozan piedra. La brisa cruzada está incorporada estructuralmente a la arquitectura — la geometría del plano permite que el aire atraviese la sala sin obstrucciones. El oleaje del Caribe llega filtrado, pero la presencia sonora dominante es el viento.", luminicoTitle: "La luz no es estática. Vibra.", luminico: "La lectura lumínica más cambiante del conjunto. La luz se modula con la dirección del viento: las hojas de la vegetación, agitadas por la brisa, proyectan sombras dinámicas sobre los muros internos. En las horas de mayor brisa la villa se vuelve un teatro de luces y sombras en movimiento permanente.", paraQuienes: "Quien vive en perpetuo flujo. Quien necesita aire y cambio de aire. Quien busca una residencia que respire con el día — no que lo contenga.", firma: "Una villa concebida desde el aire, no desde el muro." },
  { id: "v03-aurora", bloque: "IV · La Colección", marker: "CASA 03", type: "passport", atmosphere: "ivory", villaIndex: 2, posicion: "Fila superior · posterior", olfativoTitle: "El aire matinal del Caribe.", olfativo: "La huella olfativa más nítida de la primera luz del día. Al amanecer, el aire trae yodo marino concentrado — el ozono del rocío matinal sobre la vegetación de la ladera —, flor de bugambilia que abre con la primera luz, y un toque herbal del rocío sobre las hojas. Es la villa con el perfil olfativo matinal más preciso de la colección.", acusticoTitle: "Las primeras horas son irreplicables.", acustico: "La villa se inaugura con el canto de aves matinales — turpiales, sinsontes, aves marinas que cruzan el horizonte. El oleaje matinal, antes de la actividad humana, llega más definido; los sonidos del Rodadero, más abajo, todavía no han comenzado.", luminicoTitle: "Veintitrés minutos de golden hour matinal.", luminico: "Veintitrés minutos de golden hour matinal directa sobre la terraza principal — un dato que ninguna otra villa de la colección ofrece. La luz entra dorada, oblicua, y baña los muros internos con un tono ámbar suave que dura exactamente ese tiempo antes de que el sol gane altura.", paraQuienes: "Quien empieza el día antes que el día. Quien valora el ritual matinal — el café, la primera luz, el silencio antes del ruido. Una villa concebida para inaugurar, no para cerrar.", firma: "La villa que inaugura cada día." },
  { id: "v04-celeste", bloque: "IV · La Colección", marker: "CASA 04", type: "passport", atmosphere: "ivory", villaIndex: 3, posicion: "Fila superior · posterior", olfativoTitle: "Aire de altura. Salinidad limpia.", olfativo: "El aire abierto define su perfil olfativo: predomina la sensación de aire de altura — más seco, menos cargado — combinada con la salinidad limpia del Caribe. La cantidad de cielo abierto sobre la villa permite que el aire se renueve constantemente. En las noches despejadas, un fondo de aire frío de la Sierra Nevada llega a la villa con mayor presencia que en el resto de la colección.", acusticoTitle: "Resonancia ceremonial.", acustico: "La resonancia espacial es alta. La apertura de las plantas superiores y la cantidad de cielo abierto producen una calidad acústica particular: los ecos suaves al anochecer le dan a la villa un carácter ceremonial. El oleaje llega lejano y limpio.", luminicoTitle: "La mayor cantidad de cielo abierto del conjunto.", luminico: "La mayor cantidad de cielo abierto de toda la colección. La luz entra cenitalmente durante las horas centrales del día, llenando la sala con una luminosidad limpia. Los atardeceres se leen sin competencia visual — la villa ofrece lectura completa del cielo, desde el horizonte marino hasta el cenit.", paraQuienes: "Quien necesita techo alto y cielo abierto. Quien valora la lectura del cielo más que la del paisaje horizontal. Quien busca una residencia donde la sensación dominante sea la de respirar amplitud.", firma: "La villa que se habita mirando hacia arriba." },
  { id: "v05-horizonte", bloque: "IV · La Colección", marker: "CASA 05", type: "passport", atmosphere: "ivory", villaIndex: 4, posicion: "Fila superior · posterior", olfativoTitle: "El horizonte lateral.", olfativo: "La villa habita el horizonte lateral. Su orientación recibe vientos cruzados que traen, en proporciones distintas a otras villas, salinidad marina más limpia y un fondo de aire seco de altura que entra por la apertura lateral. Una nota más contenida — menos dulce, más mineral — caracteriza su perfil olfativo.", acusticoTitle: "El oleaje que llega y pasa.", acustico: "Oleaje medio combinado con silencio interrumpido por gaviotas lejanas al atardecer. La villa recibe la línea sonora del Caribe en lateral — no de frente, no de espalda, sino de costado —, lo que produce una calidad acústica particular: el oleaje parece llegar y pasar, no quedarse.", luminicoTitle: "La línea del horizonte siempre visible.", luminico: "La lectura lateral más limpia del Caribe. La luz entra lateralmente durante todo el día, sin obstrucciones laterales. La línea del horizonte está siempre visible desde la villa — desde la sala, desde la terraza, desde algunas alcobas.", paraQuienes: "Quien vive con la mirada en el horizonte. Quien necesita ver lejos para pensar cerca. Quien entiende que un horizonte presente cambia la calidad del pensamiento.", firma: "Para quien entiende que el horizonte es un estado mental." },
  { id: "v06-serena", bloque: "IV · La Colección", marker: "CASA 06", type: "passport", atmosphere: "ivory", villaIndex: 5, posicion: "Extremo izquierdo · fila superior · adyacente a piscina común", olfativoTitle: "Salitre suave. Gardenia silvestre.", olfativo: "La proximidad a la zona social común y a la vegetación de borde de la piscina configura un perfil olfativo distintivo: salitre suave llegando del Caribe, gardenia silvestre que crece en la vegetación común, y un fondo herbal de la zona aterrazada. Por la noche, la presencia del jazmín se extiende desde la fila vecina.", acusticoTitle: "El agua de la piscina como fondo continuo.", acustico: "Oleaje lejano (alrededor de 42 dB), filtrado por la vegetación de la ladera. Conversaciones contenidas ocasionales desde la zona social común. Pero el carácter sonoro dominante es la calma — el agua de la piscina como sonido de fondo continuo, casi imperceptible.", luminicoTitle: "Siempre fresca. Siempre suave.", luminico: "Luz matinal indirecta, suavizada por sombra vegetal natural al mediodía. La proximidad a la zona social común hace que la villa reciba menos sol directo en las terrazas que las villas de la fila opuesta — esto, lejos de ser una pérdida, define su carácter: la villa es siempre fresca, siempre suave.", paraQuienes: "Quien no necesita demostrar nada para sentir que llegó. Quien entiende que la calma no es un estado al que se llega — es el estado por defecto. Quien busca una residencia donde el silencio no es ausencia. Es presencia de aire.", firma: "Una villa para quien no necesita demostrar nada para sentir que llegó." },
  { id: "v07-coral", bloque: "IV · La Colección", marker: "CASA 07", type: "passport", atmosphere: "ivory", villaIndex: 6, posicion: "Extremo derecho · fila inferior frontal · primera del descenso", olfativoTitle: "El ecosistema marino caribeño.", olfativo: "La proximidad cromática y olfativa al Caribe define su perfil. Al amanecer, predominan tonos olfativos cálidos: salinidad concentrada, mineral marino, un toque de algas dulces que llega del rompiente. Durante el día, el aire trae salitre vivo. La villa con el perfil olfativo más vinculado al ecosistema marino caribeño.", acusticoTitle: "El mar no se contempla. Se acompaña.", acustico: "La cercanía descendente al Caribe le da una presencia sonora del oleaje más definida que la de las posteriores. Aves marinas — gaviotas, pelícanos — son parte del paisaje sonoro cotidiano. Es la villa donde el mar no se contempla. Se acompaña.", luminicoTitle: "La luz coralina del amanecer.", luminico: "La luz coralina del amanecer entra primero por la terraza descendente. Los tonos cálidos del primer sol — todavía no dorados, todavía rosados — bañan la villa durante los primeros minutos del día. La firma cromática queda definida por esos primeros minutos.", paraQuienes: "Quien busca contacto con el ecosistema marino, no contemplación distante. Quien valora la energía vital sobre la pausa contemplativa. Una villa para quien quiere vivir cerca del Caribe — no encima de él.", firma: "Donde el Caribe entra como cómplice, no como espectáculo." },
  { id: "v08-palma", bloque: "IV · La Colección", marker: "CASA 08", type: "passport", atmosphere: "ivory", villaIndex: 7, posicion: "Fila inferior · frontal", olfativoTitle: "Savia de palma. Frescura estructural.", olfativo: "Las palmeras integradas en la experiencia cotidiana definen su perfil olfativo: savia fresca de palma — un aroma verde, dulce, mineral —, yodo marino, y un fondo herbal de la sombra vegetal que protege la villa al mediodía. La frescura es estructural, no añadida. El aire siempre es más fresco aquí que en cualquier otra villa del conjunto.", acusticoTitle: "El sonido líquido del trópico.", acustico: "Las hojas de palma rozando entre sí con la brisa marina configuran la firma sonora. Es un sonido líquido, continuo, suave. El oleaje del Caribe llega presente, y se combina con el susurro vegetal de la sombra.", luminicoTitle: "La luz es coautora con la sombra.", luminico: "La sombra vegetal define la entrada de luz. Las palmeras filtran la luz directa del mediodía y producen patrones de sombra recortada sobre los muros internos — una cualidad lumínica que ninguna otra villa del conjunto reproduce. La luz aquí no es protagonista única. Es coautora con la sombra.", paraQuienes: "Quien busca el trópico real, no el trópico decorativo. Quien valora la sombra como pieza arquitectónica. Quien entiende que la frescura estructural es un lujo más profundo que el aire acondicionado.", firma: "Las palmeras del trópico integradas en la experiencia cotidiana." },
  { id: "v09-ambar", bloque: "IV · La Colección", marker: "CASA 09", type: "passport", atmosphere: "midnight", villaIndex: 8, posicion: "Fila inferior · frontal", olfativoTitle: "Madera caliente. Salinidad vespertina.", olfativo: "La villa con el perfil olfativo vespertino más definido. Hacia las cinco y media de la tarde, el aire trae salinidad concentrada del Caribe combinada con el aroma de madera caliente — las terrazas de la villa, calentadas por el sol del día, liberan un aroma maderoso que se mezcla con la brisa marina. Al anochecer, el jazmín de la fila vecina entra a la villa como cierre olfativo del día.", acusticoTitle: "La calma vespertina.", acustico: "La calma vespertina define su carácter sonoro. Después de las cinco de la tarde, el oleaje del Caribe se vuelve más rítmico — el final de la tarde es la hora de mayor regularidad oceánica. Aves migratorias de regreso. Brisa contenida.", luminicoTitle: "El ámbar de las 17:42.", luminico: "A las 17:42 — la hora exacta del color ámbar — las superficies internas de la villa se tiñen de un dorado saturado que define su carácter. Esta lectura cromática es geometría, no metáfora: la orientación de la terraza principal, el ángulo de la ladera, la distancia exacta al horizonte.", paraQuienes: "Quien habita el día desde el final. Quien entiende el atardecer como culminación, no como cierre. Una villa para quien sabe que las mejores conversaciones empiezan al final de la luz.", firma: "El ámbar de las 17:42." },
  { id: "v10-marina", bloque: "IV · La Colección", marker: "CASA 10", type: "passport", atmosphere: "ivory", villaIndex: 9, posicion: "Fila inferior · frontal", olfativoTitle: "La menor distancia olfativa al Caribe.", olfativo: "La menor distancia olfativa al Caribe en toda la colección. La salinidad marina llega aquí más concentrada que en cualquier otra villa — sin filtros vegetales intermedios, sin sombras que retengan el aire. El yodo, el ozono marino, la sal en suspensión: todos los componentes del perfil olfativo del mar Caribe llegan a Villa Marina con presencia más alta.", acusticoTitle: "El mar como carácter dominante.", acustico: "La proximidad sonora más cercana al oleaje en todo Goshen Hills. El sonido del mar es el carácter dominante de la villa — desde la sala, desde las terrazas, desde algunas alcobas. La firma acústica es continua, hipnótica, profunda.", luminicoTitle: "La luz oscila con el oleaje.", luminico: "La luz refleja desde el agua del Caribe y rebota sobre los muros internos de la villa. Es una calidad lumínica viva — el reflejo del agua introduce un movimiento permanente sobre las superficies, especialmente en las horas centrales del día.", paraQuienes: "Quien quiere escuchar el mar desde la cama, sin filtros arquitectónicos. Quien busca la inmersión, no la distancia. Una villa para quien entiende que el Caribe no es paisaje. Es atmósfera.", firma: "El mar se escucha desde la cama." },
  { id: "v11-sierra", bloque: "IV · La Colección", marker: "CASA 11", type: "passport", atmosphere: "midnight", villaIndex: 10, posicion: "Extremo izquierdo · fila inferior · adyacente a piscina común", olfativoTitle: "Cuatro capas olfativas.", olfativo: "El perfil olfativo más complejo de toda la colección — el único donde la presencia de la Sierra Nevada se hace sensorial. Tierra húmeda de la Sierra (especialmente después de las lluvias breves de la tarde), savia de palmera del propio patio privado, salitre del Caribe, y un fondo herbal del bosque de ladera que sube por la pendiente. Cuatro capas olfativas que ninguna otra villa combina.", acusticoTitle: "Sierra y Caribe en diálogo.", acustico: "El diálogo más completo entre la Sierra Nevada y el Caribe. Por la mañana, sonidos de bosque — aves de altura, viento entre árboles — llegan filtrados por la pendiente. Por la tarde y al atardecer, el oleaje del Caribe gana presencia. La villa habita ambas geografías acústicas. El silencio aquí no es ausencia — es la conversación entre dos paisajes.", luminicoTitle: "Un instrumento óptico.", luminico: "La mayor cantidad de luz natural recibida por una villa del conjunto, debido a la combinación de su orientación, su tamaño y su patio privado de casi 75 m². La luz entra por múltiples ejes — desde el patio, desde la terraza frontal, desde las aperturas laterales. La villa funciona como un instrumento óptico que captura el día desde distintos ángulos.", paraQuienes: "Quien necesita sentir paisaje antes que espectáculo. Quien busca la villa que cierra la conversación de la colección. Quien entiende que el patio privado de 75 metros cuadrados no es un lujo — es una declaración. La pieza mayor de Goshen Hills.", firma: "La villa que cierra la conversación. La pieza mayor de la colección." },

  { id: "26-dia", bloque: "V · La Vida", marker: "XIV · EL DÍA QUE SE RESPIRA", type: "editorial", atmosphere: "ivory", eyebrow: "XIV · EL DÍA QUE SE RESPIRA", title: "El día que se respira.", subtitle: "Una jornada en Goshen Hills.", body: ["El día empieza antes que uno. La luz dorada entra primero por la terraza superior — veintitrés minutos exactos en algunas villas, eternos en la sensación. El silencio nocturno se transforma en un silencio matinal distinto: aves, oleaje lejano, brisa que cruza la sala.","El desayuno se sirve en la terraza. La sombra natural de la vegetación de la ladera ya empezó a recortar la luz del mediodía antes que llegue. La piscina común aparece como una pieza compartida, no obligatoria.","Por la tarde, la villa cambia de carácter. Las superficies se tiñen del color del atardecer caribeño. La cena familiar se extiende sin urgencia. La noche llega con brisa, con jazmín, con la luna ascendiendo sobre el Caribe."], image: "salaInteriorVista", imageCaption: "La sala como umbral hacia el horizonte", microcopy: "Aquí, la jornada no se llena. Se respira." },
  { id: "27-noche", bloque: "V · La Vida", marker: "XV · LA NOCHE QUE PROTEGE", type: "image-hero", atmosphere: "midnight", eyebrow: "XV · LA NOCHE QUE PROTEGE", title: "La noche que protege.", subtitle: "La hora silenciosa de la ladera.", body: ["Después de las diez de la noche, Goshen Hills entra en su atmósfera más reconocible. La actividad urbana del Rodadero queda 45 metros más abajo, filtrada por la vegetación. La brisa marina se vuelve continua y suave. El oleaje se escucha sin esfuerzo desde las terrazas frontales; desde las posteriores, llega como un murmullo lejano.","La luna asciende sobre el Caribe. En las noches de luna creciente, su reflejo cruza el horizonte hasta encontrar la línea de la villa más alta — Villa Luna — y dibuja sobre el agua exactamente el trazo que el logotipo del proyecto reproduce.","Aquí la noche no se cierra. Se abre."], image: "piscinaNocturnaCierre", imageCaption: "La piscina común al anochecer · Sierra Nevada al fondo", microcopy: "Aquí, la noche no se cierra. Se abre." },

  { id: "28-razones", bloque: "VI · Tesis y Cierre", marker: "XVI · RAZONES QUE SOSTIENEN LA EMOCIÓN", type: "pillars", atmosphere: "ivory", eyebrow: "XVI · RAZONES QUE SOSTIENEN LA EMOCIÓN", title: "Razones que sostienen la emoción.", subtitle: "La lógica que defiende la decisión.", intro: "Una decisión patrimonial sólida no se sostiene solo en la emoción. Necesita razones que se puedan defender en la conversación con un socio, con la familia, con el asesor financiero. Goshen Hills tiene seis.", pillars: [
    { num: "01", title: "Escala finita", body: "Once villas exactas. Sin segunda fase. Sin ampliaciones. El producto está estructuralmente protegido contra la dilución." },
    { num: "02", title: "Macroproyecto", body: "Reserva de la Montaña, 62.900 m² urbanísticamente planificados. El entorno preserva el valor por encima de la villa individual." },
    { num: "03", title: "Topografía irrepetible", body: "Ladera de 45 metros sobre el nivel del mar. Vista panorámica al Caribe. Cercanía a la Sierra Nevada. La geometría no se replica." },
    { num: "04", title: "Arquitectura de autor", body: "Raúl Caballería, matrícula registrada A144552015-414917. Diseño firmado, no ensamblado." },
    { num: "05", title: "Estructura fiduciaria", body: "Toda separación pasa por contrato fiduciario con entidad supervisada por la Superfinanciera. El dinero nunca ingresa a cuentas del promotor." },
    { num: "06", title: "Activo de uso mixto", body: "Vocación principalmente residencial. Potencial de uso vacacional ocasional evaluado caso por caso." },
  ], microcopy: "Seis razones. Una decisión." },
  { id: "29-finitud", bloque: "VI · Tesis y Cierre", marker: "XVII · LA LÓGICA DE LOS ACTIVOS FINITOS", type: "manifesto", atmosphere: "ivory", eyebrow: "XVII · LA LÓGICA DE LOS ACTIVOS FINITOS", title: "Por qué la escasez no es marketing. Es la categoría.", body: ["En el mercado inmobiliario colombiano de lujo, la frase «quedan pocas unidades» se ha convertido en argumento común. En Goshen Hills, la escasez no es un argumento. Es la condición estructural de existencia del proyecto.","Once villas. Punto. No hay decimosegunda. No hay segunda etapa. La planificación urbanística, el lote, la implantación, la firma del arquitecto — todo está calibrado para once. Esa restricción no es una limitación: es la decisión que define la categoría.","La consecuencia patrimonial: la villa que se reconoce hoy no se va a poder construir mañana."], microcopy: "Once villas. Sin replicación posible." },
  { id: "30-pilares", bloque: "VI · Tesis y Cierre", marker: "XVIII · LO QUE SOSTIENE LA DECISIÓN", type: "pillars", atmosphere: "ivory", eyebrow: "XVIII · LO QUE SOSTIENE LA DECISIÓN", title: "Lo que sostiene la decisión.", subtitle: "Cuatro pilares verificables, no promesas.", intro: "La aversión a la preventa es una respuesta racional. Goshen Hills la enfrenta con cuatro mecanismos jurídicos y operativos que están operando antes que la primera conversación con el comprador empiece.", pillars: [
    { num: "01", title: "Fiducia inmobiliaria regulada", body: "Patrimonio autónomo administrado por entidad fiduciaria vigilada por la Superintendencia Financiera de Colombia. El dinero del comprador no ingresa a cuentas del promotor en ningún momento." },
    { num: "02", title: "Arquitecto matriculado", body: "Raúl Caballería · Matrícula A144552015-414917 · Verificable en cpnaa.gov.co. Responsabilidad civil profesional vigente." },
    { num: "03", title: "Garantía de recompra", body: "A los tres años posteriores a la entrega, AQUALINDA ofrece garantía contractual de recompra al precio de compra más IPC acumulado." },
    { num: "04", title: "Co-creación con el arquitecto", body: "Sesión privada con Caballería para definir acabados bespoke (fases Founders y Preventa I). La villa se co-crea, no se compra terminada." },
  ], microcopy: "Cuatro pilares. Cero promesas vacías." },
  { id: "31-atelier", bloque: "VI · Tesis y Cierre", marker: "XIX · EL ATELIER DESARROLLADOR", type: "quote-page", atmosphere: "midnight", eyebrow: "XIX · EL ATELIER DESARROLLADOR", title: "AQUALINDA S.A.S.", body: ["AQUALINDA S.A.S. es un atelier inmobiliario, no una promotora masiva. Su filosofía rectora se puede expresar en una frase: el Caribe colombiano merece proyectos concebidos con criterio, no con tamaño.","El socio fundador, Julián, opera desde España y mantiene representación local en Santa Marta. En un proyecto de once villas, el comprador no compra una promotora anónima. Compra la visión de una persona que será, eventualmente, su vecino."], quote: "Este proyecto no nació de una hoja de cálculo. Nació un sábado a las seis de la tarde, cuando la luz del atardecer convirtió el mar en cobre líquido.", quoteAuthor: "Julián, socio fundador", microcopy: "El comprador no compra una promotora. Compra a su vecino." },
  { id: "32-conversacion", bloque: "VI · Tesis y Cierre", marker: "XX · LA CONVERSACIÓN PRIVADA", type: "process", atmosphere: "ivory", eyebrow: "XX · LA CONVERSACIÓN PRIVADA", title: "La conversación privada.", subtitle: "Los pasos para incorporar una familia a la colección.", steps: [
    { num: "01", title: "Solicitud de información privada", body: "La conversación inicia con una solicitud directa al equipo del proyecto. No publicamos en portales inmobiliarios. No hacemos open house." },
    { num: "02", title: "Diálogo inicial", body: "Una conversación de 30 a 45 minutos para entender el perfil familiar y las preferencias arquitectónicas. No es una llamada de venta. Es matchmaking entre familia y villa." },
    { num: "03", title: "Visita o presentación inmersiva", body: "Visita al lote en Santa Marta, o presentación inmersiva remota con el equipo arquitectónico. La villa correcta empieza a reconocerse." },
    { num: "04", title: "Selección y separación", body: "Cuando hay reconocimiento, se firma la separación a través del contrato fiduciario regulado por la Superfinanciera." },
    { num: "05", title: "Co-creación con el arquitecto", body: "Sesión privada con Raúl Caballería para definir acabados bespoke. Solo para fases Founders y Preventa I." },
    { num: "06", title: "Formalización documental", body: "Promesa de compraventa, programación financiera y acompañamiento durante la construcción y la entrega." },
    { num: "07", title: "Permanencia", body: "Goshen Hills no termina con la entrega. Comienza con la entrega." },
  ], microcopy: "La conversación comienza antes que la visita." },
  { id: "33-precio", bloque: "VI · Tesis y Cierre", marker: "XXI · SOBRE EL PRECIO", type: "manifesto", atmosphere: "ivory", eyebrow: "XXI · SOBRE EL PRECIO", title: "El precio no se publica. Se comparte.", subtitle: "La lógica de una colección de once.", body: ["En una colección de once villas, el precio no funciona como en un inventario. Cada villa es distinta — por posición, por área, por carácter — y la fase comercial vigente, la disponibilidad real y el matchmaking entre la villa y la familia son parte de la conversación.","Esto no es una técnica comercial. Es una decisión de precisión. Publicar un precio único haría parecer que las once villas son intercambiables. No lo son.","En la primera conversación, una vez entendemos la villa que mejor refleja el perfil familiar, compartimos el precio correspondiente, las condiciones de la fase comercial vigente, y la estructura de pagos a través de la fiducia regulada."], microcopy: "El precio se comparte. No se publica." },
  { id: "34-cierre", bloque: "VI · Tesis y Cierre", marker: "XXII · CIERRE", type: "closing", atmosphere: "midnight", eyebrow: "XXII · CIERRE", title: "La conversación comienza antes que la visita.", body: ["Goshen Hills no se descubre por prisa. Se reconoce por criterio.","Once villas. Una ladera. Un horizonte que no se repite."], ctas: [
    { label: "Solicitar información privada", level: "primary" },
    { label: "Agendar conversación con el equipo de proyecto", level: "secondary" },
    { label: "Explorar qué villa pertenece a su forma de habitar el Caribe", level: "tertiary" },
  ], contact: "AQUALINDA S.A.S. · goshenhills.co", image: "piscinaNocturnaCierre" },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
function paragraphs(arr, klass = "body-text") {
  return (arr || []).map(p => `<p class="${klass}">${esc(p)}</p>`).join("");
}
function imgTag(key, alt = "", caption = "") {
  if (!key) return placeholder(caption || alt);
  return `<img src="images/${key}.jpg" alt="${esc(alt)}" loading="lazy" onerror="this.outerHTML=this.dataset.fb;" data-fb='${esc(placeholder(caption || alt))}'/>`;
}
function placeholder(label) {
  return `<div class="img-placeholder"><div class="img-placeholder__eyebrow">Imagen pendiente</div><div class="img-placeholder__desc">${esc(label || "")}</div></div>`;
}
function marker(s) {
  return s.marker ? `<div class="section__marker">${esc(s.marker)}</div>` : "";
}

// ─────────────────────────────────────────────
// Renderers — match dossier.css class contract
// ─────────────────────────────────────────────
function renderCover(s) {
  return `
    <div class="cover">
      <div class="cover__bg">${imgTag(s.image, s.title)}</div>
      <div class="cover__overlay"></div>
      <div class="cover__content">
        <div class="cover__top">
          <div class="eyebrow">${esc(s.eyebrow)}</div>
        </div>
        <div class="cover__center">
          <h1 class="cover__title">${esc(s.title)}</h1>
          <hr class="hairline" />
          <p class="cover__sub">${esc(s.subtitle)}</p>
        </div>
        <div class="cover__bottom">
          <div class="logo-mark">
            <svg class="logo-mark__icon" viewBox="0 0 80 50" fill="none" stroke="currentColor" stroke-width="0.8" aria-hidden="true">
              <path d="M5 35 Q20 22 28 30 T55 28 T75 18" />
              <circle cx="62" cy="14" r="3" fill="currentColor" stroke="none" opacity="0.85" />
              <path d="M5 42 L75 42" opacity="0.5" />
            </svg>
            <div class="logo-mark__name">Goshen Hills</div>
            <div class="logo-mark__name-sub">por Aqualinda</div>
          </div>
          <div>${esc(s.footer)}</div>
        </div>
      </div>
    </div>`;
}

function renderManifesto(s) {
  return `
    ${marker(s)}
    <div class="manifesto">
      <header class="manifesto__head">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="title-serif manifesto__title">${esc(s.title)}</h2>
        ${s.subtitle ? `<p class="subtitle-italic manifesto__sub">${esc(s.subtitle)}</p>` : ""}
      </header>
      <div class="manifesto__body">${paragraphs(s.body)}</div>
      ${s.microcopy ? `<footer class="manifesto__foot"><div class="microcopy">${esc(s.microcopy)}</div></footer>` : ""}
    </div>`;
}

function renderQuotePage(s) {
  return `
    ${marker(s)}
    <div class="quote-page">
      <header class="quote-page__head">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="quote-page__title">${esc(s.title)}</h2>
        <hr class="hairline" />
      </header>
      ${s.body ? `<div class="quote-page__body">${paragraphs(s.body)}</div>` : ""}
      <div>
        ${s.quote ? `<div class="quote-block">«${esc(s.quote)}»${s.quoteAuthor ? `<span class="quote-block__author">— ${esc(s.quoteAuthor)}</span>` : ""}</div>` : ""}
        ${s.pillars ? `<div class="pillars-line" style="margin-top:36px">${s.pillars.map((p,i)=>`<span>${esc(p)}</span>${i<s.pillars.length-1?'<span class="pillars-line__sep"></span>':''}`).join("")}</div>` : ""}
        ${s.microcopy ? `<div class="microcopy" style="justify-content:center;margin-top:36px">${esc(s.microcopy)}</div>` : ""}
      </div>
    </div>`;
}

function renderEditorial(s) {
  return `
    ${marker(s)}
    <div class="editorial">
      <div class="editorial__text">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="title-serif editorial__title">${esc(s.title)}</h2>
        ${s.subtitle ? `<p class="subtitle-italic editorial__sub">${esc(s.subtitle)}</p>` : ""}
        <div class="editorial__body">${paragraphs(s.body)}</div>
        ${s.quote ? `<blockquote class="editorial__quote">«${esc(s.quote)}»${s.quoteAuthor ? `<span>— ${esc(s.quoteAuthor)}</span>` : ""}</blockquote>` : ""}
        <div class="editorial__foot">
          ${s.microcopy ? `<div class="microcopy">${esc(s.microcopy)}</div>` : ""}
          ${s.cta ? `<a class="cta-link" href="#34-cierre">${esc(s.cta)} <span>→</span></a>` : ""}
        </div>
      </div>
      <figure class="editorial__image">
        <div class="editorial__image-wrap">${imgTag(s.image, s.imageCaption || s.title, s.imageCaption || s.title)}</div>
        ${s.imageCaption ? `<figcaption class="editorial__image-cap">${esc(s.imageCaption)}</figcaption>` : ""}
      </figure>
    </div>`;
}

function renderImageHero(s) {
  return `
    <div class="image-hero">
      <div class="image-hero__bg">${imgTag(s.image, s.title)}</div>
      <div class="image-hero__overlay"></div>
      <div class="image-hero__content">
        <header class="image-hero__head">
          <div class="eyebrow">${esc(s.eyebrow)}</div>
          <h2 class="title-serif image-hero__title">${esc(s.title)}</h2>
          ${s.subtitle ? `<p class="subtitle-italic image-hero__sub">${esc(s.subtitle)}</p>` : ""}
        </header>
        <div class="image-hero__body">${paragraphs(s.body)}</div>
        <div class="image-hero__foot">
          ${s.microcopy ? `<div class="microcopy">${esc(s.microcopy)}</div>` : ""}
          ${s.imageCaption ? `<div class="image-hero__cap">${esc(s.imageCaption)}</div>` : ""}
        </div>
      </div>
    </div>`;
}

function renderVillaIndex(s) {
  const rows = VILLAS.map(v => {
    const slug = "v" + v.casa + "-" + v.nombre.split(" ")[1].toLowerCase().replace(/[áä]/g,"a");
    return `
      <a class="villa-row" href="#${slug}">
        <div class="villa-row__num">${esc(v.casa)}</div>
        <div class="villa-row__main">
          <div class="villa-row__name">${esc(v.nombre)}</div>
          <div class="villa-row__desc">
            <span>${esc(v.descriptor)}</span>
            ${v.singular ? `<span class="tag-singular">Pieza singular</span>` : ""}
          </div>
        </div>
        <div class="villa-row__meta">${esc(v.tipologia)} · ${esc(v.area)}</div>
        <div class="villa-row__arrow">→</div>
      </a>`;
  }).join("");
  return `
    ${marker(s)}
    <div class="villa-index">
      <header class="villa-index__head">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="title-serif villa-index__title">${esc(s.title)}</h2>
        <p class="subtitle-italic villa-index__sub">${esc(s.subtitle)}</p>
        <div class="villa-index__body">${paragraphs(s.body)}</div>
      </header>
      <ul class="villa-list">${rows}</ul>
      ${s.microcopy ? `<div class="microcopy" style="margin-top:40px">${esc(s.microcopy)}</div>` : ""}
    </div>`;
}

function renderPassport(s) {
  const v = VILLAS[s.villaIndex];
  return `
    ${marker(s)}
    <div class="passport">
      <header class="passport__head">
        <div class="eyebrow">CASA ${esc(v.casa)} · PASAPORTE SENSORIAL</div>
        <h2 class="title-serif passport__title">${esc(v.nombre)}</h2>
        <p class="subtitle-italic passport__desc">${esc(v.descriptor)}</p>
      </header>

      <div class="passport__meta">
        <div class="passport__meta-item"><span>Tipología</span><span>${esc(v.tipologia)}</span></div>
        <div class="passport__meta-item"><span>Área construida</span><span>${esc(v.area)}</span></div>
        ${v.patio ? `<div class="passport__meta-item"><span>Patio</span><span>${esc(v.patio)}</span></div>` : ""}
      </div>

      <div class="passport__pos">
        <div class="eyebrow">Posición en la colección</div>
        <p>${esc(s.posicion)}</p>
      </div>

      ${v.singular ? `
        <div class="passport__singular">
          <div class="passport__singular-arrow">→</div>
          <div class="passport__singular-text">${esc(v.singularNote)}</div>
        </div>` : ""}

      <div class="passport__layout">
        <div class="passport__profiles">
          <div class="profile-block">
            <div class="eyebrow">Perfil olfativo</div>
            ${s.olfativoTitle ? `<h3 class="profile-block__title">${esc(s.olfativoTitle)}</h3>` : ""}
            <p class="profile-block__body">${esc(s.olfativo)}</p>
          </div>
          <div class="profile-block">
            <div class="eyebrow">Perfil acústico</div>
            ${s.acusticoTitle ? `<h3 class="profile-block__title">${esc(s.acusticoTitle)}</h3>` : ""}
            <p class="profile-block__body">${esc(s.acustico)}</p>
          </div>
          <div class="profile-block">
            <div class="eyebrow">Perfil lumínico</div>
            ${s.luminicoTitle ? `<h3 class="profile-block__title">${esc(s.luminicoTitle)}</h3>` : ""}
            <p class="profile-block__body">${esc(s.luminico)}</p>
          </div>
        </div>
        <figure class="passport__media">
          <div class="passport__media-img">${imgTag(v.img, v.nombre, v.nombre + " · " + v.descriptor)}</div>
          <figcaption class="passport__media-cap">${esc(v.nombre)} · ${esc(v.descriptor)}</figcaption>
        </figure>
      </div>

      <div class="passport__paraquienes">
        <div class="eyebrow">Para quienes</div>
        <p class="passport__paraquienes-body">${esc(s.paraQuienes)}</p>
      </div>

      <div class="passport__firma">
        <div class="passport__firma-text">${esc(s.firma)}</div>
      </div>

      <a class="cta-link" href="#34-cierre">Solicitar conversación privada sobre ${esc(v.nombre)} <span>→</span></a>
    </div>`;
}

function renderPillars(s) {
  return `
    ${marker(s)}
    <div class="pillars">
      <header class="pillars__head">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="title-serif pillars__title">${esc(s.title)}</h2>
        ${s.subtitle ? `<p class="subtitle-italic pillars__sub">${esc(s.subtitle)}</p>` : ""}
        ${s.intro ? `<p class="body-text pillars__intro">${esc(s.intro)}</p>` : ""}
      </header>
      <div class="pillars__grid" style="grid-template-columns: repeat(${s.pillars.length === 4 ? 2 : 3}, 1fr)">
        ${s.pillars.map(p => `
          <div class="pillar">
            <div class="pillar__num">${esc(p.num)}</div>
            <h3 class="pillar__title">${esc(p.title)}</h3>
            <p class="pillar__body">${esc(p.body)}</p>
          </div>`).join("")}
      </div>
      ${s.microcopy ? `<div class="pillars__foot"><div class="microcopy">${esc(s.microcopy)}</div></div>` : ""}
    </div>`;
}

function renderProcess(s) {
  return `
    ${marker(s)}
    <div class="process">
      <header class="process__head">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="title-serif process__title">${esc(s.title)}</h2>
        ${s.subtitle ? `<p class="subtitle-italic process__sub">${esc(s.subtitle)}</p>` : ""}
      </header>
      <ol class="process__list" style="list-style:none;padding:0;margin:0">
        ${s.steps.map(st => `
          <li class="step">
            <div class="step__num">${esc(st.num)}</div>
            <h3 class="step__title">${esc(st.title)}</h3>
            <p class="step__body">${esc(st.body)}</p>
          </li>`).join("")}
      </ol>
      ${s.microcopy ? `<div class="microcopy">${esc(s.microcopy)}</div>` : ""}
    </div>`;
}

function renderClosing(s) {
  return `
    ${s.image ? `<div class="cover__bg">${imgTag(s.image, s.title)}</div><div class="cover__overlay" style="background:linear-gradient(180deg, rgba(11,20,34,0.85) 0%, rgba(11,20,34,0.7) 100%)"></div>` : ""}
    <div class="closing" style="position:relative;z-index:2;flex:1">
      <header class="closing__head">
        <div class="eyebrow">${esc(s.eyebrow)}</div>
        <h2 class="title-serif closing__title">${esc(s.title)}</h2>
        <hr class="hairline" />
      </header>
      <div class="closing__body">${paragraphs(s.body)}</div>
      <div class="closing__ctas">
        ${s.ctas.map(c => `<a class="cta-${c.level}" href="mailto:hola@goshenhills.co">${esc(c.label)} <span class="arrow">→</span></a>`).join("")}
      </div>
      <div class="closing__contact">${esc(s.contact)}</div>
    </div>`;
}

const RENDERERS = {
  "cover": renderCover,
  "manifesto": renderManifesto,
  "quote-page": renderQuotePage,
  "editorial": renderEditorial,
  "image-hero": renderImageHero,
  "villa-index": renderVillaIndex,
  "passport": renderPassport,
  "pillars": renderPillars,
  "process": renderProcess,
  "closing": renderClosing,
};

// ─────────────────────────────────────────────
// Mount
// ─────────────────────────────────────────────
const dossierEl = document.getElementById("dossier");
SECTIONS.forEach(s => {
  const el = document.createElement("section");
  el.className = `section section--${s.atmosphere} section--${s.type}`;
  el.id = s.id;
  el.dataset.bloque = s.bloque;
  el.setAttribute("data-screen-label", s.id);
  if (s.type === "cover" || s.type === "image-hero") el.style.padding = "0";
  const r = RENDERERS[s.type];
  el.innerHTML = r ? r(s) : `<div style="padding:60px;color:#fff">Unknown type: ${s.type}</div>`;
  dossierEl.appendChild(el);
});

// ─────────────────────────────────────────────
// Sidebar nav
// ─────────────────────────────────────────────
const sidebarNav = document.getElementById("sidebarNav");
const blocks = {};
SECTIONS.forEach(s => { (blocks[s.bloque] = blocks[s.bloque] || []).push(s); });

let blockIdx = 0;
Object.entries(blocks).forEach(([blockName, items]) => {
  blockIdx++;
  const blockEl = document.createElement("div");
  blockEl.className = "nav-block" + (blockIdx > 1 ? " is-collapsed" : "");
  const parts = blockName.split(" · ");
  const head = `
    <button class="nav-block__head" type="button" data-block="${esc(parts[0])}">
      <span>${esc(parts[0])} · ${esc(parts[1] || "")}</span>
      <span class="chev"></span>
    </button>`;
  const list = items.map((it, i) => {
    let label;
    if (it.type === "passport") {
      const v = VILLAS[it.villaIndex];
      label = `<span class="nav-link__num">${v.casa}</span>${v.nombre}`;
    } else {
      let t = (it.title || it.eyebrow || it.id).replace(/\.$/, "");
      if (t.length > 42) t = t.slice(0, 40) + "…";
      label = t;
    }
    return `<a class="nav-link" href="#${it.id}" data-target="${it.id}">${label}</a>`;
  }).join("");
  blockEl.innerHTML = head + `<div class="nav-block__items">${list}</div>`;
  sidebarNav.appendChild(blockEl);
});

sidebarNav.querySelectorAll(".nav-block__head").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("is-collapsed");
  });
});

// ─────────────────────────────────────────────
// Mobile nav
// ─────────────────────────────────────────────
const navToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sidebar");
navToggle.addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
  navToggle.classList.toggle("is-open");
});
sidebar.addEventListener("click", e => {
  if (e.target.closest("a.nav-link")) {
    sidebar.classList.remove("is-open");
    navToggle.classList.remove("is-open");
  }
});

// ─────────────────────────────────────────────
// Progress + active section
// ─────────────────────────────────────────────
const progressFill = document.getElementById("progressFill");
const navLinks = sidebarNav.querySelectorAll("a[data-target]");

function onScroll() {
  const h = document.documentElement;
  const total = h.scrollHeight - h.clientHeight;
  const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
  progressFill.style.width = pct + "%";

  const offset = window.innerHeight * 0.3;
  let activeId = SECTIONS[0].id;
  for (const s of SECTIONS) {
    const el = document.getElementById(s.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top - offset <= 0) activeId = s.id;
    else break;
  }
  navLinks.forEach(a => a.classList.toggle("is-active", a.dataset.target === activeId));

  // auto-expand active block
  const activeSection = SECTIONS.find(s => s.id === activeId);
  if (activeSection) {
    const targetRoman = activeSection.bloque.split(" · ")[0];
    sidebarNav.querySelectorAll(".nav-block").forEach(b => {
      const head = b.querySelector(".nav-block__head");
      if (head && head.dataset.block === targetRoman) b.classList.remove("is-collapsed");
    });
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// ─────────────────────────────────────────────
// Smooth-scroll anchors
// ─────────────────────────────────────────────
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const t = document.getElementById(id);
  if (!t) return;
  e.preventDefault();
  t.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#" + id);
});
