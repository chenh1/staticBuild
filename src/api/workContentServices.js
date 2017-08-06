const workContent = [
    {
        path: "amma",
        imageSrc: require("../assets/amma-main.png"),
        alt: "AMMA",
        subHeader: "AMMA",
        description: ["Helping asthma sufferers manage and monitor their illness day to day"]
    },
    {
        path: "dignityMeals",
        imageSrc: require("../assets/dignity-main.png"),
        alt: "Dignity Meals",
        subHeader: "Dignity Meals",
        description: ["A food rescue and redistribution app focused on reducing hunger and food waste"]
    },
    {
        path: "abundantLife",
        imageSrc: require("../assets/alife.png"),
        alt: "Abundant Life",
        subHeader: "Abundant Life",
        description: ["Coming Soon!"]
    },
    {
        path: "http://cargocollective.com/tracylin",
        imageSrc: require("../assets/graphic-design.png"),
        alt: "Graphic Design",
        subHeader: "Graphic Design",
        description: ["Select visual design projects that I've produced in the past years"]
    }
];

class WorkContentApi {
    static getWorkContent() {
        return workContent;
    }
}

export default WorkContentApi;