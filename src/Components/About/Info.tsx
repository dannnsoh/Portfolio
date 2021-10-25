import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Info = () => {
	const [ tabIndex, setTabIndex ] = useState(0);

	return (
		<div>
			<span className="info-header">
				I am a self-taught web developer with a strong passion for Javascript, React, and all things web
				development. The unique combination of creativity, logic, technology and never running out of new things
				to discover, drives my excitement and passion for web development.
			</span>
			<Tabs
				className="info-tabs"
				selectedTabClassName="info-tab-active"
				selectedTabPanelClassName="info-tab-panel-active"
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
			>
				<TabList className="info-tab-list">
					<Tab className="info-tab">Main skills</Tab>
					<Tab className="info-tab">Experience</Tab>
					<Tab className="info-tab">Education &#38; Certification</Tab>
				</TabList>
				<TabPanel className="info-tab-panel">
					<h2>Content 1</h2>
				</TabPanel>
				<TabPanel className="info-tab-panel">
					<h2>Content 2</h2>
				</TabPanel>
				<TabPanel className="info-tab-panel">
					<h2>Content 3</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Info;

// Despite my inexperience in the web development industry, I look forward to continuing my journey in this field, meeting new people and gathering more knowledge on the way, and eventually starting my career as a full-fledged web developer.
