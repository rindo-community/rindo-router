import { Component, Prop, Element, ComponentInterface, Watch, State } from '@rindo/core';
import { RouterHistory, Prompt } from '../../global/interfaces';
import ActiveRouter from '../../global/active-router';

@Component({
  tag: 'rindo-router-prompt'
})
export class RindoRouterPrompt implements ComponentInterface {
  @Element() el!: HTMLElement;
  @Prop() when = true;
  @Prop() message: string | Prompt = '';
  @Prop() history?: RouterHistory;

  @State() unblock?: () => void;

  enable(message: string | Prompt) {
    if (this.unblock) {
      this.unblock();
    }
    if (this.history) {
      this.unblock = this.history.block(message);
    }
  }

  disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = undefined;
    }
  }

  componentWillLoad() {
    if (this.when ) {
      this.enable(this.message);
    }
  }

  @Watch('message')
  @Watch('when')
  updateMessage(newMessage: string, prevMessage: string) {
    if (this.when) {
      if (!this.when || prevMessage !== newMessage) {
        this.enable(this.message);
      }
    } else {
      this.disable();
    }
  }

  componentDidUnload() {
    this.disable();
  }

  render() {
    return null;
  }
}

ActiveRouter.injectProps(RindoRouterPrompt, [
  'history',
]);
