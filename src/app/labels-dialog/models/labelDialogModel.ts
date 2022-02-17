import { LabelDialog } from "../interfaces/labelDialog";

export class LabelDialogModel implements LabelDialog {
    id: number;
    name: string;
    selected: boolean;
    isEdit: boolean;

    constructor() {
        this.id = 0;
        this.name = "";
        this.selected = true;
        this.isEdit = false;
    }

    // isEditActive(value: boolean) {
    //     this.isEdit = value;
    // }
}