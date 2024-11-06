export interface MotorExhibition {
    imgUrl: String;
    name: String;
}

export class MotorcycleParts {
    imgUrl: String = "";
    name: String = "";
    price: number = 0;
}

export class MotorcycleResponse {
    front: Array<MotorcycleParts> = [];
    engine: Array<MotorcycleParts> = [];
    frontTyre: Array<MotorcycleParts> = [];
    rearTyre: Array<MotorcycleParts> = [];
}