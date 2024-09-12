export * from './gemini-supports';
export * from './gemini-supports-en';
export * from './lngs-arr';
export * from './lngs-chrome-locale';
export * from './lngs-chrome';
export * from './lngs-chrome-zh-CN';
export * from './lngs-en';
export * from './lngs-zhCN';
export * from './lng-locale';
export interface SupportLngMap {
    [key: string]: string;
}
export interface II18nMap {
    [key: string]: string | II18nMap;
}
export declare const jsI18nLngsVersion = "1.0.31";
