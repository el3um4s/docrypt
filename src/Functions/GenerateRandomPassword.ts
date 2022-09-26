// https://github.com/paulmillr/micro-password-generator/blob/main/index.ts
const hexes = Array.from({ length: 256 }, (v, i) =>
  i.toString(16).padStart(2, "0")
);
const bytesToHex = (uint8a: Uint8Array): string => {
  // pre-caching improves the speed 6x
  if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += hexes[uint8a[i]];
  }
  return hex;
};

const newPassword = (l: number): string => {
  const array = new Uint8Array(l);
  self.crypto.getRandomValues(array);

  return window.atob(bytesToHex(array));
};

export default newPassword;
