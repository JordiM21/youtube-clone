import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
	<Stack
		direction="row"
		alignItems="center"
		paddingX={2}
		sx={{
			position: "sticky",
			background: "linear-gradient(33deg, rgba(118,177,187,1) 0%, rgba(50,57,167,1) 100%)",
			zIndex: 1,
			top: "0",
			justifyContent: "space-between",
		}}
	>
		<Link to="/" style={{ display: "flex", alignItems: "center" }}>
			<img src={logo} alt="logo" height={80} />
		</Link>
		<SearchBar />
	</Stack>
);

export default Navbar;
