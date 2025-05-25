import { Box, Button, Chip,  createTheme, Divider, keyframes, ThemeProvider, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material'
import  { useState } from 'react'

import Nikita from "../comp/Images/WhatsApp Image 2024-10-19 at 10.35.15 AM.jpeg"

const themeTypo = createTheme({
    typography: {
        h1: {
            fontFamily: "Manuale",
            fontSize: "22px",
            fontWeight: "bold"
        },
        h2: {
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: 600
        },
        h3: {
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400
        },
        chip: {
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 500
        },
        heading: {
            fontFamily: "Poppins",
            fontSize: "40px",
            fontWeight: 500
        },
        subheading: {
            fontFamily: "Poppins",
            fontSize: "26px",
            fontWeight: 300
        },
        NW: {
            fontFamily: "Meow Script",
            fontSize: "12px",
            fontWeight: 300
        },
        h1rightsec: {
            fontFamily: "Manuale",
            fontSize: "20px",
            fontWeight: "bold"
        },
        contentrightsec: {
            fontFamily: "Poppins",
            fontSize: "16px",
        },
        contentheadingrightsec: {
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "bold"
        },
    }
})

const skills = [
    "HTML",
    "CSS",
    "JS",
    "ReactJS",
    "C",
    "C++",
    "NextJS",
    "MUI",
    "Bootstrap",
    "WebFlow",
    "MS OFFICE",
    "SQL",
    "Tailwind CSS",
    "Core JAVA",
    "Python",
];

const hobbies = [
    "Cooking",
    "Badminton",
    "Listening Music",
    "Shopping",
];

const ResumeMobileView = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobileTablet = useMediaQuery(theme.breakpoints.down('md'));

    const [tooltipText, setTooltipText] = useState("Copy to clipboard");

    const handleCopyPhone = () => {
        navigator.clipboard.writeText("8698828048");
        setTooltipText("Copied!");
        setTimeout(() => setTooltipText("Copy to clipboard"), 2000);
    };

    const handleCopyMail = () => {
        navigator.clipboard.writeText("nikitawanve2001@gmail.com");
        setTooltipText("Copied!");
        setTimeout(() => setTooltipText("Copy to clipboard"), 2000);
    };


    const gradientAnimation = keyframes`
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        `;


    return (
        <>
            <ThemeProvider theme={themeTypo}>

                {isMobileTablet && (
                    <Button
                        variant='contained'
                        onClick={() => window.open("https://www.linkedin.com/in/nikita-wanve-86b483229/" , "_blank")}
                        sx={{
                            position: 'fixed',
                            bottom:  26 ,
                            right:  26 ,
                            zIndex: 1000,
                            backgroundImage: "linear-gradient(to right, #A64DFF, #3494E6, #EC6EAD)",
                            backgroundSize: "300% 300%",
                            animation: `${gradientAnimation} 2s ease infinite`,
                            color: 'white',
                            fontWeight: 500,
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                            transition: 'letter-spacing 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #2b7fd2, #3F00FF)',
                                letterSpacing: "2px"
                            },
                        }}
                    >
                        Hire Me
                    </Button>
                )}

                <Box display={"flex"} flexDirection={"column" } justifyContent={"center"} >
                    {/* left section */}
                    <Box
                        maxWidth={isMobile ? null : "310px"}
                        display="flex"
                        flexDirection="column"
                        // sx={{
                        //     backgroundImage:  'linear-gradient(45deg, #3494E6, #EC6EAD, #3494E6)',
                        //     backgroundSize:  '300% 300%',
                        //     animation:  `${gradientAnimation} 6s ease infinite`,
                        //     boxShadow:  "inset 0 0 10px rgba(0, 0, 0, 0.25)",
                        // }}
                    >
                        {/* only for mobile view */}
                        <Box
                            // display={isMobile ? null : "none"}
                            color={"white"}
                            p={3}
                            sx={{
                                backgroundImage:  'linear-gradient(45deg, #3494E6, #EC6EAD, #3494E6)' ,
                                backgroundSize: '300% 300%',
                                animation:  `${gradientAnimation} 6s ease infinite` ,
                            }}
                        >
                            <Box display={"flex"} flexDirection={"column"} alignContent={"flex-start"}>
                                <Typography
                                    textAlign={"left"}
                                    variant="heading"
                                    sx={{
                                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", // Drop shadow effect
                                    }}
                                >
                                    Nikita Ravindra Wanve
                                </Typography>
                                <Typography
                                    textAlign={"left"}
                                    variant="subheading"
                                    sx={{
                                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", // Drop shadow effect
                                    }}
                                >
                                    UI/UX Designer & Software Developer
                                </Typography>
                            </Box>

                            <Divider>
                                <Typography
                                    variant="NW"
                                    sx={{
                                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)", // Drop shadow effect
                                    }}
                                >
                                    NW
                                </Typography>
                            </Divider>
                        </Box>


                        <Box
                            component="img"
                            src={Nikita}
                            alt="Parth Jathar"
                            sx={{
                                width: isMobile ? null : '310px',
                                // height: '381px',
                                objectFit: 'fill',
                                // marginBottom: '16px',
                            }}
                        />

                        <Box display={"flex"} flexDirection={"column"} gap={1} px={3} py={ 2 }>
                            {/* contact me */}
                            <Box display={"flex"} flexDirection={"column"} gap={1}>
                                {/* <Typography sx={{ display: isMobile ? "none" : null }} gutterBottom variant='h1' color='white' textAlign={"left"}>Contact Me</Typography> */}
                                <Box display={"flex"} flexDirection={"column"} gap={1.5}>

                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Tooltip title={tooltipText} arrow>
                                            <Box display={"flex"} flexDirection={"column"} sx={{ cursor: "pointer" }}
                                                onClick={handleCopyMail}>
                                                <Typography gutterBottom variant='h2' textAlign={"left"} color={ "black" }>E-mail</Typography>
                                                <Typography gutterBottom variant='h3' textAlign={"left"} color={ "black"}>nikitawanve2001@gmail.com</Typography>
                                            </Box>
                                        </Tooltip>

                                    </Box>

                                    <Divider textAlign="left" sx={{
                                        height: '1px',
                                        backgroundColor:  "black" ,
                                        width: "50px"
                                    }} />


                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Tooltip title={tooltipText} arrow>
                                            <Box display={"flex"} flexDirection={"column"} sx={{ cursor: "pointer" }}
                                                onClick={handleCopyPhone}>
                                                <Typography gutterBottom variant='h2' textAlign={"left"} color={"black" }>Phone Number</Typography>
                                                <Typography gutterBottom variant='h3' textAlign={"left"} color={ "black" }>+91 8698828048</Typography>
                                            </Box>
                                        </Tooltip>

                                    </Box>

                                    <Divider textAlign="left" sx={{
                                        height: '1px',
                                        backgroundColor:  "black" ,
                                        width: "50px"
                                    }} />
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography gutterBottom variant='h2' textAlign={"left"} color={ "black" }>Place</Typography>
                                        <Typography gutterBottom variant='h3' textAlign={"left"} color={ "black" }>Pune, India</Typography>
                                    </Box>
                                    <Divider textAlign="left" sx={{
                                        height: '1px',
                                        backgroundColor:  "black" ,
                                        width: "50px"
                                    }} />
                                </Box>
                            </Box>

                            <Box>
                                {/* profile        */}
                                <Box display={"flex"} flexDirection={"column"} pb={ 2} >
                                    <Typography sx={{ textDecoration: "underline" }} gutterBottom textAlign={"left"} variant='h1rightsec'>Profile</Typography>
                                    <Typography textAlign={"left"} variant='contentrightsec'>Immediate Joiner | Front-End Developer | UI/UX Enthusiast

                                    </Typography>
                                    <Typography textAlign={"left"} variant='contentrightsec'>I’m a passionate front-End developer with a strong focus on UI/UX design and building scalable, high-performance web and mobile applications. I specialize in creating clean, user-friendly interfaces and seamless user experiences.
                                        With hands-on experience in both frontend and backend development, I combine technical skills with design thinking to craft intuitive, responsive, and efficient digital solutions. I'm available for immediate joining and eager to contribute to innovative projects and dynamic teams.</Typography>
                                </Box>

                                {/* education */}
                                <Box display={"flex"} pb={ 2 } textAlign={"left"} flexDirection={"column"} >
                                    <Typography sx={{ textDecoration: "underline" }} gutterBottom textAlign={"left"} variant='h1rightsec'>Education</Typography>
                                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>MSC(CA),Modern College of Arts, Commerce and Science,Pune</Typography>
                                            <Typography variant='contentrightsec'>October 2022 - January 2024</Typography>
                                            <Typography variant='contentrightsec'>9.2 CGPA</Typography>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>B.C.S, Modern College of Arts, Commerce and Science,Pune</Typography>
                                            <Typography variant='contentrightsec'>Jul, 2020 - Jul, 2022</Typography>
                                            <Typography variant='contentrightsec'>8.84 CGPA</Typography>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>HSC, Bharat English  School & Jr  College  Shivajinagar</Typography>
                                            <Typography variant='contentrightsec'>2018</Typography>
                                            <Typography variant='contentrightsec'>54.46 %</Typography>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>SSC,  Bharat English  School & Jr  College  Shivajinagar</Typography>
                                            <Typography variant='contentrightsec'>2016</Typography>
                                            <Typography variant='contentrightsec'>79.20%</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Projects */}
                                <Box display={"flex"} pb={ 2 } textAlign={"left"} flexDirection={"column"} >
                                    <Typography sx={{ textDecoration: "underline" }} gutterBottom textAlign={"left"} variant='h1rightsec'>Projects</Typography>
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography variant='contentheadingrightsec'>Online Shopping Website</Typography>
                                        <Typography variant='contentrightsec'>Created frontend of online shopping website by using HTML , CSS , JS</Typography>
                                    </Box>
                                </Box>

                                {/* Professional expiernce */}
                                <Box display={"flex"} pb={ 2 } textAlign={"left"} flexDirection={"column"} >
                                    <Typography sx={{ textDecoration: "underline" }} gutterBottom textAlign={"left"} variant='h1rightsec'>Professional Experience</Typography>
                                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>Junior Software Developer at Coditude</Typography>
                                            <Typography variant='contentrightsec'>Working on Reviewer Project based on ReactJS, NextJS, MUI, Redux, RTK Query</Typography>
                                            <Typography variant='contentrightsec'>(10 April 2024- present)</Typography>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>Intern at Coditude</Typography>
                                            <Typography variant='contentrightsec'>Working on following projects :-  Policy Application , E-cart , Artist-Application and based on HTML, CSS & JavaScript, ReactJS  and technical task based on JavaScript (promises , map-filter-reduce , async-await)</Typography>
                                            <Typography variant='contentrightsec'>(8 Jan 2024 - 8 April 2024)</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>


                            {/* skills */}
                            <Box display={"flex"} pt={2} pb={ 2 } flexDirection={"column"} gap={1}>
                                <Typography gutterBottom sx={{ textDecoration:  "underline"  }} variant={ "h1rightsec" } color={ "black" } textAlign={"left"}>Skills</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                        justifyContent: "flex-start",
                                        maxWidth: "400px",
                                    }}
                                >
                                    {skills.map((skill) => (
                                        <Chip
                                            key={skill}
                                            label={skill}
                                            sx={{
                                                background: "linear-gradient(135deg, #fc466b, #3f5efb)",
                                                color: "white",
                                                fontSize: "14px",
                                                padding: "10px 10px",
                                                fontFamily: "Poppins",
                                                borderRadius: "30px",
                                                cursor: "pointer",
                                                fontWeight: 500,
                                                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                                                "&:hover": {
                                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                                                },
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* Certification */}
                            <Box pb={ 2 }>
                                <Box display={"flex"} textAlign={"left"} flexDirection={"column"} >
                                    <Typography sx={{ textDecoration: "underline" }} gutterBottom textAlign={"left"} variant='h1rightsec'>Certification</Typography>
                                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>Pune Startup Fest , COEP</Typography>
                                            <Typography variant='contentrightsec'>ParentHook.Com , Company Representative</Typography>
                                            <Typography variant='contentrightsec'>(March,2023)</Typography>
                                        </Box>
                                        <Box display={"flex"} justifyContent={"space-between"}>
                                            <Box display={"flex"} flexDirection={"column"}>
                                                <Typography variant='contentheadingrightsec'>Core Java</Typography>
                                                <Typography variant='contentrightsec'>TCA(Techno Comp Academy)</Typography>
                                                <Typography variant='contentrightsec'>(Oct 2021)</Typography>
                                            </Box>
                                            <Box display={"flex"} flexDirection={"column"}>
                                                <Typography variant='contentheadingrightsec'>MS Office</Typography>
                                                <Typography variant='contentrightsec'>(Beginner to Advance)</Typography>
                                                <Typography variant='contentrightsec'>(Jan 2021)</Typography>
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>

                            {/* extra acitivities */}
                            <Box  pb={ 2 }>
                                <Box display={"flex"} textAlign={"left"} flexDirection={"column"} >
                                    <Typography sx={{ textDecoration: "underline" }} gutterBottom textAlign={"left"} variant='h1rightsec'>Extra-Curricular Activities</Typography>
                                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>Participation in College level activities</Typography>
                                            <Typography variant='contentrightsec'>Volunteer at college interaction for PPT presentation A.I Software</Typography>
                                            <Typography variant='contentrightsec'>Participate in V-LABS coding round</Typography>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"}>
                                            <Typography variant='contentheadingrightsec'>Fashion Model</Typography>
                                            <Typography variant='contentrightsec'>2023 Calendar Shoot</Typography>
                                            <Typography variant='contentrightsec'>Miss Vision of Maharashtra 2nd Runner up</Typography>
                                            <Typography variant='contentrightsec'>महाराष्ट्राची लावण्य सुंदरी 1st Runner up</Typography>
                                            <Typography variant='contentrightsec'>Kala- Sarwada Fashion Walk Winner</Typography>
                                            <Typography variant='contentrightsec'>Allveera Motion  Entertainment and Fashion Super Model.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>


                            {/* hobbies */}
                            <Box display={"flex"} flexDirection={"column"} gap={1} pt={2} pb={ 2 }>
                                <Typography gutterBottom sx={{ textDecoration:  "underline"  }} variant={ "h1rightsec" } color={ "black" } textAlign={"left"}>Hobbies</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                        justifyContent: "flex-start",
                                        maxWidth: "400px",
                                    }}
                                >
                                    {hobbies.map((hobby) => (
                                        <Chip
                                            key={hobby}
                                            label={hobby}
                                            sx={{
                                                background: "linear-gradient(135deg, #fc466b, #3f5efb)",
                                                color: "white",
                                                fontSize: "15px",
                                                fontFamily: "Poppins",
                                                padding: "10px 10px",
                                                borderRadius: "30px",
                                                cursor: "pointer",
                                                fontWeight: 500,
                                                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                                                "&:hover": {
                                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                                                },
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* personal information */}
                            <Box display={"flex"} flexDirection={"column"} gap={1} pt={2}>
                                <Typography gutterBottom sx={{ textDecoration:  "underline"  }} variant={ "h1rightsec" } color={"black" } textAlign={"left"}>Personal Information</Typography>
                                <Box display={"flex"} flexDirection={"column"} gap={1.5}>
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography gutterBottom variant='h2' textAlign={"left"} color={ "black" }>DOB</Typography>
                                        <Typography gutterBottom variant='h3' textAlign={"left"} color={ "black" }>01-01-2001</Typography>
                                    </Box>
                                    <Divider textAlign="left" sx={{
                                        height: '1px',
                                        backgroundColor:  "black" ,
                                        width: "50px"
                                    }} />
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography gutterBottom variant='h2' textAlign={"left"} color={ "black"}>Marital Status</Typography>
                                        <Typography gutterBottom variant='h3' textAlign={"left"} color={ "black"}>Single</Typography>
                                    </Box>
                                    <Divider textAlign="left" sx={{
                                        height: '1px',
                                        backgroundColor:  "black",
                                        width: "50px"
                                    }} />
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography gutterBottom variant='h2' textAlign={"left"} color={"black"}>Place</Typography>
                                        <Typography gutterBottom variant='h3' textAlign={"left"} color={"black"}>Pune, India</Typography>
                                    </Box>
                                    <Divider textAlign="left" sx={{
                                        height: '1px',
                                        backgroundColor:  "black" ,
                                        width: "50px"
                                    }} />
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Typography gutterBottom variant='h2' textAlign={"left"} color={"black"}>Language Known</Typography>
                                        <Typography gutterBottom variant='h3' textAlign={"left"} color={"black"}>Marathi, Hindi, English</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                    {/* right section */}
                    <Box textAlign={"left"} px={4} py={ 2 } display={"flex"} flexDirection={"column"} gap={3}>

                        {/* declration */}
                        <Box display={"flex"} flexDirection={"column"} >
                            <Typography gutterBottom textAlign={"left"} variant='h1rightsec'>Declaration</Typography>
                            <Box display={"flex"} flexDirection={"column"} gap={2}>
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Typography variant='contentheadingrightsec'>I hereby declare that above mentioned information is true and genuine to my  knowledge.</Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* sign */}
                        <Box display={"flex"} flexDirection={"column"} pt={3}>
                            <Typography gutterBottom textAlign={"right"} variant='h1rightsec'>Sign</Typography>
                            <Box display={"flex"} flexDirection={"column"} gap={2}>
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Typography textAlign={"right"} variant='contentheadingrightsec'>Nikita Ravindra Wanve</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default ResumeMobileView