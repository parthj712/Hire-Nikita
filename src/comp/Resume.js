import { keyframes,  useMediaQuery, useTheme } from '@mui/material'
import ResumeMobileView from './ResumeMobileView';
import ResumeWebView from './ResumeWebView';



const Resume = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            {isMobile ? (
                <ResumeMobileView/>
            ) : (
                <ResumeWebView/>
            )}
        </>
    )
}

export default Resume