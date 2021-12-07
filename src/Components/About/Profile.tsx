import Image from "react-bootstrap/Image";
import aboutImage from "./images/me.jpg";

const Profile = () => {
	return (
		<div className="about-profile">
			<Image className="about-thumbnail" src={aboutImage} fluid />
			<span className="about-header">
				I am a self-taught web developer with a strong passion for Javascript,
				React, and all things web development. The unique combination of
				creativity, logic, technology and never running out of new things to
				discover, drives my excitement and passion for web development.
			</span>
		</div>
	);
};

export default Profile;
