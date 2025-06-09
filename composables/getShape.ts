const shapes: string[] = [
  'cccc',
  'ccc2',
  'cc2c',
  'c2cc',
  'zccc'
]


export default function (): string {
  const randNum = Math.floor(Math.random() * shapes.length);
  return shapes[randNum]
}