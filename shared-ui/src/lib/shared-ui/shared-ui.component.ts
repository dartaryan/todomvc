import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TodoHeaderComponent} from './components/todo-header/todo-header.component';
import {TodoCardComponent} from './components/todo-card/todo-card.component';
import {TodoInputComponent} from './components/todo-input/todo-input.component';
import {TodoTabComponent} from './components/todo-tab/todo-tab.component';
import {TodoFooterComponent} from './components/todo-footer/todo-footer.component';
import {TodoButtonComponent} from './components/todo-button/todo-button.component';
import {TodoInfoSectionComponent} from './components/todo-info-section/todo-info-section.component';
import {TodoNavigationComponent} from './components/todo-navigation/todo-navigation.component';
import {
    BUTTONS_DATA,
    CARDS_DATA,
    FOOTER_DATA,
    HEADER_DATA,
    INFO_SECTION_DATA,
    TAB_DATA
} from './types/shared-ui.const';

@Component({
    selector: 'todomvc-shared-ui',
    standalone: true,
    imports: [CommonModule, TodoHeaderComponent, TodoCardComponent, TodoInputComponent, TodoTabComponent, TodoFooterComponent, TodoButtonComponent, TodoInfoSectionComponent, TodoNavigationComponent, NgOptimizedImage],
    templateUrl: './shared-ui.component.html',
    styleUrl: './shared-ui.component.css',
})
export class SharedUiComponent {
    headerData = HEADER_DATA;
    cardsData = CARDS_DATA;
    footerData = FOOTER_DATA;
    tabData = TAB_DATA;
    infoSectionData = INFO_SECTION_DATA;
    buttonsData = BUTTONS_DATA;
}
