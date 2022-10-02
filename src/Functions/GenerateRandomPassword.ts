// https://github.com/paulmillr/micro-password-generator
import * as pwd from "micro-password-generator/index";

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
