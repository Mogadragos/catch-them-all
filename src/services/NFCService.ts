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
          ({ message, serialNumber }) => {
            console.log("lecture ok")
            console.log(serialNumber)
            console.log(message.records.length)
            console.log(message)
            resolve(serialNumber);
          },
          { once: true }
        );
        ndef.addEventListener("readingerror", () => {
          console.error("Impossible de lire le TAG");
          reject("Impossible de lire le TAG");
        });
        ndef.scan();
      });
    }
  }
}

export default new NFCService();
