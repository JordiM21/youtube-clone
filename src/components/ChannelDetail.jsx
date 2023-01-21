import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { Fetching } from "../utils/Fetching";

const ChannelDetail = () => {
	const { id } = useParams();

	const [channelDetail, setChannelDetail] = useState(null);

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		Fetching(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);
		Fetching(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);

	return (
		<Box minHeight="95vh" sx={{ backgroundColor: "#000" }}>
			<Box>
				<div
					style={{
						background: "linear-gradient(33deg, rgba(59,193,218,1) 0%, rgba(223,31,31,1) 100%)",
						zIndex: 10,
						height: "300px",
					}}
				/>
				<ChannelCard
					channelDetail={channelDetail}
					marginTop="-120px"
				/>
			</Box>
			<Box display={"flex"} p="2">
				<Box sx={{ mr: { sm: "100px" } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
