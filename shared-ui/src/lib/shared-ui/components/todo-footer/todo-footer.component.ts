import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'todomvc-todo-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-footer.component.html',
    styleUrl: './todo-footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFooterComponent {
    @Input() footerLinks: { title: string; url: string; }[] = [];
    @Input() companyInfo: string = '';
}
