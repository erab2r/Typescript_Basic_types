//

type vehicle = {
    bike : string;
    car : string;
    ship : string;
};

type checkVehicle<T> = T extends keyof vehicle ? true : false;

type hasBike = checkVehicle<"ship">;