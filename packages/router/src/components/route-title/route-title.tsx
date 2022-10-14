import { Component, Prop, Element, Watch, ComponentInterface } from '@rindo/core';
import ActiveRouter from '../../global/active-router';

/**
  * Updates the document title when found.
  *
  * @name RouteTitle
  * @description
 */
@Component({
  tag: 'rindo-route-title'
})
export class RouteTitle implements ComponentInterface {
  @Element() el!: HTMLElement;
  @Prop() titleSuffix: string = '';
  @Prop() pageTitle: string = '';

  @Watch('pageTitle')
  updateDocumentTitle() {
    const el = this.el;
    if (el.ownerDocument) {
      el.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ''}`;
    }
  }

  componentWillLoad() {
    this.updateDocumentTitle();
  }
}

ActiveRouter.injectProps(RouteTitle, [
  'titleSuffix',
]);
