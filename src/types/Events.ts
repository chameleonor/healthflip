type LabelColors = "indigo" | "gray" | "green" | "blue" | "red" | "purple"

export interface Label {
    label: LabelColors;
    checked: boolean;
}

export interface Event {
    company: string;
    hospital: string;
    surgeon: string;
    insurance: string;
    patient: string;
    procedure: string;
    label: LabelColors;
    day: number;
    id: number;
}