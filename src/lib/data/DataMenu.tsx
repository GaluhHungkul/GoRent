import { Car, Home, Star, Users } from "lucide-react";

export const DataMenu = [
    {
        name : "Home",
        href : "#top",
        icon : <Home size={28}/>
    },
    {
        name : "Why Us",
        href : "#whyRentWithUs",
        icon : <Star fill="white" size={28}/>
    },
    {
        name : "List Car",
        href : "#listCars",
        icon : <Car size={28}/>
    },
    {
        name : "Testimonials",
        href : "#hearFromOurClients",
        icon : <Users size={28}/>
    },
]