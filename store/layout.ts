import { atom } from 'recoil';

const hfOutline = atom({
  key: "hfOutlineState",
  default: false
})

const aboutShow = atom({
  key: "aboutShowState",
  default: false
})

export {hfOutline, aboutShow}