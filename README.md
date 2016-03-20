ACM Display
===========

Digital signage for the ACM Office television.

Setup
-----

```bash
npm install
cd src
cp secrets.js.sample secrets.js
```

Populate `secrets.js` with your API keys.

How to run
----------

Download a prebuilt binary of [Electron](https://github.com/atom/electron/releases). Then run:

```bash
npm run build
/path/to/electron . # Replace with actual path to Electron binary
```

Raspberry Pi setup guide
------------------------

See the [wiki](https://github.com/acm-uiuc/display/wiki/Raspberry-Pi-2-3-Setup-Guide) for instructions for setting up a production display on a Raspberry Pi.
