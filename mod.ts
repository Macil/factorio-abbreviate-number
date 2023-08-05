// @deno-types="npm:@types/lodash@4/defaults"
import defaults from "npm:lodash@4/defaults.js";

const defaultOptions: AbbreviationOptions = {
  minDigits: 2,
  suffixes: ["k", "M", "G"],
};

export interface AbbreviationOptions {
  /**
   * @default 2
   */
  minDigits: number;
  /**
   * @default ["k", "M", "G"]
   */
  suffixes: string[];
}

/**
 * Abbreviates numbers in Factorio's style.
 */
export function abbreviateNumber(
  x: number,
  options?: Partial<AbbreviationOptions>,
) {
  const effectiveOptions: AbbreviationOptions = defaults(
    {},
    options,
    defaultOptions,
  );
  const { minDigits, suffixes } = effectiveOptions;

  const sign = Math.sign(x);
  const absX = Math.abs(x);

  let adjustedX = absX;
  let suffix = "";
  for (let i = suffixes.length - 1; i >= 0; i--) {
    const possibleFactor = 10 ** ((i + 1) * 3);
    if (absX >= possibleFactor) {
      adjustedX = absX / possibleFactor;
      suffix = suffixes[i];
      break;
    }
  }
  const flooringFactor = 10 ** (minDigits - 1);
  const flooredX = Math.floor(adjustedX * flooringFactor) / flooringFactor;
  const flooredXIsApproximation = flooredX !== adjustedX;

  let numStr = String(flooredX);

  const dotIndex = numStr.indexOf(".");
  if (dotIndex === -1) {
    if (
      numStr.length < minDigits && (flooredXIsApproximation || suffix !== "")
    ) {
      numStr += "." + "0".repeat(minDigits - numStr.length);
    }
  } else {
    if (dotIndex >= minDigits) {
      numStr = numStr.slice(0, dotIndex);
    }
  }
  return (sign === -1 ? "-" : "") + numStr + suffix;
}
