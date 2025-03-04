/*
fil: js.js
formål: at lave javsscript til vores hjemmeside
*/

hoved.innerHTML = `
 
        <a href="" class="menu"></a>
        <input type="checkbox" id="menu-bar">
        <label for="menu-bar">Menu</label>

        <nav class="navbar">

            <a href="index.html" id="logoid">
                <img src="/img/logolys.png" id="headlogo" alt="logo">
            </a>

            <ul>
                <li><a href="ourbeer.html">Vores Øl</a>
                    <ul>
                        <li><a href="oversigt.html">Beskrivelse af øllene</a></li>
                        <li><a href="testforide.html">Test hvilken øl der passer til din smag</a></li>
                        <li><a href="ourbeer.html">Alkoholfri øl produktion</a></li>
                    </ul>
                </li>
                        
                <li><a href="oversigt.html">Shop</a>
                    <ul>
                        <li><a href="oversigt.html">Oversigt over øllene</a></li>
                        <li><a href="abonnement.html">Abonnement</a></li>
                    </ul>
                </li>

                <li><a href="omos.html">Om Os</a>
                    <ul>
                        <li><a href="omos.html">Vores historie</a></li>
                        <li><a href="fejl404.html">Kontakt</a></li>
                    </ul>
                </li>

            </ul>

            <div class="headikoncontainer">
                <a href="fejl404.html">
                    <img src="/img/profile.webp" class="headikon" alt="ikon af profil">
                </a>

                <a href="fejl404.html">
                    <img src="/img/search.webp" class="headikon" alt="ikon af loop til søgning af ord">
                </a>

                <a href="fejl404.html">
                    <img src="/img/kurv.webp" class="headikon" alt="ikon til shoppingkurv og køb">
                </a>
            </div>
        </nav>

`


fod.innerHTML += `
<div class="footer">
            <div id="section1">
                <div>
                    <h1>Kontakt Os</h1>
                    <p>ZeroBuzz Brew</p>
                    <p>Bryggens Allé 66,</p>
                    <p>8000 Aarhus, Denmark</p>
                    <p>+45 66 00 66 11</p>
                    <p>ZeroBuzz@Brew.dk</p>
                </div>
                <div id="footerlinks">
                    <a href="oversigt.html">Shop</a>
                    <a href="omos.html">Om Os</a>
                    <a href="ourbeer.html">Vores Øl</a>
                    <a href="abonnoment.html">Abonnoment</a>
                    <a href="fejl404.html">FAQ</a>
                </div>
            </div>
            <div id="socialmedier">
                <img src="img/fb.webp" alt="Facebook icon" width="50">
                <img src="img/ig.webp" alt="Instagram icon" width="50">
            </div>
        </div>
`



function nr1() {
    sporgsmal.innerHTML = `
    <p>
        Sprøgsmål 1 ud af 5 <br> <br>
        Hvad er din fortrukkende smag? <br>
           
    </p>
    <button id="svar1" onclick="style='background-color:#c5d27f;'">Æble</button>
    <button id="svar2" onclick="style='background-color:#c5d27f;'">Frugt</button>
    <button id="svar3" onclick="style='background-color:#c5d27f;'">Frisk</button>
    `
    pilh.innerHTML = `
        <a onclick="nr2()"> &#8594;</a>
    `

    pilv.innerHTML = `
        <a onclick="nr2()"> &#8594;</a>
    `
}


function nr2(){
    
        sporgsmal.innerHTML = `
        <p>
            Sprøgsmål 2 ud af 5 <br> <br>
            Foretrækker du meget eller lidtbundfald? <br>  
        </p>
        <button id="svar1" onclick="style='background-color:#c5d27f;'">Meget</button>
        <button id="svar2" onclick="style='background-color:#c5d27f;'">Midt i mellem</button>
        <button id="svar3" onclick="style='background-color:#c5d27f;'">Lidt</button>
    `    
   
    pilh.innerHTML = `
        <a onclick="nr3()"> &#8594;</a>
    `

    pilv.innerHTML = `
    <a onclick="nr3()"> &#8594;</a>
    `

}

function nr3(){
    
    sporgsmal.innerHTML = `
    <p>
        Sprøgsmål 3 ud af 5 <br> <br>
        Kan du lide din øl filteret? <br>  
    </p>
    <button id="svar1" onclick="style='background-color:#c5d27f;'">Ja</button>
    <button id="svar2" onclick="style='background-color:#c5d27f;'">Nej</button>
    <button id="svar3" onclick="style='background-color:#c5d27f;'">Ved ikke</button>
`    

pilh.innerHTML = `
    <a onclick="nr4()"> &#8594;</a>
`
pilv.innerHTML = `
<a onclick="nr4()"> &#8594;</a>
`
}

function nr4(){
    sporgsmal.innerHTML = `
    <p>
        Sprøgsmål 4 ud af 5 <br> <br>
        Fortrækker du din øl lys eller mørk? <br>  
    </p>
    <button id="svar1" onclick="style='background-color:#c5d27f;'">Ja</button>
    <button id="svar2" onclick="style='background-color:#c5d27f;'">Nej</button>
    <button id="svar3" onclick="style='background-color:#c5d27f;'">Ingen præference</button>
`    

pilh.innerHTML = `
    <a onclick="nr5()"> &#8594;</a>
`

pilv.innerHTML = `
<a onclick="nr5()"> &#8594;</a>
`
}

function nr5(){
    
    sporgsmal.innerHTML = `
    <p>
        Sprøgsmål 5 ud af 5 <br> <br>
        Fortrækker du en grumset øl? <br>  
    </p>
    <button id="svar1" onclick="style='background-color:#c5d27f;'">Ja</button>
    <button id="svar2" onclick="style='background-color:#c5d27f;'">Nej</button>
    <button id="svar3" onclick="style='background-color:#c5d27f;'">Ingen præference</button>
`    

pilh.innerHTML = `
    <a onclick="res()"> &#8594;</a>
`

pilv.innerHTML = `
<a onclick="res()"> &#8594;</a>
`
}






function res() {
    const srcArray = [
    "<a href='lysAle.html'><img src='img/gron.webp'></a>",
    "<a href='fejl404.html'><img src='img/blaa.webp'></a>",
    "<a href='fejl404.html'><img src='img/pinkbrew.svg'></a>",
    "<a href='fejl404.html'><img src='img/paskebryg.webp'></a>",
    "<a href='fejl404.html'><img src='img/julebryg.webp'></a>", 
    "<a href='fejl404.html'><img src='img/humlecitron.webp'></a>", 
    "<a href='fejl404.html'><img src='img/humle.webp'></a>", 
    "<a href='fejl404.html'><img src='img/citrus.webp'></a>", 
    "<a href='fejl404.html'><img src='img/blondie.webp'></a>", 
    "<a href='fejl404.html'><img src='img/blabarhindbar.webp'></a>", 
    "<a href='fejl404.html'><img src='img/appelsinlime.webp'></a>", 
    "<a href='fejl404.html'><img src='img/abletranebar.webp'></a>"
    ]


    main.innerHTML = `
    <h2>
        Tillykke her er din top 3 øl
    </h2>

    `
    // tilfældig værdi med .length på galleriet, der kan udviddes ad libitum
    let rnd = Math.floor(Math.random()*srcArray.length)
    let rnd2 = Math.floor(Math.random()*srcArray.length)
    let rnd3 = Math.floor(Math.random()*srcArray.length)


    // viser billedet (der skal ikke laves en img tag for den er allerede lavet i arrayet)
    main.innerHTML += srcArray[rnd] + srcArray[rnd2] + srcArray[rnd3]

}




