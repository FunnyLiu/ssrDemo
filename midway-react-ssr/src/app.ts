import { initialSSRDevProxy } from 'ssr-server-utils'
import { Application } from 'egg'

class AppBootHook {
  app: Application
  constructor (app) {
    this.app = app
  }

  didReady () {
    //做一下开发环境的代理工作
    initialSSRDevProxy(this.app)
  }
}

export default AppBootHook
