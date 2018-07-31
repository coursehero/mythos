// tslint:disable:no-require-imports no-typeof-undefined

declare const CL_VERSION: string
declare const window: any // tslint:disable-line:no-any

if (typeof window !== 'undefined') {
  window.Theia = window.Theia || { CL_VERSIONS: {} }
  window.Theia.CL_VERSIONS['@coursehero/mythos'] = CL_VERSION
}

export {} // https://stackoverflow.com/a/41975448/2788187
