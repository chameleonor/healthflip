export type LabelColors = "indigo" | "gray" | "green" | "blue" | "red" | "purple"

export interface Label {
    label: LabelColors;
    checked: boolean;
}

export interface Event {
    name: string;
    company: string;
    hospital: string;
    surgeon: string;
    insurance: string;
    patient: string;
    procedure: string;
    label: string;
    day: number;
    id: null;
}