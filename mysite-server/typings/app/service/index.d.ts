// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAbout = require('../../../app/service/about');
import ExportAdmin = require('../../../app/service/admin');
import ExportBanner = require('../../../app/service/banner');
import ExportBlog = require('../../../app/service/blog');
import ExportBlogType = require('../../../app/service/blogType');
import ExportDemo = require('../../../app/service/demo');
import ExportMessage = require('../../../app/service/message');
import ExportSetting = require('../../../app/service/setting');
import ExportUpload = require('../../../app/service/upload');

declare module 'egg' {
  interface IService {
    about: AutoInstanceType<typeof ExportAbout>;
    admin: AutoInstanceType<typeof ExportAdmin>;
    banner: AutoInstanceType<typeof ExportBanner>;
    blog: AutoInstanceType<typeof ExportBlog>;
    blogType: AutoInstanceType<typeof ExportBlogType>;
    demo: AutoInstanceType<typeof ExportDemo>;
    message: AutoInstanceType<typeof ExportMessage>;
    setting: AutoInstanceType<typeof ExportSetting>;
    upload: AutoInstanceType<typeof ExportUpload>;
  }
}
