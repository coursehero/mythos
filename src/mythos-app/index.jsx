import Modal from 'react-modal'
import React from 'react'
import '../register'

const [test, a] = [1,2]

const MythosApp = () => (
  <div>
    Mythos App
    <Modal contentLabel="Minimal Modal Example">
      Modal
    </Modal>
  </div>
)

if (module.hot) {
  module.hot.accept()
  if (window.ComponentLibraries['@coursehero/mythos'].MythosApp) {
    window.ComponentLibraries['@coursehero/mythos'].MythosApp.HotReload(
      MythosApp,
    )
  }
}

export default MythosApp
