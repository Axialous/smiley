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
        "noséeuse": [
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
        ]
    }
}

const racine = document.querySelector(`:root`)

const actualiser = () => {
    //let style_ajoute = racine.style

    //for (let propriete of [...style_ajoute]) {
    //    if (propriete.startsWith('--')) {
    //        racine.style.removeProperty(propriete);
    //    }
    //}
    racine.style = ""
    let collages = []
    for (let partie in autocollants) {
        let possibilites = autocollants[partie]
        let clefs = Object.keys(possibilites)
        let variante = clefs[Math.floor(Math.random() * clefs.length)]
        let proprietes = possibilites[variante]
        collages.push(`${partie} ${variante}`)
        for (let propriete of proprietes) {
            racine.style.setProperty(propriete.variable, propriete.valeur)
            //console.log(`${propriete.variable} → ${propriete.valeur}`)
        }
    }
    console.log(collages.join(' / '))
}

window.addEventListener(`keyup`, actualiser)
