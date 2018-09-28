import * as React from 'react'
import 'Register'

const MythosApp = () => (
  <div>
    Mythos App
  </div>
)

if (module.hot) {
  module.hot.accept()
  if (window.ComponentLibraries[CL].MythosApp) {
    window.ComponentLibraries[CL].MythosApp.HotReload(
      MythosApp,
    )
  }
}

export default MythosApp
