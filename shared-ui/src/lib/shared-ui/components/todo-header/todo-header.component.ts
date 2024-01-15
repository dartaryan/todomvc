import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-header.component.html',
    styleUrl: './todo-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoHeaderComponent {
    @Input() headerTitle: string = '';
    @Input() navigationLinks: { title: string; url: string; }[] = [];
}
