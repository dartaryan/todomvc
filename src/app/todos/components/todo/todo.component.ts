import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoInterface} from '../../types/todo.interface';
import {TodosService} from '../../services/todos.service';

@Component({
    selector: 'todomvc-todo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
    @Input({required: true}) todo!: TodoInterface;
    @Input({required: true}) isEditing!: boolean;
    @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
    editingText: string = '';
    todosService = inject(TodosService);

    changeText(event: Event): void {
        this.editingText = (event.target as HTMLInputElement).value;
    }

    changeTodo(): void {
        this.todosService.changeTodo(this.todo.id, this.editingText);
        this.setEditingId.emit(null);
    }


    setTodoInEditMode(): void {
        this.setEditingId.emit(this.todo.id);
    }

    ngOnInit(): void {
        this.editingText = this.todo.text;
    }

    removeTodo(): void {
        this.todosService.removeTodo(this.todo.id);
    }
}
