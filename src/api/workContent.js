const workContent = [
    {
        "imageSrc": require("../assets/amma-main.png"),
        "alt": "AMMA",
        "subHeader": "AMMA",
        "description": "Helping asthma sufferers manage and monitor their illness day to day"
    },
    {
        "imageSrc": require("../assets/dignity-main.png"),
        "alt": "Dignity Meals",
        "subHeader": "Dignity Meals",
        "description": "A food rescue and redistribution app focused on reducing hunger and food waste"
    },
    {
        "imageSrc": require("../assets/alife.png"),
        "alt": "Abundant Life",
        "subHeader": "Abundant Life",
        "description": "Coming Soon!"
    },
    {
        "imageSrc": require("../assets/graphic-design.png"),
        "alt": "Graphic Design",
        "subHeader": "Graphic Design",
        "description": "Select visual design projects that I've produced in the past years"
    }
];

class WorkContentApi {
    static getWorkContent() {
        return workContent;
    }
}

export default WorkContentApi;