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
        f24: "2.4rem",
        f36: "3.6rem",
        f40: "4rem",
        f44: "4.4rem",
        f48: "4.8rem",

    },
    lineHeight: {
        small: `${1 * 1.75}rem`,
        medium: `${1.6 * 1.75}rem`,
        large: `${1.8 * 1.75}rem`,
        xlarge: `${2 * 1.75}rem`,
        l24: `${2.4 * 1.75}rem`,
        l36: `${3.6 * 1.75}rem`,
        l40: `${4 * 1.75}rem`,
        l44: `${4.4 * 1.75}rem`,
        l48: `${4.8 * 1.75}rem`,

    },
    fontFamily: {
        nomal: '"HiraginoSans-W3","Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro","游ゴシック Medium",YuGothic,YuGothicM,メイリオ,Meiryo,sans-serif;'
    },
    color: {
        white: "#fff",
        xlightGray: "#eaeaea",
        lightGray: "#ccc",
        gray: "#8a8a8a",
        darkGray: "#3e3e3e",
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
        s400: `400px`,
        s350: `350px`,
        s300: `300px`,
        s250: `250px`,
        s200: `200px`,
        s150: `150px`,
        vw: `100vw`,
        vw30: `30vw`,
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

    common: {
        round: base.size.th2,
        boxShadow: "0 0 10px rgba(0,0,0,0.3);",
    },
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
        color: base.color.gray
    },
    h1: {
        size: base.fontSize.f48,
        lh: base.lineHeight.l48,
        color: base.color.blue,
    },
    h2: {
        size: base.fontSize.f40,
        lh: base.lineHeight.l40,
        color: base.color.black
    },
    h3: {
        size: base.fontSize.f36,
        lh: base.lineHeight.l36,
        color: base.color.black
    },
    h4: {
        size: base.fontSize.f24,
        lh: base.lineHeight.l24,
        color: base.color.black
    },
    color: {
        theme: base.color.blue,
        sub: base.color.cyan,
        warn: base.color.yellow,
        error: base.color.red,
        message: base.color.water,
        primary: base.color.water,
        secondary: base.color.white,
        disable: base.color.lightGray
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
        border: `${base.border.thin}  ${base.color.lightGray}`
    },
    icon: {
        mini: base.size.t2l2,
        normal: base.size.t3l3,
        large: base.size.t4l4
    },
    dialogue: {
        bgColor: base.color.xlightGray,
        borderColor: base.color.gray,
        width: base.size.s350,
        minHeight: base.size.s200,
        padding: base.space.t
    }
};

const theme = { base: base, service: service };

export default theme;
