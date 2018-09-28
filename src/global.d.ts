declare global {
  const CL: string
  const CL_VERSION: string
  
  interface Window {
    Theia: {
      CL_VERSIONS: { [CL: string]: string }
    },
    ComponentLibraries: {
      [CL: string]: {
        [component: string]: {
          HotReload: (component: React.ReactType) => void
        }
      }
    }
  }
}

export {}
