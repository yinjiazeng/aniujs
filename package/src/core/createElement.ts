import { REACT_ELEMENT_TYPE } from '../utils/constants';

export type FunctionComponent = () => void;

export type ClassComponent = () => void;

export type HostComponent = string;

export type ComponentType = FunctionComponent | ClassComponent | HostComponent | HTMLElement;

export interface ComponentProps {
  children?: any;
  [key: string]: any;
}

export interface ElementProps extends ComponentProps {
  key?: any;
  ref?: any;
}

export interface Element {
  tag: number;
  type: ComponentType | null;
  props: ComponentProps;
  key?: any;
  ref?: any;
  $$typeof?: typeof REACT_ELEMENT_TYPE;
  node?: HTMLElement | Text;
  [key: string]: any;
}

/**
 * @param tag
 * 1 FunctionComponent
 * 2 ClassComponent
 * 3 HostComponent
 * 4 HostText
 */
export function creactReactElement(
  tag: number,
  type: ComponentType,
  props: ComponentProps,
  key: any,
  ref: any,
): Element {
  return {
    tag,
    type,
    props,
    key,
    ref,
    $$typeof: REACT_ELEMENT_TYPE,
  };
}

export default function createElement(
  type: ComponentType,
  props: ElementProps | null | undefined,
  ...children: any[]
) {
  let tag = 0;
  const { key = null, ref = null, ...restProps } = props || {};

  if (typeof type === 'function') {
    if (type.prototype.render) {
      tag = 2;
    } else {
      tag = 1;
    }
  } else if (typeof type === 'string') {
    tag = 3;
    if (props === undefined) {
      tag = 4;
    }
  }

  return creactReactElement(tag, type, { children, ...restProps }, key, ref);
}
