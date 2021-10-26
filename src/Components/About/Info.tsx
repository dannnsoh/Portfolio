import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Skills from "./Skills";
import Education from "./Education";
import Hobbies from "./Hobbies";

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
				selectedTabPanelClassName="info-panel-active"
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
			>
				<TabList className="info-tab-list">
					<Tab className="info-tab">Main skills</Tab>
					<Tab className="info-tab">Education</Tab>
					<Tab className="info-tab">Hobbies</Tab>
				</TabList>
				<TabPanel className="info-panel">
					<Skills />
				</TabPanel>
				<TabPanel className="info-panel">
					<Education />
				</TabPanel>
				<TabPanel className="info-panel">
					<Hobbies />
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Info;

// Despite my inexperience in the web development industry, I look forward to continuing my journey in this field, meeting new people and gathering more knowledge on the way, and eventually starting my career as a full-fledged web developer.
