import { ReactNode } from "react";

export interface ButtonProps {
    type?: "primary" | undefined;
    children: ReactNode;
}