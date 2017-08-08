const commonContent = {
    "headerNavItems": [
        {path: "/work", linkClass:"page-link", activeClassName:"active", text:"Work"},
        {path: "/about", linkClass:"page-link", activeClassName:"active", text:"About"},
        {path: require("../../assets/resume.pdf"), linkClass:"page-link", activeClassName:"active", text:"Resume"}
    ],
    "footerIcons": [
        {
            alt: "email",
            link: "#",
            imageSrc: require("../../assets/icons/email.png"),
            regularImageSrc: require("../../assets/icons/email.png"),
            hoverImageSrc: require("../../assets/icons/email-hover.png")
        },
        {
            alt: "linkedIn",
            link: "https://www.linkedin.com/in/tracy-lin",
            imageSrc: require("../../assets/icons/linkedin.png"),
            regularImageSrc: require("../../assets/icons/linkedin.png"),
            hoverImageSrc: require("../../assets/icons/linkedin-hover.png")
        },
        {
            alt: "medium",
            link: "https://medium.com/@tracy.lin", 
            imageSrc: require("../../assets/icons/medium.png"),
            regularImageSrc: require("../../assets/icons/medium.png"),
            hoverImageSrc: require("../../assets/icons/medium-hover.png")
        },
        {
            alt: "cargo",
            link: "http://cargocollective.com/tracylin", 
            imageSrc: require("../../assets/icons/cargo.png"),
            regularImageSrc: require("../../assets/icons/cargo.png"),
            hoverImageSrc: require("../../assets/icons/cargo-hover.png")
        }
    ]
};

export default commonContent;