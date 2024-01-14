import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterEnum} from '../../types/filter.enum';
import {TodosService} from '../../services/todos.service';

@Component({
    selector: 'todomvc-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly FilterEnum = FilterEnum;
    todosService = inject(TodosService);
    filterSig = this.todosService.filterSig;
    activeCount = computed(() => {
        return this.todosService.todosSig()
            .filter((todo) => !todo.isCompleted).length
    })
    noTodosClass = computed(() => this.todosService.todosSig().length === 0)
    itemsLeftText = computed(() => `item${this.activeCount() !== 1 ? 's' : ''} left`)


    changeFilter(event: Event, filterName: FilterEnum): void {
        event.preventDefault();
        this.todosService.changeFilter(filterName);
    }
}
