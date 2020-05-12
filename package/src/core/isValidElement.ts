import { Element } from './createElement';
import { REACT_ELEMENT_TYPE } from '../utils/constants';

export default function(element: Element) {
  return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
