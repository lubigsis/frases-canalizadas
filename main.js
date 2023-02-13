let frasesCanalizadas= [
    'Uno no puede tener abundancia sin estar alineado con el amor, y no puede estar alineado con el amor sin que eso se manifieste en abundancia',
    'La magia es conexión, conexión con un propósito que tenga sentido y significado',
    'Tu vibración está preparada para despertar... despierta sin miedo, actúa sin demora',
    'No te rindas',
    'Todo está bien',
    'El Universo siempre te dará la oportunidad de sanar, de reenfocar tu vida y de encontrar aquello que dé luz a la voz de tu alma',
    'En los momentos en los que estás ayudando a otra persona, sos un faro de luz',
    'La verdad brilla, la verdad resplandece, la verdad ensancha, la verdad hace sentir paz y plenitud',
    'Hónrate por la belleza que desprendes cuando sonríes a la vida sin tapujos, sin máscaras, sin recelos',
    'En la oscuridad hay evolución. Ojalá todos los caminos fueran placenteros y fáciles, pero bien sabes que la recompensa valdrá la pena',
    'Busca momentos de calma, momentos donde la claridad se manifieste, momentos de paz donde todo repose',
    'Una muerte consciente da paso a un renacimiento sublime',
    'Una nueva realidad se abre en tu caminar; toma conciencia que lo tangible viene impregnado, moldeado, fuertemente impulsado por energías sutiles',
    'Uno no puede amar verdaderamente su destino cuendo no ama cada paso que está dando',
    'No hay nada que suceda en tu vida para lo que no estés preparado',
    'Abrir las alas es una consecuencia cuando celebras quien realmente sos',
    'Deja que tu intuición guíe los próximos pasos a dar',
    'La humildad es, en sí misma, una gran herramienta porque no tiene apego a nada y fluye con la grandeza de la simplicidad',
    'Un acto de bondad no implica siempre entrega, implica entendimiento',
    'Cuando uno vibra en amor, solo puede ver con los ojos del alma',
    'La falsa seguridad del personaje puede ser la muerte del alma',
    'La energía en la que nos manifestamos es un estado de conciencia',
    'Ha llegado el momento de dejar atrás los miedos para encariñarte, más que nunca, con la luz que hay en tu propio camino',
    'Sé libre de perderte para encontrar tu camino en el próximo horizonte',
    'Recuerda que viniste a formar parte del gran ecosistema de Madre Tierra',
    'No puedes responder solo a las necesidades físicas del día a día, tienes necesidades espirituales que atender',
    'Cada día puede ser el que marcó el punto de inflexión hacia tu nuevo horizonte',
    'Mantente firme como el roble, manten tu energía estable y ello permitirá que, independientemente de lo que suceda fuera, tu puedas brillar',
    'Honra a tus ancestros y ábreles las puertas de tu corazón',
    'El camino de vida es aquello que tu alma desea manifestar en el aquí y en al ahora'

];

let indice = 0;

setInterval(mostrarFraseSiguiente, 10000);

function mostrarFraseSiguiente(){
    indice++;
    if(indice > frasesCanalizadas.length){
        indice = 0;
    }

    document.getElementById('salidaJS').innerHTML = frasesCanalizadas[indice];

}
