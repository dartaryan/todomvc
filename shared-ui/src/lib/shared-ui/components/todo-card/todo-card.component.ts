import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardComponent {
    @Input() planDetails: { title: string; description: string; price: number; } | null = null;
    @Input() offerDetails: { offerTitle: string; offerInfo: string; } | null = null;
}
