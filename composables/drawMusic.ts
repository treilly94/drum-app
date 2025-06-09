import abcjs, { type TuneObjectArray } from "abcjs";

const abcjsParams = { add_classes: true }

export default function (abc: string): TuneObjectArray {
  return abcjs.renderAbc('output', abc, abcjsParams);
}