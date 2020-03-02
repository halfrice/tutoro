import { css } from "styled-components"
import device from "./device"

const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    start: css`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    `,
    end: css`
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    `,
  },
  padding: {
    sides: css`
      padding: 0 9em;
      ${device.desktop`padding: 0 6em;`};
      ${device.tablet`padding: 0 3em;`};
      ${device.phone`padding: 0 2em;`};
    `,
  },
}

export default mixins
