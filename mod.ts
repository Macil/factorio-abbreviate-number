const SUFFIXES = ["k", "M", "G"];

/**
 * Abbreviates numbers in Factorio's style.
 */
export function abbreviateNumber(x: number, sigFigs = 2) {
  const sign = Math.sign(x);
  const absX = Math.abs(x);

  let adjustedX = absX;
  let suffix = "";
  for (let i = SUFFIXES.length - 1; i >= 0; i--) {
    const possibleFactor = 10 ** ((i + 1) * 3);
    if (absX >= possibleFactor) {
      adjustedX = absX / possibleFactor;
      suffix = SUFFIXES[i];
      break;
    }
  }
  const flooringFactor = 10 ** (sigFigs - 1);
  const flooredX = Math.floor(adjustedX * flooringFactor) / flooringFactor;
  const flooredXIsApproximation = flooredX !== adjustedX;

  let numStr = String(flooredX);

  const dotIndex = numStr.indexOf(".");
  if (dotIndex === -1) {
    if (numStr.length < sigFigs && (flooredXIsApproximation || suffix !== "")) {
      numStr += "." + "0".repeat(sigFigs - numStr.length);
    }
  } else {
    if (dotIndex >= sigFigs) {
      numStr = numStr.slice(0, dotIndex);
    }
  }
  return (sign === -1 ? "-" : "") + numStr + suffix;
}
