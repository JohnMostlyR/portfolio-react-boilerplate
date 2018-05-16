import Input from './Input';
import { BASE_FONT_REGULAR } from '../../styles/typography';

export const Textarea = Input.withComponent('textarea').extend`
  ${BASE_FONT_REGULAR}
  appearance: none;
  height: 2em;
  overflow: hidden;
  resize: none;
`;

export default Textarea;
