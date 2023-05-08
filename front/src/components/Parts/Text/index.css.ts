import { styleVariants } from '@vanilla-extract/css';

export const fontSize = styleVariants({
  small: {
    fontSize: 10
  },
  normal: {
    fontSize: 12
  },
  large: {
    fontSize: 18
  }
});

export const fontType = styleVariants({
  normal: {
    color: "black"
  },
  danger: {
    color: "red"
  },
  alert: {
    color: "yellow"
  }
})