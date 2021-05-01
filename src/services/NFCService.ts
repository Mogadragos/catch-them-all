/*global NDEFReader*/

class NFCService {
  constructor() {
    if ("NDEFReader" in window) {
      console.log("NFC présent");
    } else {
      console.error("NFC indisponible");
    }
  }

  async Check() {
    return "NDEFReader" in window;
  }

  async Read() {
    if ("NDEFReader" in window) {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        const ndef = new NDEFReader(); // obj for interaction with NFC
        ndef.addEventListener(
          "reading",
          (data) => {
            resolve(data);
          },
          { once: true }
        );
        ndef.addEventListener("readingerror", () => {
          reject("Impossible de lire le Tag NFC");
        });
        ndef.scan();
      });
    }
  }
}

export default new NFCService();
