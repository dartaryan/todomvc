import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterEnum} from '../../types/filter.enum';
import {TodosService} from '../../services/todos.service';
import {
    TodoButtonComponent
} from '../../../../../shared-ui/src/lib/shared-ui/components/todo-button/todo-button.component';
import {BUTTONS_DATA} from '../../types/todos.enum';

@Component({
    selector: 'todomvc-footer',
    standalone: true,
    imports: [CommonModule, TodoButtonComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly FilterEnum = FilterEnum;
    readonly buttonsData = BUTTONS_DATA;
    todosService = inject(TodosService);
    filterSig = this.todosService.filterSig;
    activeCount = computed(() => {
        return this.todosService.todosSig()
            .filter((todo) => !todo.isCompleted).length;
    });
    noTodosClass = computed(() => this.todosService.todosSig().length === 0);
    itemsLeftText = computed(() => `item${this.activeCount() !== 1 ? 's' : ''} left`);


    changeFilter(filterName: FilterEnum): void {
        this.todosService.changeFilter(filterName);
    }
}
