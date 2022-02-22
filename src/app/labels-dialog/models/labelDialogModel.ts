import { LabelDialog } from "../interfaces/labelDialog";

export class LabelDialogModel implements LabelDialog {
    id: string;
    name: string;
    selected: boolean;

    constructor() {
        this.id = '0';
        this.name = "";
        this.selected = true;
    }
}