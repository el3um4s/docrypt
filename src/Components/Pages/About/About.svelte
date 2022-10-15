<script lang="ts">
  import { slide } from "svelte/transition";

  const VERSION = "[VI]Version: {version} - built on {date}[/VI]";
</script>

<section transition:slide>
  <h1>About</h1>

  <p>{VERSION}</p>

  <p>
    This is an experimental app for encrypting and decrypting messages and files
    from browsers.
  </p>

  <p>To create it I used these technologies:</p>

  <ul>
    <li>
      Interface: <a href="https://svelte.dev/">Svelte</a> and
      <a href="https://rollupjs.org/">Rollup</a>
    </li>
    <li>
      Encrypt/Decrypt: <a href="https://bitwiseshiftleft.github.io/sjcl/"
        >Stanford Javascript Crypto Library</a
      >
    </li>
    <li>
      Password Generator: <a
        href="https://www.npmjs.com/package/micro-password-generator"
        >Micro Password Generator</a
      >
      by <a href="https://github.com/paulmillr">Paul Miller</a>
    </li>
    <li>
      QR code/2d barcode generator: <a
        href="https://www.npmjs.com/package/qrcode"
        >node-qrcode
      </a>
      by <a href="https://github.com/soldair">Ryan Day</a>
    </li>
    <li>
      QR Code Scanner: <a href="https://www.npmjs.com/package/qr-scanner"
        >QR Scanner
      </a>
      by <a href="https://github.com/nimiq">Nimiq Blockchain Ecosystem</a>
    </li>
    <li>
      MarkDown Interpreter: <a href="https://www.npmjs.com/package/marked"
        >Marked</a
      >
    </li>
    <li>
      MarkDownn Extended Tables: <a
        href="https://www.npmjs.com/package/marked-extended-tables"
        >Marked Tables</a
      >
    </li>
  </ul>

  <p>Other utilities:</p>

  <ul>
    <li>
      <a href="https://www.npmjs.com/package/blob-polyfill">blob-polyfill</a> by
      <a href="https://github.com/bjornstar">Bjorn Stromberg</a>
      and <a href="https://github.com/eligrey">Eli Grey</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/file-saver">file-saver</a> by
      <a href="https://github.com/eligrey">Eli Grey</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/js-base64">js-base64</a> by
      <a href="https://github.com/dankogai">Dan Kogai</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/@el3um4s/match">match</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/@el3um4s/to-try">to-try</a>
    </li>
  </ul>

  <p>
    The source code is available on <a href="https://github.com/el3um4s/docrypt"
      >GitHub</a
    >.
  </p>
</section>

<style lang="postcss">
  a,
  a:visited {
    color: var(--color-purple);
  }

  a:hover {
    background-color: var(--color-purple);
    color: var(--color-menu);
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  li::marker {
    color: var(--color-purple);
    /* content: "►"; */
  }
</style>
