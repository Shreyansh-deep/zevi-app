import { ReactNode } from "react";
import { FilterType } from "./enums";

export interface FilterOption {
    value: any;
    type: FilterType;
    title: ReactNode;
}