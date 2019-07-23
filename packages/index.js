import Vue from 'vue';
import Button from './button/button'
import './index.scss'

const Components = {
  Button
}

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})

export default Components
