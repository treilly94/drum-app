const shapes: string[] = [
  '"R"c"L"c"R"c"L"c',
  '"R"c"L"c"R"c2',
  '"R"c"L"c2"L"c',
  '"R"c2"R"c"L"c',
  'z"L"c"R"c"L"c'
]


export default function (): string {
  const randNum = Math.floor(Math.random() * shapes.length);
  return shapes[randNum]
}