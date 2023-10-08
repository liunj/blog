// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportCaptcha = require('../../../app/middleware/captcha');
import ExportLimit = require('../../../app/middleware/limit');
import ExportPassport = require('../../../app/middleware/passport');
import ExportResponseFomatter = require('../../../app/middleware/responseFomatter');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    captcha: typeof ExportCaptcha;
    limit: typeof ExportLimit;
    passport: typeof ExportPassport;
    responseFomatter: typeof ExportResponseFomatter;
  }
}
