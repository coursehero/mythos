import * as React from 'react'
import 'register'

const Greeting = ({name}) => (
  <div>
    Hello <em>{name}</em>!!!
  </div>
)

if (module.hot) {
  module.hot.accept()
  if (window.ComponentLibraries[CL].Greeting) {
    window.ComponentLibraries[CL].Greeting.HotReload(
      Greeting,
    )
  }
}

export default Greeting
