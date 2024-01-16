import {FilterEnum} from './filter.enum';

export const HEADER_DATA = {
    headerTitle: 'Things to do',
};

export const BUTTONS_DATA = [{
    text: FilterEnum.all, selectable: true, selected: true
}, {text: FilterEnum.active, selectable: true, selected: false}, {
    text: FilterEnum.completed,
    selectable: true,
    selected: false
}];



