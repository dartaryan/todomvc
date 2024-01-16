import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import {TodoHeaderComponent} from '../../../shared-ui/src/lib/shared-ui/components/todo-header/todo-header.component';
import {HEADER_DATA} from './types/todos.enum';

@Component({
  selector: 'todomvc-todos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MainComponent, TodoHeaderComponent, NgOptimizedImage],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {
  protected readonly headerData = HEADER_DATA;
}
