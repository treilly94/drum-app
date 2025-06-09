import abcjs, { type TuneObjectArray } from "abcjs";

const abcjsParams = { }

export default function (abc: string): TuneObjectArray {
  return abcjs.renderAbc('output', abc, abcjsParams);
}