export function getMachineRotation(num) {
  // num: machine number
  if (num === 0 || num === 1) {
    return { rotate: "0deg" };
  } else {
    return { rotate: "90deg" };
  }
}
