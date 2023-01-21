import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { Fetching } from "../utils/Fetching";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);

	const { searchTerm } = useParams();

	useEffect(() => {
		Fetching(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setVideos(data.items)
		);
	}, [searchTerm]);

	return (
		<Box
			p={2}
			sx={{
				overflowY: "auto",
				height: "90vh",
				flex: 2,
				backgroundColor: "black",
			}}
		>
			<Typography
				fontWeight="bold"
				fontSize={{ xs: 20, md: 30 }}
				mb={2}
				sx={{ color: "white" }}
			>
				Search results for:{" "}
				<span style={{ color: "blue" }}>
					'{searchTerm}'
				</span>{" "}
				Videos
			</Typography>
			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
