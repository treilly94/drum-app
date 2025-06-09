const meta = `
X:1
L:1/16
K:C clef=perc
`

export default function (singleDrum: number): string {
    var abc = meta
    for (let step = 0; step < singleDrum; step++) {
        abc += `| ${getShape()} ${getShape()} ${getShape()} ${getShape()} |\n`
    }
    abc += '|'
    return abc
}