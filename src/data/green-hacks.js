import Home from "./../assets/imgs/green-hacks-imgs/home.jpg"
import ElectricCar from "./../assets/imgs/green-hacks-imgs/electric-car.jpg"
import Food from "./../assets/imgs/green-hacks-imgs/food.jpg"
import ZeroWaste from "./../assets/imgs/green-hacks-imgs/zero-waste.jpg"
import Water from "./../assets/imgs/green-hacks-imgs/water.jpg"

export const greenHacksData = [
    {
        id: 1,
        image: Home,
        title: "Efficiency at Home",
        sections: [
            {
                id: 1.1,
                title: "Heating Maintenance",
                paragraph: "Make sure your heating system is well taken care of, and that the filters are clean. Also, consider replacing an old gas heater with a more efficient model.",
            },
            {
                id: 1.2,
                title: "Insulation",
                paragraph: "Insulate your ceiling, walls, and floor to keep the inside temperature steady without wasting energy. For example, add insulation to the external walls of your house to prevent heat from escaping."
            }
        ],
    },
    {
        id: 2,
        image: ElectricCar,
        title: "Low-Impact Transportation",
        sections: [
            {
                id: 2.1,
                title: "Vehicle Maintenance",
                paragraph: "Ensure your vehicle is properly maintained. Regularly check the exhaust system to reduce CO emissions caused by mechanical issues.",
            },
            {
                id: 2.2,
                title: "Electric Vehicles",
                paragraph: "If possible, think about getting an electric vehicle with zero CO emissions. These vehicles are powered by cleaner electricity compared to combustion engine vehicles."
            }
        ],
    },
    {
        id: 3,
        image: Food,
        title: "Reducing CO in Your Lifestyle",
        sections: [
            {
                id: 3.1,
                title: "Sustainable Cooking",
                paragraph: "Decrease the use of electric or gas stoves at home. Use more efficient cooking methods like steam cooking or pressure cookers, which need less energy.",
            },
            {
                id: 3.2,
                title: "Dietary Choices",
                paragraph: "Lower your consumption of meat and animal products, which are often linked to high CO levels during production. Opt for plant-based meals."
            }
        ],
    },
    {
        id: 4,
        image: ZeroWaste,
        title: "Waste Reduction and CO",
        sections: [
            {
                id: 4.1,
                title: "Reusable Products",
                paragraph: "Avoid disposable items like plastic cups and disposable cutlery. Use reusable containers for food and drinks.",
            },
            {
                id: 4.2,
                title: "Recycling and Composting",
                paragraph: "Properly recycle and start composting to reduce the overall volume of waste and CO emissions connected to decomposition in landfills."
            }
        ],
    },
    {
        id: 5,
        image: Water,
        title: "Responsible Water and CO Management",
        sections: [
            {
                id: 5.1,
                title: "Water Conservation",
                paragraph: "Install low-flow faucets and water-saving showers to reduce water use. This will help reduce the need for energy in water treatment.",
            },
            {
                id: 5.2,
                title: "Water Purification",
                paragraph: "Decrease the use of chemicals in water treatment. Use more efficient filtering systems to improve water quality without releasing CO."
            }
        ],
    },
]