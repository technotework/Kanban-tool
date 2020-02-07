import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseNoLinkButton from "./index.vue";
import {
  PrimaryButton,
  SecondaryButton,
  MiniButton,
  TransparentButton,
  TextButton
} from "./compose";

let description =
  'import BaseNoLinkButton from "@/components/atoms/base-no-link-button/" <br>import {PrimaryButton, SecondaryButton, MiniButton, TransparentButton, TextButton} from "@/components/atoms/base-no-link-button/compose"';
export default createDefStory(
  "atoms/BaseNoLinkButton",
  BaseNoLinkButton,
  description
);

//---------------------
//Basic
let setting = {
  name: "BaseNoLinkButton",
  compos: {
    BaseNoLinkButton: BaseNoLinkButton
  },
  props: {
    href: "https://www.google.com/",
    target: "_blank"
  },
  action: {
    event: "click"
  },
  template: tagTemp `<BaseNoLinkButton ${"props"} ${"action"}>Button</BaseNoLinkButton>`
};

export const Basic = () => createStory(setting);

//---------------------
//PrimaryButton

let settingP = {
  name: "PrimaryButton",
  compos: {
    PrimaryButton: PrimaryButton
  },
  action: {
    event: "click"
  },
  template: tagTemp `<PrimaryButton ${"props"} ${"action"}>Button</PrimaryButton>`
};

export const Primary = () => createStory(settingP);

//---------------------
//SecondaryButton

let settingS = {
  name: "SecondaryButton",
  compos: {
    SecondaryButton: SecondaryButton
  },
  action: {
    event: "click"
  },
  template: tagTemp `<SecondaryButton ${"props"} ${"action"}>Button</SecondaryButton>`
};

export const Secondary = () => createStory(settingS);


//---------------------
//MiniButton

let settingM = {
  name: "MiniButton",
  compos: {
    MiniButton: MiniButton
  },
  action: {
    event: "click"
  },
  template: tagTemp `<MiniButton ${"props"} ${"action"}>Button</MiniButton>`
};

export const Mini = () => createStory(settingM);


//---------------------
//TransparentButton

let settingT = {
  name: "TransparentButton",
  compos: {
    TransparentButton: TransparentButton
  },
  action: {
    event: "click"
  },
  template: tagTemp `<TransparentButton ${"props"} ${"action"}>Button</TransparentButton>`
};

export const Transparent = () => createStory(settingT);


//---------------------
//TextButton

let settingText = {
  name: "TextButton",
  compos: {
    TextButton: TextButton
  },
  action: {
    event: "click"
  },
  template: tagTemp `<TextButton ${"props"} ${"action"}>Button</TextButton>`
};

export const Text = () => createStory(settingText);