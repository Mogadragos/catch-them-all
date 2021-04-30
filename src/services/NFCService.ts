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
      // @ts-ignore
      const ndef = new NDEFReader(); // obj for interaction with NFC
      return new Promise((resolve, reject) => {
        const ctlr = new AbortController();
        ctlr.signal.onabort = reject;
        ndef.addEventListener(
          "reading",
          (event) => {
            ctlr.abort();
            resolve(event);
          },
          { once: true }
        );
        ndef.scan({ signal: ctlr.signal }).catch((err) => reject(err));
      });
    }
  }
}

export default new NFCService();
