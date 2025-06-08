import { Factory } from 'vexflow';

const elementId: string = "output"

const shapes: string[] = [
  'C5/16, C5/16, C5/16, C5/16',
  'C5/16, C5/16, C5/8',
  'C5/16, C5/8, C5/16',
  'C5/8, C5/16, C5/16',
  'C5/16/r, C5/16, C5/16, C5/16'
]

export default function (): void {
  const vf = new Factory({
    renderer: { elementId: elementId, width: 500, height: 200 },
  });

  const score = vf.EasyScore();
  const system = vf.System();

  const num = Math.floor(Math.random() * shapes.length)

  system
    .addStave({
      voices: [
        score.voice(score.notes(shapes[num]), { time: "4/16" }),
      ],
    })

  vf.draw();
}