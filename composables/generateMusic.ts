const meta = `
X:1
L:1/16
M: 4/4
K:C clef=perc
V: hands, stem=up
`

export default function (singleDrum: number, multiDrum: number, cymbals: boolean): string {
    var abc = meta
    for (let step = 0; step < singleDrum; step++) {
        abc += `| ${getShape(false)} ${getShape(false)} ${getShape(false)} ${getShape(false)} |\n`
    }
    for (let step = 0; step < multiDrum; step++) {
        abc += `| ${getShape(true, cymbals)} ${getShape(true, cymbals)} ${getShape(true, cymbals)} ${getShape(true, cymbals)} |\n`
    }
    abc += '|'
    return abc
}