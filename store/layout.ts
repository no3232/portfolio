import { atom } from 'recoil';

const hfOutline = atom({
  key: "hfOutlineState",
  default: false
})

const aboutShow = atom({
  key: "aboutShowState",
  default: false
})

const scrollend = atom({
  key: 'scrollend',
  default: true
})

export {hfOutline, aboutShow, scrollend}