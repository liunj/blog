// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAbout = require('../../../app/controller/about');
import ExportAdmin = require('../../../app/controller/admin');
import ExportBanner = require('../../../app/controller/banner');
import ExportBlog = require('../../../app/controller/blog');
import ExportBlogType = require('../../../app/controller/blogType');
import ExportCaptcha = require('../../../app/controller/captcha');
import ExportDemo = require('../../../app/controller/demo');
import ExportMessage = require('../../../app/controller/message');
import ExportSetting = require('../../../app/controller/setting');
import ExportUpload = require('../../../app/controller/upload');

declare module 'egg' {
  interface IController {
    about: ExportAbout;
    admin: ExportAdmin;
    banner: ExportBanner;
    blog: ExportBlog;
    blogType: ExportBlogType;
    captcha: ExportCaptcha;
    demo: ExportDemo;
    message: ExportMessage;
    setting: ExportSetting;
    upload: ExportUpload;
  }
}
