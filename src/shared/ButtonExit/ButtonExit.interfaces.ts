import { ReactNode } from "react";

export interface ButtonExitProps {
    type?: "link" | "text" | "default" | "ghost" | "primary" | "dashed" | undefined;
    shape: "circle" | undefined;
    customsize: number;
    children: ReactNode;
}

export interface StyledButtonExitProps {
    customsize: number;
}