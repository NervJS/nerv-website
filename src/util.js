export function isLocaleEnglish () {
  return this.context.intl.locale === 'en'
}

export function isLocaleChinese () {
  return this.context.intl.locale === 'zh-CN'
}
