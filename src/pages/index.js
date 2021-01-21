import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1572191267783-5618f992aff5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
		>
			<Override slot="SectionContent" />
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Welcome to the future
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Get in the driver's seat of your career
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Learn More
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover" position="static" padding="140px 0">
			<Override slot="SectionContent" height="700px" />
			<Box
				max-width="340px"
				padding="50px 80px 80px 50px"
				background="--color-light"
				color="--dark"
				height="600px"
			>
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					The future is 100% digital
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Become a digital product builder
				</Text>
				<Text font="--base">
					Digital Product builders are in great demand today, thanks to the No Code / Low Code movement and the rapid transition to a digital-first economy.
				</Text>
				<Text font="--base">
					A Digital Product Builder can help startups build MVPs, or build eCommerce businesses for brick and mortar shops.
					<br />
					<br />
					Whether you want to be an entrepreneur, a freelance consultant, or find a job in a startup, digital product builder is the right Adaptiv path for you.
				</Text>
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack>
				<StackItem width="50%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" />
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60064b4e5a9875001e4c5ff7/images/miro.png?v=2021-01-21T11:12:15.925Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Brainstorming and Ideation
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60064b4e5a9875001e4c5ff7/images/figma.png?v=2021-01-21T11:13:01.651Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Wireframing and design
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60064b4e5a9875001e4c5ff7/images/airtable.png?v=2021-01-21T11:17:10.697Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								No code solutions and backend
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60064b4e5a9875001e4c5ff7/images/framer.jpeg?v=2021-01-21T11:17:10.689Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								User interactions and protyping
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" />
					<Text color="--grey" letter-spacing="1px" text-transform="uppercase" margin="0 0 10px 0">
						tools == jobs
					</Text>
					<Text as="h2" font="--headline2" md-font="--headline3" margin="0">
						Learn the tools and techniques that really matter.{" "}
					</Text>
					<Section>
						<Text display="contents">
							Level up your life with a new career alongside what you are doing right now. Our task based course, designed for students and professionals make you invest 20 to 30 minutes each day and take your career to the next level.
						</Text>
					</Section>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base" flex-wrap="wrap" align-items="center">
				<StackItem flex-grow="1" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
					>
						And many more tools
					</Text>
				</StackItem>
				<StackItem md-width="100%">
					<Text margin="0px" max-width="260px">
						Tools based learning for the new-economy.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						The future of work is 100% Digital. You should be too.
					</Text>
					<Section>
						<Override slot="SectionContent" font="--base" />
						<Text>
							Choose from a wide range of opportunities in the future - ranging from No-Code teacher, Innovation Consultant, Digital Product Manager and a lot more.
						</Text>
					</Section>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Futuristic
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Chat and Learn
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						Every day, you will be given a task, related to a new skill. When you complete the task you will get a badge, that allows you to showcase your skills.
						<br />
						<br />
						In 21 days, spending 20 minutes a day, you can become a digital product builder, opening opportunities that were only available for a select few people earlier.
					</Text>
				</StackItem>
				<Image width="450px" height="700px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60064b4e5a9875001e4c5ff7/images/mobile_view.png?v=2021-01-21T12:47:43.441Z) 0% 0% /auto repeat scroll padding-box" />
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});