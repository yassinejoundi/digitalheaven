import AOS from 'aos'

export default ({ app }) => {
  app.AOS = new AOS.init() // You can also pass parameters here
}
