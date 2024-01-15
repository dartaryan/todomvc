import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-input.component.html',
    styleUrl: './todo-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
}
