import { CustomPreloadStrategy } from "./preload/custom-preload";
import { AuthService } from "./services/auth.service";

export const SHAREDINJECTIBLES: any[] = [
    AuthService,
    CustomPreloadStrategy
]