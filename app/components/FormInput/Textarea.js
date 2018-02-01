import Input from './Input';
import { baseFontRegular } from '../../styles/templates/typography';

export const Textarea = Input.withComponent('textarea').extend`
  ${baseFontRegular}
  appearance: none;
  height: 2em;
  overflow: hidden;
  resize: none;
`;

export default Textarea;
