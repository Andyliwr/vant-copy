import Vue from 'vue';
import Button from './button/button'
import TradeShare from './trade-share/trade-share'
import './index.scss'

const Components = {
  Button,
  TradeShare,
}

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})

export default Components
