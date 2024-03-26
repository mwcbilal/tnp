import iconImage1 from "../../assets/rentcar/Icon1.svg";
import iconImage2 from "../../assets/rentcar/Icon2.svg";
import iconImage3 from "../../assets/rentcar/Icon3.svg";
import iconImage4 from "../../assets/rentcar/Icon4.svg";
import calendarIcon from "../../assets/rentcar/calendarIcon.svg";
import completeIcon from "../../assets/rentcar/completeIcon.svg";
import listIcon from "../../assets/rentcar/listIcon.svg";
import lineLeft from "../../assets/rentcar/leftLine.svg";
import lineRight from "../../assets/rentcar/rightLine.svg";
import corolla from "../../assets/rentcar/corolla.svg";
import yaris from "../../assets/rentcar/yaris.svg";
import civic from "../../assets/rentcar/civic.svg";

export const carTypes = [
  { name: "Sedan", iconImage: iconImage1 },
  { name: "SUVs", iconImage: iconImage2 },
  { name: "Luxury", iconImage: iconImage3 },
  { name: "4x4", iconImage: iconImage4 },
];

export const getCarMotivationData = [
    {
        Title: "Choose Your Car",
        Description: "Select a car using search or catalog",
        Image: listIcon
    },
    {
        Title: "Left",
        Description: "This helps to draw a line",
        Image: lineLeft
    },
    {
        Title: "Contact Your Dealer",
        Description: "After you’ve selected a car a dealer will contact you.",
        Image: calendarIcon
    },
    {
        Title: "Right",
        Description: "This helps to draw a line",
        Image: lineRight
    },
    {
        Title: "Get Your Car",
        Description: "Here you are! Your car is book and waiting for you.",
        Image: completeIcon
    }
];

export const availableCars = [
    {
        CarTitle: "Toyota Corolla",
        RentPrice: 10000,
        ModelYear: 2020,
        KilometersRan: 20,
        DriveType: "Auto",
        ConsumptionType: "Diesel",
        CarImage: corolla,
        CarType: "Sedan"
    },
    {
        CarTitle: "Toyota Yaris",
        RentPrice: 10000,
        ModelYear: 2021,
        KilometersRan: 15,
        DriveType: "Auto",
        ConsumptionType: "Petrol",
        CarImage: yaris,
        CarType: "Sedan"
    },
    {
        CarTitle: "Honda Civic",
        RentPrice: 10000,
        ModelYear: 2019,
        KilometersRan: 45,
        DriveType: "Manual",
        ConsumptionType: "Petrol",
        CarImage: civic,
        CarType: "Sedan"
    }
]
