import React from 'react'
import './register'

const Greeting = ({name}) => (
  <div>
    Hello <em>{name}</em>!!!
  </div>
)

if (module.hot) {
  module.hot.accept()
  if (window.ComponentLibraries['@coursehero/mythos'].Greeting) {
    window.ComponentLibraries['@coursehero/mythos'].Greeting.HotReload(
      Greeting,
    )
  }
}

export default Greeting
