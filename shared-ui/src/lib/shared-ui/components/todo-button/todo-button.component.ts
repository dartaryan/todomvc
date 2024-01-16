import {booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Event} from '@angular/router';

@Component({
    selector: 'todomvc-todo-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-button.component.html',
    styleUrl: './todo-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoButtonComponent {
    @Input() buttonText: string = 'Button';
    @Input() selectable: boolean = false;
    @Input({transform: booleanAttribute}) selected: boolean = false;
    @Output() buttonClick = new EventEmitter<Event>();

    onClick(): void {

        if (this.selectable) {
            this.selected = !this.selected;
        }
        console.log("cl");
        this.buttonClick.emit();
    }
}

