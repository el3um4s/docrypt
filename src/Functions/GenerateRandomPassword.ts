// https://github.com/paulmillr/micro-password-generator/blob/main/index.ts
// const hexes = Array.from({ length: 256 }, (v, i) =>
//   i.toString(16).padStart(2, "0")
// );
// const bytesToHex = (uint8a: Uint8Array): string => {
//   // pre-caching improves the speed 6x
//   if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
//   let hex = "";
//   for (let i = 0; i < uint8a.length; i++) {
//     hex += hexes[uint8a[i]];
//   }
//   return hex;
// };

// const newPassword = (l: number): string => {
//   const array = new Uint8Array(l);
//   self.crypto.getRandomValues(array);

//   return window.atob(bytesToHex(array));
// };

// export default newPassword;

// https://github.com/paulmillr/micro-password-generator
import * as pwd from "micro-password-generator/index";
// https://www.npmjs.com/package/@noble/hashes
// import { randomBytes } from "@noble/hashes/utils";

const newPassword = (): string => {
  const randomBytes = new Uint8Array(120);
  self.crypto.getRandomValues(randomBytes);

  const generateMask = (): string => {
    const separator = ["-", "|", "_", "-_-", "-@-", "_@_", "|-|", "|@|"];
    const randomLength = 4 + Math.floor(Math.random() * 2);
    const randomSeparator: string =
      separator[Math.floor(Math.random() * separator.length)];

    const randomChars = (c: string): string => {
      return new Array(5 + Math.floor(Math.random() * 2)).fill(c).join("");
    };

    let result: string = "n1@1n" + randomSeparator;
    for (let i = 0; i < randomLength; i++) {
      result += randomChars("n") + randomSeparator;
    }
    result += "@1n1@";
    return result;
  };

  const mask = generateMask();
  const result = pwd.mask(mask).apply(randomBytes).password;
  return result;
};

export default newPassword;
