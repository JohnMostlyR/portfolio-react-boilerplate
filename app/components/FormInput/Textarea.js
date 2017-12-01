import Input from './Input';
import typography, { baseFontRegular } from '../../styles/templates/typography';

export const Textarea = Input.withComponent('textarea').extend`
  ${baseFontRegular}
  ${typography.bodyCopy}
  appearance: none;
  height: 2em;
  overflow: hidden;
  resize: none;
`;

export default Textarea;
