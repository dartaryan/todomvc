import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

@Component({
    standalone: true,
    imports: [TodosComponent, RouterModule],
    selector: 'todomvc-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'todomvc';
}
