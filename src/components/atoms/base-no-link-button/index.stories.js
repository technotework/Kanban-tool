import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseNoLinkButton from "./index.vue";
import {
  PrimaryButton, SecondaryButton, PrimaryMiniButton, SecondaryMiniButton, TransparentButton, MenuButton, MiniButton, BigButton, TextButton
} from "./compose";

let description =
  'import BaseNoLinkButton from "@/components/atoms/base-no-link-button/" <br>import {PrimaryButton, SecondaryButton, PrimaryMiniButton, SecondaryMiniButton, TransparentButton, MenuButton, MiniButton,BigButton,TextButton} from "@/components/atoms/base-no-link-button/compose"';
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
  template: tagTemp`<BaseNoLinkButton ${"props"} ${"action"}>Button</BaseNoLinkButton>`
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
  template: tagTemp`<PrimaryButton ${"props"} ${"action"}>Button</PrimaryButton>`
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
  template: tagTemp`<SecondaryButton ${"props"} ${"action"}>Button</SecondaryButton>`
};

export const Secondary = () => createStory(settingS);

//---------------------
//PrimaryMiniButton

let settingMP = {
  name: "PrimaryButton",
  compos: {
    PrimaryMiniButton: PrimaryMiniButton
  },
  action: {
    event: "click"
  },
  template: tagTemp`<PrimaryMiniButton ${"props"} ${"action"}>Button</PrimaryMiniButton>`
};

export const PrimaryMini = () => createStory(settingMP);

//---------------------
//SecondaryMiniButton

let settingMS = {
  name: "SecondaryButton",
  compos: {
    SecondaryMiniButton: SecondaryMiniButton
  },
  action: {
    event: "click"
  },
  template: tagTemp`<SecondaryMiniButton ${"props"} ${"action"}>Button</SecondaryMiniButton>`
};

export const SecondaryMini = () => createStory(settingMS);


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
  template: tagTemp`<TransparentButton ${"props"} ${"action"}>Button</TransparentButton>`
};

export const Transparent = () => createStory(settingT);


//---------------------
//MenuButton

let settingMenu = {
  name: "MenuButton",
  compos: {
    MenuButton: MenuButton
  },
  action: {
    event: "click"
  },
  template: tagTemp`<MenuButton ${"props"} ${"action"}>Button</MenuButton>`
};

export const Menu = () => createStory(settingMenu);



//fixme

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
  template: tagTemp`<MiniButton ${"props"} ${"action"}>Button</MiniButton>`
};

export const Mini = () => createStory(settingM);


//---------------------
//BigButton

let settingBG = {
  name: "BigButton",
  compos: {
    BigButton: BigButton
  },
  action: {
    event: "click"
  },
  template: tagTemp`<BigButton ${"props"} ${"action"}>Button</BigButton>`
};

export const Big = () => createStory(settingBG);


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
  template: tagTemp`<TextButton ${"props"} ${"action"}>Button</TextButton>`
};

export const Text = () => createStory(settingText);