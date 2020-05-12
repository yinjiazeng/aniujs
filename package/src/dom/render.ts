import createElement, { Element } from '../core/createElement';
import diff from '../vdom/diff';

export default function(element: Element, container: HTMLElement) {
  const textElement = createElement('', null);
  const textNode = document.createTextNode('');

  while (container.firstChild) {
    container.firstChild.remove();
  }

  container.appendChild(textNode);
  textElement.node = textNode;

  const containerElement = createElement(container, { children: textElement });

  diff(element, containerElement.props.children);
}
