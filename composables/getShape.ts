const shapes: string[] = [
  '"R"c"L"c"R"c"L"c',
  '"R"c"L"c"R"c2',
  '"R"c"L"c2"L"c',
  '"R"c2"R"c"L"c',
  'z"L"c"R"c"L"c'
]

function getNote(): string {
  const notes: string[] = [
    '!style=x!g', // HiHat
    '!style=x!f', // Ride
    "!style=x!A'", // Crash
    'F', // Kick
    'c', // Snare
    'e', // High
    'd', // Mid
    'G' // Floor
  ]
  const randNum = Math.floor(Math.random() * notes.length);
  return notes[randNum]
}


export default function (multiDrum: boolean = false): string {

  const randNum = Math.floor(Math.random() * shapes.length);
  var shape = shapes[randNum]

  if (multiDrum) {
    var multiShape = ''
    for (let step = 0; step < shape.length; step++) {
      const char = shape.charAt(step)
      if (char === 'c') {
        multiShape += getNote()
      }
      else {
        multiShape += char
      }
    }
    return multiShape
  }

  return shape
}