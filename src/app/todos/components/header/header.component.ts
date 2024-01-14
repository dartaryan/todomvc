import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
    selector: 'todomvc-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    todosService = inject(TodosService);
    text: string = '';

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.text = target.value;
    }

    addTodo(): void {
        this.todosService.addTodo(this.text);
        this.text = '';
    }
}
