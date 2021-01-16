import React from 'react';

interface ITabSelectorProps {
    displayTab: string;
    changeTab: (requestingTab: string) => void;
}

const TabSelector: React.FC<ITabSelectorProps> = (props) => (
    <ul className="tab-bar-links">
        <li><button
            className={'tab-bar-link ' + (props.displayTab === 'default' ? 'tab-active' : '')}
            onClick={() => props.changeTab('default')}>ABOUT ME</button>
        </li>
        <li><button
            className={'tab-bar-link ' + (props.displayTab === 'summary' ? 'tab-active' : '')}
            onClick={() => props.changeTab('summary')}>SUMMARY</button>
        </li>
    </ul>
);

export default TabSelector;