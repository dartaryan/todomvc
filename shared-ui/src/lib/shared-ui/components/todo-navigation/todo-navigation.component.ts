import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-navigation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-navigation.component.html',
    styleUrl: './todo-navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoNavigationComponent {
    @Input() navLinks: { title: string; url: string; }[] = [];
    @Input() activeLink: string = '';
}
