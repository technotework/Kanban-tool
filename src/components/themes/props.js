const base =
{
    fontSize: {
        base: "62.5%",
        xxsmall: "1rem",
        xsmall: "1.2rem",
        small: "1.4rem",
        medium: "1.6rem",
        large: "1.8rem",
        xlarge: "2rem",
        xxlarge: "2.4rem"
    },
    lineHeight: {
        small: `${1 * 1.75}rem`,
        medium: `${1.6 * 1.75}rem`,
        large: `${1.8 * 1.75}rem`,
        xlarge: `${2 * 1.75}rem`,
        xxlarge: `${2.4 * 1.75}rem`
    },
    fontFamily: {
        nomal: '"HiraginoSans-W3","Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro","游ゴシック Medium",YuGothic,YuGothicM,メイリオ,Meiryo,sans-serif;'
    },
    color: {
        white: "#fff",
        lightGlay: "#ccc",
        glay: "#8a8a8a",
        darkGlay: "#3e3e3e",
        black: "#000",
        blue: "#182573",
        cyan: "#09abbe",
        water: "#a7e6ed",
        yellow: "#f2e900",
        red: "#be0909"
    },
    space: {
        th2: "0.4rem",
        th: "0.8rem",
        l: "1.2rem",
        t: "1.6rem",
        t2: "3.2rem",
        tl: `${1.6 * 1.75}rem`,
        t2l: `${1.6 * 2 + 1.2 * 1}rem`,
        t2l2: `${1.6 * 2 + 1.2 * 2}rem`,
        t3l2: `${1.6 * 3 + 1.2 * 2}rem`,
        t3l3: `${1.6 * 3 + 1.2 * 3}rem`,
        t4l3: `${1.6 * 4 + 1.2 * 3}rem`,
        t4l4: `${1.6 * 4 + 1.2 * 4}rem`
    },
    size: {
        z: 0,
        th2: "0.4rem",
        th: "0.8rem",
        l: "1.2rem",
        t: "1.6rem",
        tl: `${1.6 * 1.75}rem`,
        t2l: `${1.6 * 2 + 1.2 * 1}rem`,
        t2l2: `${1.6 * 2 + 1.2 * 2}rem`,
        t3l2: `${1.6 * 3 + 1.2 * 2}rem`,
        t3l3: `${1.6 * 3 + 1.2 * 3}rem`,
        t4l3: `${1.6 * 4 + 1.2 * 3}rem`,
        t4l4: `${1.6 * 4 + 1.2 * 4}rem`,
        t5l4: `${1.6 * 5 + 1.2 * 4}rem`,
        t5l5: `${1.6 * 5 + 1.2 * 5}rem`,
        s300: `300px`,
        s200: `200px`,
        s150: `150px`,
        vw: `100vw`,
        vh: `100vh`
    },
    border: {
        thin: "solid 1px",
        radius: "0.8rem"
    },
    index: {
        heigh: 99999,
        subHeigh: 99998,
        middle: 88888,
        subMiddle: 88887,
        low: 77777,
        subLow: 77776
    }
};

const service = {

    baseText: {
        size: base.fontSize.base,
        fontFamily: base.fontFamily.nomal,
        color: base.color.black
    },
    mainText: {
        size: base.fontSize.medium,
        lh: base.lineHeight.medium,
    },
    caption: {
        size: base.fontSize.small,
        lh: base.lineHeight.small,
        color: base.color.glay
    },
    h1: {
        size: base.fontSize.xxlarge,
        lh: base.fontSize.xxlarge,
        color: base.color.blue,
    },
    h2: {
        size: base.fontSize.xlarge,
        lh: base.fontSize.xlarge
    },
    h3: {
        size: base.fontSize.large,
        lh: base.fontSize.large
    },
    color: {
        theme: base.color.blue,
        sub: base.color.cyan,
        warn: base.color.yellow,
        error: base.color.red,
        message: base.color.water,
        primary: base.color.water,
        secondary: base.color.white,
        disable: base.color.lightGlay
    },
    form: {
        labelMargin: base.space.th,
        inputPadding: base.space.t
    },
    button: {
        fontSize: base.fontSize.small,
        lineHeight: base.space.z,
        padding: `${base.space.t} ${base.space.t2}`,
        margin: `${base.space.t2l2} 0 ${base.space.t2l2} ${base.space.t}`,
        radius: base.border.radius,
        border: `${base.border.thin}  ${base.color.lightGlay}`
    }
};

const theme = { base: base, service: service };

export default theme;
