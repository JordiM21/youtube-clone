import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
	const { snippet } = channelDetail;

	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: { xs: "100%", md: "320px" },
				height: "326px",
				marginTop,
			}}
		>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						color: "#fff",
					}}
				>
					<CardMedia
						image={
							snippet?.thumbnails
								?.high?.url
								? snippet
										?.thumbnails
										?.high
										?.url
								: demoProfilePicture
						}
						alt={snippet?.title}
						sx={{
							borderRadius: "50%",
							height: "180px",
							width: "180px",
							mb: 2,
							border: "1px solid #e3e3e3",
						}}
					/>
					<Typography variant="h6">
						{snippet?.title}
						<CheckCircle
							sx={{
								fontSize: 12,
								color: "gray",
								ml: "5px",
							}}
						/>
					</Typography>
					{channelDetail?.statistics
						?.subscriberCound && (
						<Typography>
							{parseInt(
								channelDetail
									?.statistics
									?.subscriberCount
							).toLocaleString()}{" "}
							Subscribers
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
