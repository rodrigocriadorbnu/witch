/* =========================
   ELEMENTOS
========================= */

const mainSite = document.getElementById("main-site");

const requestScreen =
    document.getElementById("request-screen");

const spellScreen =
    document.getElementById("spell-screen");

const resultScreen =
    document.getElementById("result-screen");

const offlineScreen =
    document.getElementById("offline-screen");


const pedidoButton =
    document.getElementById("pedido-button");

const feiticoButton =
    document.getElementById("feitico-button");


const closeRequest =
    document.getElementById("close-request");

const closeSpell =
    document.getElementById("close-spell");


const sendRequest =
    document.getElementById("send-request");

const sendSpell =
    document.getElementById("send-spell");


const returnButton =
    document.getElementById("return-button");


const requestText =
    document.getElementById("request-text");

const spellText =
    document.getElementById("spell-text");


const resultMessage =
    document.getElementById("result-message");


const backgroundMusic =
    document.getElementById("background-music");


const sendAudio =
    new Audio("assets/correntes.mp3");


/* =========================
   MÚSICA
========================= */

/*
   Navegadores podem bloquear
   autoplay com som.

   Por isso iniciamos a música
   no primeiro clique do usuário.
*/

function startMusic() {

    backgroundMusic.volume = 0.25;

    backgroundMusic.play()
        .catch(() => {

            console.log(
                "A música aguardará uma interação do usuário."
            );

        });

}


document.addEventListener(
    "click",
    startMusic,
    { once: true }
);



/* =========================
   ABRIR PEDIDO
========================= */

pedidoButton.addEventListener(
    "click",
    function () {

        mainSite.style.display = "none";

        requestScreen.classList.add("active");

        requestText.focus();

    }
);



/* =========================
   ABRIR FEITIÇO
========================= */

feiticoButton.addEventListener(
    "click",
    function () {

        mainSite.style.display = "none";

        spellScreen.classList.add("active");

        spellText.focus();

    }
);



/* =========================
   FECHAR PEDIDO
========================= */

closeRequest.addEventListener(
    "click",
    function () {

        requestScreen.classList.remove("active");

        mainSite.style.display = "block";

    }
);



/* =========================
   FECHAR FEITIÇO
========================= */

closeSpell.addEventListener(
    "click",
    function () {

        spellScreen.classList.remove("active");

        mainSite.style.display = "block";

    }
);



/* =========================
   FRASES
========================= */

/*
   Depois vamos substituir
   esta lista pelas 30 frases
   definitivas.
*/

const messages = [

    "O pedido foi recebido pelas sombras.",

    "Seu desejo foi entregue ao destino.",

    "As sombras ouviram aquilo que você pediu.",

    "O ritual foi concluído. Agora aguarde.",

    "Seu pedido desapareceu entre as velas.",

    "A noite recebeu sua mensagem.",

    "O ritual foi selado.",

    "Seu desejo agora pertence às sombras."

];



/* =========================
   MOSTRAR RESULTADO
========================= */

function showResult() {

    requestScreen.classList.remove("active");

    spellScreen.classList.remove("active");

    resultScreen.classList.add("active");


    const randomIndex =
        Math.floor(
            Math.random() * messages.length
        );


    resultMessage.textContent =
        messages[randomIndex];

}



/* =========================
   ENVIAR PEDIDO
========================= */

sendRequest.addEventListener(
    "click",
    function () {

        if (requestText.value.trim() === "") {

            alert(
                "Você precisa escrever seu pedido."
            );

            return;

        }


        playSendSound();

        showResult();

    }
);



/* =========================
   ENVIAR FEITIÇO
========================= */

sendSpell.addEventListener(
    "click",
    function () {

        if (spellText.value.trim() === "") {

            alert(
                "Você precisa escrever algo."
            );

            return;

        }


        playSendSound();

        showResult();

    }
);



/* =========================
   SOM DE ENVIO
========================= */

function playSendSound() {

    sendAudio.currentTime = 0;

    sendAudio.volume = 0.8;

    sendAudio.play()
        .catch(() => {});

}



/* =========================
   VOLTAR
========================= */

returnButton.addEventListener(
    "click",
    function () {

        resultScreen.classList.remove("active");

        mainSite.style.display = "block";

        requestText.value = "";

        spellText.value = "";

    }
);



/* =========================
   STATUS DA BRUXA
========================= */

const statusLight =
    document.getElementById("status-light");

const statusText =
    document.getElementById("status-text");


function setOnline() {

    statusLight.classList.remove("offline");

    statusLight.classList.add("online");

    statusText.textContent = "Online";

    offlineScreen.classList.remove("active");

}



function setOffline() {

    statusLight.classList.remove("online");

    statusLight.classList.add("offline");

    statusText.textContent = "Offline";

    offlineScreen.classList.add("active");

}



/* =========================
   OFFLINE ALEATÓRIO
========================= */

function randomOffline() {

    /*
       Tempo aleatório entre
       20 e 50 segundos.
    */

    const time =
        Math.floor(
            Math.random() *
            (60000 - 40000)
            + 20000
        );


    setTimeout(
        function () {

            setOffline();


            /*
               Fica offline entre
               8 e 20 segundos.
            */

            const offlineTime =
                Math.floor(
                    Math.random() *
                    (20000 - 8000)
                    + 8000
                );


            setTimeout(
                function () {

                    setOnline();

                    randomOffline();

                },
                offlineTime
            );


        },
        time
    );

}


randomOffline();