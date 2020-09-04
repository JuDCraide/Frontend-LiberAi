import React from "react";

import Video from "../Video";
import ContentInfo from "../ContentInfo";

import CourseContainer from "./style";

function Course({ style, status, bgc, inactive, done, points, hours, backgroundImage, title, autor }) {
    return (

        <CourseContainer style={style}>
            <Video
                status={status}
                bgc={bgc}
                inactive={inactive}
                done={done}
                points={points}
                hours={hours}
                backgroundImage={backgroundImage}
            />
            <ContentInfo
                title={title}
                autor={autor}
            />
        </CourseContainer>
    );
}

export default Course;