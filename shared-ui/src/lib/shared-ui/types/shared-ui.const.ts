import {ButtonType, LinkTitle} from './shared-ui.enum';

export const HEADER_DATA = {
    headerTitle: 'Travel Insurance',
    navigationLinks: [
        { title: LinkTitle.Home, url: '/' },
        { title: LinkTitle.About, url: '/about' },
        { title: LinkTitle.Services, url: '/services' },
        { title: LinkTitle.Contact, url: '/contact' }
    ]
};

export const CARD_DATA = {
    planDetails: {
        title: 'Family Plan',
        description: 'Ideal for family trips. Coverage for up to 5 members.',
        price: 450
    }
};

export const FOOTER_DATA = {
    footerLinks: [
        { title: 'Privacy Policy', url: '/privacy' },
        { title: 'Terms of Use', url: '/terms' }
    ],
    companyInfo: '© 2024 Travel Insurance Co.'
};

export const TAB_DATA = {
    tabs: [
        { title: 'Description', content: 'Detailed description of the plan.' },
        { title: 'Benefits', content: 'List of benefits included in the plan.' },
        { title: 'Reviews', content: 'Customer reviews and ratings.' }
    ]
};

export const INFO_SECTION_DATA = {
    title: 'About Our Insurance',
    content: 'We provide the best travel insurance plans to ensure your journey is safe and enjoyable.'
};

export const BUTTONS_DATA = [
    { text: ButtonType.Primary, selectable: false, selected: false },
    { text: ButtonType.Selectable, selectable: true, selected: false },
    { text: ButtonType.Selected, selectable: true, selected: true }
];
