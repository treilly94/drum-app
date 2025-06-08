import abcjs from "abcjs";

const meta = `
X:1
L:1/16
K:C clef=perc
`
const shapes: string[] = [
  'cccc',
  'ccc2',
  'cc2c',
  'c2cc',
  'zccc'
]

export default function (): void {
  const randNum = Math.floor(Math.random() * shapes.length);
  const abc = meta + shapes[randNum]
  abcjs.renderAbc('output', abc)
}