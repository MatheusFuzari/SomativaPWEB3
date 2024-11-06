import axios from "axios"
import { getAxios } from "./service.config";
import type { MotorcycleResponse } from "@/models/Motorcycle";


export const getParts = (): Promise<MotorcycleResponse> => {
    return getAxios().get("http://localhost:3000/parts");
}