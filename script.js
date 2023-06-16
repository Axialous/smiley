const autocollants = {
    visage: {
        "normal": [],
        "se roulant par terre": [
            {variable: '--an-visage', valeur: '45deg'}
        ],
        "à l'envers": [
            {variable: '--an-visage', valeur: '-180deg'}
        ]
    },
    peau: {
        "normale": [],
        "nauséeuse": [
            {variable: '--c-f-peau', valeur: 'hsl(92, 79%, 43%)'}
        ],
        "chaude": [
            {variable: '--c-f-peau', valeur: 'hsl(9, 93%, 47%)'}
        ],
        "froide": [
            {variable: '--c-f-peau', valeur: 'hsl(191, 52%, 61%)'}
        ],
        "démoniaque": [
            {variable: '--c-f-peau', valeur: 'hsl(275, 68%, 49%)'}
        ]
    },
    yeux: {
        "normaux": [],
        "grands": [
            {variable: '--h-yeux', valeur: '150%'}
        ],
        "souriants": [
            {variable: '--c-f-yeux', valeur: 'transparent'},
            {variable: '--h-yeux', valeur: '75%'},
            {variable: '--l-yeux', valeur: '150%'},
            {variable: '--e-b-yeux', valeur: '0.25em 0.25em 0'},
            {variable: '--r-b-yeux', valeur: '50% 50% 0 0 / 100% 100% 0 0'},
            {variable: '--c-b-yeux', valeur: 'hsl(0, 0%, 0%) hsl(0, 0%, 0%) transparent'}
        ],
        "plissés": [
            {variable: '--an-yeux', valeur: '45deg'},
            {variable: '--c-f-yeux', valeur: 'transparent'},
            {variable: '--e-b-yeux', valeur: '0.25em 0.25em 0 0'},
            {variable: '--r-b-yeux', valeur: '0'}
        ],
        "sans expression": [
            {variable: '--h-yeux', valeur: '50%'},
            {variable: '--l-yeux', valeur: '150%'},
            {variable: '--r-b-yeux', valeur: '0.25em'}
        ],
        "étonnés": [
            {variable: '--h-yeux', valeur: '150%'},
            {variable: '--l-yeux', valeur: '150%'},
            {variable: '--c-b-yeux', valeur: 'hsl(0, 0%, 100%)'},
            {variable: '--e-b-yeux', valeur: '0.5em'},
            {variable: '--r-b-yeux', valeur: '0.75em '}
        ],
        "fatigués": [
            {variable: '--c-f-yeux', valeur: 'transparent'},
            {variable: '--h-yeux', valeur: '75%'},
            {variable: '--l-yeux', valeur: '150%'},
            {variable: '--e-b-yeux', valeur: '0 0.25em 0.25em'},
            {variable: '--r-b-yeux', valeur: '0 0 50% 50% / 0 0 100% 100%'},
            {variable: '--c-b-yeux', valeur: 'transparent hsl(0, 0%, 0%) hsl(0, 0%, 0%)'}
        ]
    },
    bouche: {
        "souriante": [],
        "rayonnante": [
            {variable: '--c-f-bouche', valeur: 'hsl(0, 0%, 100%)'}
        ],
        "légèrement souriante": [
            {variable: '--c-f-bouche', valeur: 'transparent'},
            {variable: '--h-bouche', valeur: 'calc(calc(100% / 3) * 2)'},
            {variable: '--e-b-bouche', valeur: '0 0.25em 0.25em'},
            {variable: '--c-b-bouche', valeur: 'transparent transparent hsl(0, 0%, 0%)'}
        ],
        "neutre": [
            {variable: '--c-f-bouche', valeur: 'hsl(0, 0%, 0%)'},
            {variable: '--h-bouche', valeur: 'calc(100% / 3)'},
            {variable: '--l-bouche', valeur: 'calc(calc(100% / 12) * 14)'},
            {variable: '--r-b-bouche', valeur: '0.25em'}
        ],
        "invisible": [
            {variable: '--c-f-bouche', valeur: 'transparent'},
            {variable: '--c-b-bouche', valeur: 'transparent'}
        ],
        "légèrement froncée": [
            {variable: '--c-f-bouche', valeur: 'transparent'},
            {variable: '--h-bouche', valeur: 'calc(calc(100% / 3) * 2)'},
            {variable: '--e-b-bouche', valeur: '0.25em 0.25em 0'},
            {variable: '--r-b-bouche', valeur: '50% 50% 0 0 / 100% 100% 0 0'},
            {variable: '--c-b-bouche', valeur: 'hsl(0, 0%, 0%) transparent transparent'}
        ],
        "froncée": [
            {variable: '--c-f-bouche', valeur: 'transparent'},
            {variable: '--e-b-bouche', valeur: '0.25em 0.25em 0'},
            {variable: '--r-b-bouche', valeur: '50% 50% 0 0 / 100% 100% 0 0'}
        ],
        "étonnée": [
            {variable: '--h-bouche', valeur: '1.5em'},
            {variable: '--l-bouche', valeur: '1.5em'},
            {variable: '--c-f-bouche', valeur: 'hsl(0, 0%, 0%)'},
            {variable: '--r-b-bouche', valeur: '50%'}
        ],
        "froncée étonnée": [
            {variable: '--h-bouche', valeur: '1em'},
            {variable: '--l-bouche', valeur: '2em'},
            {variable: '--c-f-bouche', valeur: 'hsl(0, 0%, 0%)'},
            {variable: '--r-b-bouche', valeur: '50% 50% 0 0 / 100% 100% 0 0'}
        ],
        "confuse": [
            {variable: '--h-bouche', valeur: '1em'},
            {variable: '--l-bouche', valeur: '2em'},
            {variable: '--c-f-bouche', valeur: 'transparent'},
            {variable: '--e-b-bouche', valeur: '0.25em 0 0 0.25em'},
            {variable: '--r-b-bouche', valeur: '100% 0 0 0'}
        ],
        "grimaçante": [
            {variable: '--h-bouche', valeur: '1.5em'},
            {variable: '--c-f-bouche', valeur: 'hsl(0, 0%, 100%)'},
            {variable: '--r-b-bouche', valeur: '0.75em'}
        ]
    },
    "déco :": {
        "aucune": [],
        "goutte de sueur": [
            {variable: '--c-f-deco', valeur: 'hsl(207, 78%, 44%)'},
            {variable: '--ch-f-deco', valeur: 'path("M38 3C37.5826 3.62614 37.1652 4.20871 36.7659 4.76591C35.2523 6.87841 34 8.62614 34 11C34 13.2091 35.7909 15 38 15C40.2091 15 42 13.2091 42 11C42 8.62614 40.7477 6.87841 39.2341 4.76591C38.8348 4.20871 38.4174 3.62614 38 3Z")'}
        ],
        "cœur": [
            {variable: '--c-f-deco', valeur: 'hsl(353, 82%, 32%)'},
            {variable: '--ch-f-deco', valeur: 'path("M35 36C35.901 33.7475 37.4108 32.5098 38.798 31.3725C40.4902 29.9853 42 28.7475 42 26C42 23.7909 40.2091 22 38 22C36.8053 22 35.7329 22.5238 35 23.3542C34.2671 22.5238 33.1947 22 32 22C29.7909 22 28 23.7909 28 26C28 28.7475 29.5098 29.9853 31.202 31.3725C32.5892 32.5098 34.099 33.7475 35 36Z")'}
        ],
        "bandage": [
            {variable: '--c-f-deco', valeur: 'hsl(158, 56%, 90%)'},
            {variable: '--ch-f-deco', valeur: 'path("M5.38098 15.0734L10.6902 12.4188L6.36955 13.0669C7.3662 11.3268 8.64507 9.76906 10.1438 8.45606L22.2466 6.64063L26.4296 4.54912C29.4303 5.30844 32.1307 6.82136 34.3178 8.8747L23.4677 10.5022L4.08975 20.1912C4.26905 18.3943 4.7126 16.6753 5.38098 15.0734Z")'}
        ],
        "flots de larmes": [
            {variable: '--c-f-deco', valeur: 'hsl(207, 78%, 44%)'},
            {variable: '--ch-f-deco', valeur: 'path("M17 15C17 14.4477 15.6569 14 14 14C12.3431 14 11 14.4477 11 15C11 15 11.761 36.5167 11 36.3232C10.239 36.1298 9.42724 36 8.5 36C6.5 36 6 37.5 6.5 38C7.5 39 7.34165 39.8292 6.00001 40.5C4 41.5 5.00001 43 9.50001 43C11.5965 43 12.8248 42.5659 13.9938 42.1528C15.3341 41.6791 16.5965 41.2329 19 41.5C20.8217 41.7024 21.9879 41.9048 22.963 42.0741C24.3965 42.3229 25.4169 42.5 27.5 42.5C31 42.5 35 42.5 35 41C35 39.5 35 39 37 39C39 39 42 39 40 37.5C39.0513 36.7885 34 36.2443 33 36.7328C32 37.2213 33 15 33 15C33 14.4477 31.6569 14 30 14C28.3431 14 27 14.4477 27 15C27 15 27.9106 37.0695 27 37.1804C26.0894 37.2912 25.3812 37.4047 25 37.5C23.4 37.9 19.6667 38 18 38C17.6513 38 17.3188 37.9848 17 37.957C16.6812 37.9293 17 15 17 15Z")'}
        ],
        "nuage": [
            {variable: '--c-f-deco', valeur: 'hsl(60, 3%, 87%)'},
            {variable: '--ch-f-deco', valeur: 'path("M5.5021 32.4424C5.5007 32.4062 5.5 32.3699 5.5 32.3333C5.5 30.7378 6.84315 29.4444 8.5 29.4444C8.61099 29.4444 8.72057 29.4503 8.82843 29.4616C9.38649 28.3137 10.5968 28 12 28C13.3725 28 14.4265 28.8184 15 29.9259C16 29.9259 17.5 29.4444 18.5 28.4815C18.3696 28.9837 18.2392 29.4205 18.1205 29.8183C17.7838 30.9458 17.5408 31.76 17.6563 32.8645C18.7652 33.4636 19 34.5114 19 35.7037C19 37.5651 17.6563 39.0741 15.5 39.0741C15.4836 39.0741 15.4669 39.0739 15.4501 39.0737C15.2186 40.1727 14.2096 41 13 41C11.698 41 10.6177 40.2983 10.5 39.0741C8.5 39.5556 6.75094 38.3501 6.5 36.6667C5.3202 36.4074 4 35.586 4 34.7407C4 33.9017 4.33581 32.7065 5.5021 32.4424Z")'}
        ]
    }
}

const racine = document.querySelector(`:root`)

const actualiser = () => {
    let style_ajoute = racine.style

    for (let propriete of [...style_ajoute]) {
        if (propriete == '--ch-f-deco') {
            setTimeout(() => {
                racine.style.removeProperty(propriete)
            }, 512)
        } else {
            racine.style.removeProperty(propriete)
        }
    }
    let collages = []
    for (let partie in autocollants) {
        let possibilites = autocollants[partie]
        let clefs = Object.keys(possibilites)
        let variante = clefs[Math.floor(Math.random() * clefs.length)]
        let proprietes = possibilites[variante]
        collages.push(`${partie} ${variante}`)
        for (let propriete of proprietes) {
            if (propriete.variable == '--c-f-deco' || propriete.variable == '--ch-f-deco') {
                setTimeout(() => {
                    racine.style.setProperty(propriete.variable, propriete.valeur)
                }, 512)
            } else {
                racine.style.setProperty(propriete.variable, propriete.valeur)
            }
        }
    }
    console.log(collages.join(' / '))
}

const redimensionner_deco = () => {
    const parent = document.querySelector('.visage');
    const deco = document.querySelector('.deco')

    deco.style.transform = `scale(${(parent.offsetWidth / 4.5 * 5.5) / deco.offsetWidth}, ${(parent.offsetHeight / 4.5 * 5.5) / deco.offsetHeight})`
}

window.addEventListener(`resize`, redimensionner_deco)
window.addEventListener(`keyup`, actualiser)
redimensionner_deco()
actualiser()
