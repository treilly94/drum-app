import abcjs from "abcjs";

const meta = `
X:1
L:1/16
K:C clef=perc
`

const abcjsParams = {
  paddingright: 500,
  paddingleft: 500
}

export default function (shape1: string, shape2:string): void {
  const abc1 = meta + shape1
  const abc2 = meta + shape2
  abcjs.renderAbc('output1', abc1, abcjsParams);
  abcjs.renderAbc('output2', abc2, abcjsParams);
}