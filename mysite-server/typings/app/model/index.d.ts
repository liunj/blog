// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAbout = require('../../../app/model/about');
import ExportAdmin = require('../../../app/model/admin');
import ExportBanner = require('../../../app/model/banner');
import ExportBlog = require('../../../app/model/blog');
import ExportBlogType = require('../../../app/model/blogType');
import ExportDemo = require('../../../app/model/demo');
import ExportMessage = require('../../../app/model/message');
import ExportSetting = require('../../../app/model/setting');
import ExportUpload = require('../../../app/model/upload');

declare module 'egg' {
  interface IModel {
    About: ReturnType<typeof ExportAbout>;
    Admin: ReturnType<typeof ExportAdmin>;
    Banner: ReturnType<typeof ExportBanner>;
    Blog: ReturnType<typeof ExportBlog>;
    BlogType: ReturnType<typeof ExportBlogType>;
    Demo: ReturnType<typeof ExportDemo>;
    Message: ReturnType<typeof ExportMessage>;
    Setting: ReturnType<typeof ExportSetting>;
    Upload: ReturnType<typeof ExportUpload>;
  }
}
