const meta = `
X:1
L:1/16
K:C clef=perc
V: hands, stem=up
`

export default function (singleDrum: number, multiDrum: number): string {
    var abc = meta
    for (let step = 0; step < singleDrum; step++) {
        abc += `| ${getShape(false)} ${getShape(false)} ${getShape(false)} ${getShape(false)} |\n`
    }
    for (let step = 0; step < multiDrum; step++) {
        abc += `| ${getShape(true)} ${getShape(true)} ${getShape(true)} ${getShape(true)} |\n`
    }
    abc += '|'
    return abc
}