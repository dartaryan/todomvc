import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-tab',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-tab.component.html',
    styleUrl: './todo-tab.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoTabComponent {
    @Input() tabs: { title: string; content: string; }[] = [];
    selectedTabIndex: number = 0;

    selectTab(index: number): void {
        this.selectedTabIndex = index;
    }
}
