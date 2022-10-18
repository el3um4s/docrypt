export type LangSupported = "en" | "it";

export const isOfTypeLangSupported = (
  keyInput: string
): keyInput is LangSupported => {
  return ["en", "it"].includes(keyInput);
};

interface Translation {
  id: LangSupported;
  name: string;
}

export const translation: Translation[] = [
  { id: "en", name: "English" },
  { id: "it", name: "Italiano" },
];

export const languages = {
  Home: {
    Encrypt: {
      en: "Encrypt",
      it: "Cifra",
    },
    "Encrypt your text": {
      en: "Encrypt your text",
      it: "Cifra un messaggio di testo",
    },
    Decrypt: {
      en: "Decrypt",
      it: "Decifra",
    },
    "Decrypt your text": {
      en: "Decrypt your text",
      it: "Decifra un messaggio di testo",
    },
    Password: {
      en: "Password",
      it: "Password",
    },
    "Manage your password": {
      en: "Manage your password",
      it: "Gestisci le password",
    },
    Settings: {
      en: "Settings",
      it: "Impostazioni",
    },
    "Language and other settings": {
      en: "Language and other settings",
      it: "Cambia la lingua e altre impostazioni",
    },
    About: {
      en: "About",
      it: "Informazioni",
    },
    "About this app": {
      en: "About this app",
      it: "Numero di versione e altre note",
    },
  },
  ManagePassword: {
    "Random Password": {
      en: "Random Password",
      it: "Password Casuale",
    },
    "Generate Random Password": {
      en: "Generate Random Password",
      it: "Crea un password a caso",
    },
    "QR Code Photo": {
      en: "QR Code Photo",
      it: "QR Code (scanner)",
    },
    "Read a QR Code from a Photo": {
      en: "Read a QR Code from a Photo",
      it: "Scansiona un QR Code da una foto",
    },
    "QR Code Image": {
      en: "QR Code Image",
      it: "QR Code (immagine)",
    },
    "Read a QR Code from an Image": {
      en: "Read a QR Code from an Image",
      it: "Leggi un QR Code da un'immagine",
    },
  },
  DecryptText: {
    Input: {
      en: "Input",
      it: "Input",
    },
    "Write here the text to be decrypted": {
      en: "Write here the text to be decrypted",
      it: "Scrivi qui il testo da decifrare",
    },
    Next: {
      en: "Next",
      it: "Successivo",
    },
    "Insert password": {
      en: "Insert password",
      it: "Inserisci la password",
    },
    Password: {
      en: "Password",
      it: "Password",
    },
    Back: {
      en: "Back",
      it: "Precedente",
    },
    "Insert Crypted Text": {
      en: "Insert Crypted Text",
      it: "Inserisci il testo da decifrare",
    },
    "Show Decrypted text": {
      en: "Show Decrypted text",
      it: "Mostra il testo decifrato",
    },
    "Decrypted Text": {
      en: "Decrypted Text",
      it: "Testo decifrato",
    },
    "New Decryption": {
      en: "New Decryption",
      it: "Decifra ancora",
    },
    "Decrypt a new message": {
      en: "Decrypt a new message",
      it: "Decifra un altro messaggio",
    },
    Error: {
      en: "Error",
      it: "Errore",
    },
    "Ops, something went wrong.": {
      en: "Ops, something went wrong.",
      it: "Ops, qualcosa è andato storto.",
    },
    "Check if the password and the text are correct.": {
      en: "Check if the password and the text are correct.",
      it: "Controlla se la password e/o il testo sono corretti.",
    },
  },
  EncryptedText: {
    "Copy Encrypted Text": {
      en: "Copy Encrypted Text",
      it: "Copia il testo cifrato",
    },
    "Share Encrypted Text": {
      en: "Share Encrypted Text",
      it: "Condividi il testo cifrato",
    },
    "Share Encrypted Link": {
      en: "Share Encrypted Link",
      it: "Condividi un link cifrato",
    },
    "Share Encrypted File": {
      en: "Share Encrypted File",
      it: "Condividi un file cifrato",
    },
    "Save Encrypted File": {
      en: "Save Encrypted File",
      it: "Salva un file cifrato",
    },
  },
  EncryptText: {
    Input: {
      en: "Input",
      it: "Input",
    },
    "Write here the text to be encrypted": {
      en: "Write here the text to be encrypted.",
      it: "Scrivi qui il testo da cifrare",
    },
    Next: {
      en: "Next",
      it: "Successivo",
    },
    "Insert password": {
      en: "Insert password",
      it: "Inserisci la password",
    },
    Password: {
      en: "Password",
      it: "Password",
    },
    "Insert the password to encrypt the text": {
      en: "Insert the password to encrypt the text",
      it: "Inserisci la password da usare per cifrare il testo",
    },
    Back: {
      en: "Back",
      it: "Precedente",
    },
    "Insert Text": {
      en: "Insert Text",
      it: "Inserisci il testo da cifrare",
    },
    "Show Encrypted text": {
      en: "Show Encrypted Text",
      it: "Mostra il testo cifrato",
    },
    "Encrypted Text": {
      en: "Encrypted Text",
      it: "Testo cifrato",
    },
    "Here is the encrypted text": {
      en: "Here is the encrypted text",
      it: "Questo è il testo cifrato",
    },
    "New Message": {
      en: "New Message",
      it: "Nuovo Messaggio",
    },
    "Encrypt a new message": {
      en: "Encrypt a new message",
      it: "Cifra un altro messaggio",
    },
  },
  ButtonBarPassword: {
    "Random Password": {
      en: "Random Password",
      it: "Password Casuale",
    },
    "Generate Random Password": {
      en: "Generate Random Password",
      it: "Crea una password a caso",
    },
    "QR Code Photo": {
      en: "QR Code Photo",
      it: "QR Code (scanner)",
    },
    "Read a QR Code from a Photo": {
      en: "Read a QR Code from a Photo",
      it: "Scansiona un QR Code da una foto",
    },
    "QR Code Image": {
      en: "QR Code Image",
      it: "QR Code (immagine)",
    },
    "Read a QR Code from an Image": {
      en: "Read a QR Code from an Image",
      it: "Leggi un QR Code da un'immagine",
    },
  },
  GenerateRandomPassword: {
    "Generate Random Password": {
      en: "Generate Random Password",
      it: "Crea una password a caso",
    },
    "Save QR Code to Image": {
      en: "Save QR Code to Image",
      it: "Salva il QR Code in un'immagine",
    },
  },
  ReadQRCodeFromImage: {
    "QR Code found": {
      en: "QR Code found",
      it: "QR Code trovato",
    },
    "Scan again": {
      en: "Scan again",
      it: "Fai una nuova scansione",
    },
    "QR Code not found": {
      en: "QR Code not found",
      it: "QR Code non trovato",
    },
    "Upload a picture": {
      en: "Upload a picture",
      it: "Seleziona Immagine",
    },
    "Select a picture with a QR Code": {
      en: "Select a picture with a QR Code",
      it: "Carica un'immagine del QR Code",
    },
  },
  ReadQRCodeFromPhoto: {
    "QR Code found": {
      en: "QR Code found",
      it: "QR Code trovato",
    },
    "Scan again": {
      en: "Scan again",
      it: "Fai una nuova scansione",
    },
    "QR Code not found": {
      en: "QR Code not found",
      it: "QR Code non trovato",
    },
    "Stop Scanner": {
      en: "Stop Scanner",
      it: "Interrompi Scansione",
    },
    "Camera not found": {
      en: "Camera not found",
      it: "Fotocamera non trovata",
    },
  },
  menu: {
    changeLanguage: {
      en: "Change language",
      it: "Cambia lingua",
    },
    encrypt: {
      en: "Encrypt",
      it: "Cripta",
    },
    decrypt: {
      en: "Decrypt",
      it: "Decripta",
    },
    documents: {
      en: "Documents",
      it: "Documenti",
    },
    files: {
      en: "Files",
      it: "File",
    },
    message: {
      en: "Text",
      it: "Testo",
    },
    shootPhoto: {
      en: "Shoot Photo",
      it: "Scatta una foto",
    },
    useNativeCamera: {
      en: "Use Native Camera",
      it: "Usa l'app nativa",
    },
    chooseFiles: {
      en: "Choose Files",
      it: "Scegli i file",
    },
    selectedFile: {
      en: "Selected File",
      it: "File selezionato",
    },
    photoNative: {
      en: "Photo (app)",
      it: "Foto (app)",
    },
    photoWebCam: {
      en: "Photo (webcam)",
      it: "Foto (webcam)",
    },
    showPlainText: {
      en: "Plain Text",
      it: "Testo",
    },
    showRenderedText: {
      en: "Rendered Text",
      it: "HTML",
    },
    password: {
      en: "Password",
      it: "Password",
    },
  },
};
