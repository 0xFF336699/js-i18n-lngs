"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsI18nLngsVersion = void 0;
__exportStar(require("./gemini-supports"), exports);
__exportStar(require("./gemini-supports-en"), exports);
__exportStar(require("./lngs-arr"), exports);
__exportStar(require("./lngs-chrome-locale"), exports);
__exportStar(require("./lngs-chrome"), exports);
__exportStar(require("./lngs-chrome-zh-CN"), exports);
__exportStar(require("./lngs-en"), exports);
__exportStar(require("./lngs-zhCN"), exports);
__exportStar(require("./lng-locale"), exports);
__exportStar(require("./pluralmap"), exports);
__exportStar(require("./google-translate-lngs"), exports);
__exportStar(require("./google-translate-locale"), exports);
__exportStar(require("./google-gemini-intersection"), exports);
exports.jsI18nLngsVersion = "1.0.32";
