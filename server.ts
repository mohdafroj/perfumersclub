import 'zone.js/dist/zone-node';
import 'localstorage-polyfill';
import { sessionStorage } from 'sessionstorage';

import {APP_BASE_HREF} from '@angular/common';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {existsSync} from 'fs';
import {join} from 'path';


import {LocalStorage} from 'node-localstorage' 

const domino = require("domino");
const fs = require("fs");
const path = require("path");
const templateA = fs.readFileSync(path.join("dist/perfumersclub/browser", "index.html")).toString();
const win = domino.createWindow(templateA);
win.object = Object;
win.math = Math;
global["window"] = win;
global["document"] = win.document;
global["location"] = win.location;
global["branch"] = null;
global["object"] = win.object;
global["HTMLElement"] = win.HTMLElement;
global["navigator"] = win.navigator;
//global["localStorage"] = localStorage;
global["sessionStorage"] = sessionStorage;
global["Event"] = win.Event;
global["Event"]["prototype"] = win.Event.prototype;
global["dataLayer"] = [];

localStorage = new LocalStorage('./data');

import {AppServerModule} from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/perfumersclub/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 3000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
