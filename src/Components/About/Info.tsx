import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Skills from "./Skills";
import Education from "./Education";
import Background from "./Background";

const Info = () => {
	const [ tabIndex, setTabIndex ] = useState(0);
	const [ ref, inView ] = useInView({
		threshold: 0.9,
		triggerOnce: true
	});

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
					<Tab className="info-tab">Background</Tab>
				</TabList>
				<div
					ref={ref}
					style={
						inView ? (
							{
								animation: "fadeInUp",
								animationDuration: "1s"
							}
						) : (
							{ visibility: "hidden" }
						)
					}
				>
					<TabPanel className="info-panel">
						<Skills />
					</TabPanel>
					<TabPanel className="info-panel">
						<Education />
					</TabPanel>
					<TabPanel className="info-panel">
						<Background />
					</TabPanel>
				</div>
			</Tabs>
		</div>
	);
};

export default Info;

// Despite my inexperience in the web development industry, I look forward to continuing my journey in this field, meeting new people and gathering more knowledge on the way, and eventually starting my career as a full-fledged web developer.
