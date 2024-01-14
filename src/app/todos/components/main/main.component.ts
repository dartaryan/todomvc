import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
    selector: 'todomvc-main',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    todosService = inject(TodosService);

    visibleTodos = computed(() => {
        const todos = this.todosService.todosSig();
        const filter = this.todosService.filterSig();

        if (filter === FilterEnum.active) {
            return todos.filter(todo => !todo.isCompleted)
        } else if (filter === FilterEnum.completed) {
            return todos.filter(todo => todo.isCompleted)
        }
        return todos
    })
}
