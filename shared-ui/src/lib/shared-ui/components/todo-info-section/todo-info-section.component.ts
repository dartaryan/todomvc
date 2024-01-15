import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-info-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-info-section.component.html',
    styleUrl: './todo-info-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInfoSectionComponent {
    @Input() sectionTitle: string = '';
    @Input() infoContent: string = '';
}
