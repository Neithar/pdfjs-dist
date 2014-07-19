## Build copy of [mozilla/pdf.js](https://github.com/mozilla/pdf.js)

### Disclaimer
> This repo is forked from [joseym/pdfjs-bower](https://github.com/joseym/pdfjs-bower).

---

### Updating or building manually
Currently the build is for pdf.js `v1.0.233`.
You can build yourself by doing the following

#### Prepping (getting pdf.js)
1. Clone this repo

   ```bash
   $ git clone https://github.com/feryardiant/pdfjs-dist.git
   ```

2. Grab the latest version from original [PDF.js](https://github.com/mozilla/pdf.js) repo

   ```bash
   $ git submodule init && git submodule update
   ```

#### Building
1. Install the dependencies

   ```bash
   $ npm install -d
   ```

2. Build with `grunt`

   ```bash
   $ grunt
   ```

3. You're done! You should now see 3 files within the `dist` directory

   - [pdf.js](../master/pdf.js)
   - [pdf.woker.js](../master/pdf.woker.js)
   - [compatibility.js](../master/compatibility.js)
