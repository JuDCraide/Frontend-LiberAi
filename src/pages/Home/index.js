import React, { useState, useEffect } from "react";

import HomeStyle, { ImageContainer, MidColumn, ContentStyle } from "./styles";
import HorizontalContainer from "../../components/MainContent/HorizontalContainer";
import Course from "../../components/MainContent/Course";
import Quizz from "../../components/MainContent/Quizz";
import SpotlightVideo from "../../components/MainContent/SpotlightVideo";
//import BattleContainer from "../../components/BattleContainer";
import { Text18Regular } from "../../components/Text";
import Container from "../../components/Container";
import RadialProgressBar from "../../components/UserInfo/RadialProgressBar"
import ProfileMenu from "../../components/UserInfo/ProfileMenu";
import ProfileInfo from "../../components/UserInfo/ProfileInfo";
import NextLevelInfo from "../../components/UserInfo/NextLevelInfo";
import Lesson from '../../components/UserInfo/Lesson';
import LessonsContainer from '../../components/UserInfo/LessonsContainer';
//import Divider from '../../components/Divider';

import logoImg from "../../assets/logo.png";
//import profileImg from "../../assets/AndressaProfile.jpg";
import RankContainer from "../../components/SecondaryContent/RankContainer";
import Rank from "../../components/SecondaryContent/Rank";
//import LastGrup from "../../components/SecondaryContent/LastGrup";

import api from '../../services/api';
import { getId } from '../../services/auth'

function Home() {

    const [myUser, setMyUser] = useState({});
    const [myLevel, setMyLevel] = useState({});
    const [nextLevel, setNextLevel] = useState({});
    const [activities, setActivities] = useState([]);
    const [Users, setUsers] = useState([]);
    const nVideos = activities.filter(activity => activity.type === 'video').length;
    const videos = activities.filter(activity => activity.type === 'video');
    const nCourses = activities.filter(activity => activity.type === 'curso').length;
    const courses = activities.filter(activity => activity.type === 'curso');
    const nQuizes = activities.filter(activity => activity.type === 'quiz').length;
    const quizes = activities.filter(activity => activity.type === 'quiz');
    const random = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

    const percentage = Math.floor((myUser.score - (myUser.level * 100)) / ((myUser.level + 1)))
    console.log(quizes, myUser, myUser.score % ((myUser.level + 1) * 100));

    useEffect(async() => {
        //let id = "5f56a5253120b20017bc6f0f";
        let id = await getId();
        api.get(`/users/${id}`)
            .then(res => {
                setMyUser(res.data)
                //console.log(res.data);
            })

    }, [])

    useEffect(() => {

        api.get(`/levels/`)
            .then(res => {
                setMyLevel({
                    ...res.data[myUser.level],
                    id: myUser.level + 1,
                })
                setNextLevel({
                    ...res.data[myUser.level + 1],
                    id: myUser.level + 2,
                })
                //console.log(res.data[myUser.level+1]);
            })

    }, [myUser])

    useEffect(() => {

        api.get(`/activities/`)
            .then(res => {
                setActivities(res.data)
                //console.log(res.data);
            })

    }, []);

    useEffect(() => {

        api.get(`/users/`)
            .then(res => {
                setUsers(res.data.filter(user => user.level === myUser.level))
                //console.log(res.data.filter(user => user.level === myUser.level));
            })

    }, [myUser]);

    async function updatePoints(points, activityId) {
        let user = { ...myUser };
        let userActivities = [...myUser.activities]
        //console.log(myUser);
        if (user.score + points - (myUser.level * 100) >= (myUser.level + 1)*100) {
            console.log('passou nivel');
            user.level += 1;
        }
        user.score += points;
        userActivities.push(activityId);
        user.activities = userActivities;
        console.log(myUser, user, quizes, activityId);

        api.put(`/users/${user._id}`, user)
            .then(res => {
                setMyUser(user)
            })
            .catch(err => console.log(err))

    }

    return (
        <HomeStyle>
            <div>
                <Container style={{ maxHeight: 'calc(100vh - 60px)' }}>
                    <div style={{ display: "flex" }}>
                        <RadialProgressBar
                            percentage={percentage}
                            src={myUser.profileImage}
                            alt={`${myUser.name} profile Image`}
                        />
                        <ProfileMenu />
                    </div>
                    <ProfileInfo
                        name={myUser.name}
                        level={myUser.level + 1}
                        levelName={myLevel.title}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowX: 'auto' }}>
                        <NextLevelInfo
                            nextLevel={myUser.level + 2}
                            prize={nextLevel.bankPrize}
                        />

                        <LessonsContainer
                            title='Lições Mandatórias de fase'
                        >
                            {
                                activities.length !== 0 &&
                                !isNaN(nextLevel.id) &&
                                Object.keys(nextLevel).length !== 0 &&
                                Object.keys(myUser).length !== 0 &&
                                activities.map(activity => {
                                    //console.log(nextLevel.mandatoryActivities, activity._id);
                                    if (nextLevel.mandatoryActivities.includes(activity._id)) {
                                        return (
                                            <Lesson
                                                key={activity._id}
                                                done={myUser.activities.includes(activity._id)}
                                                tag={activity.type}
                                                time={`${activity.time} min`}
                                                points={`+${activity.score}pts`}
                                                title={activity.title}
                                                subtitle={`com ${activity.teacher}`}
                                            />
                                        )
                                    }
                                    return null;
                                })/**/
                            }

                        </LessonsContainer>
                    </div>
                </Container>
            </div>

            <ContentStyle>

                <div>
                    <ImageContainer>
                        <div>
                            <img src={logoImg} alt="LiberAí" />
                        </div>
                        <Text18Regular style={{ textTransform: "capitalize" }}>
                            A liberdade financeira na sua mão
                    </Text18Regular>
                    </ImageContainer>

                    <HorizontalContainer mainTitle="Nossos Cursos">
                        {
                            nCourses !== 0 &&
                            !isNaN(nextLevel.id) &&
                            Object.keys(nextLevel).length !== 0 &&
                            Object.keys(myUser).length !== 0 &&
                            random.map((num, index) => (
                                <Course
                                    key={index}
                                    inactive={courses[Math.floor(num * nCourses)].levelRequired > myUser.level + 1}
                                    done={myUser.activities.includes(courses[Math.floor(num * nCourses)].id)}
                                    status={nextLevel.mandatoryActivities.includes(courses[Math.floor(num * nCourses)]) ? 'Obrigatório' : 'Opcional'}
                                    points={`+${courses[Math.floor(num * nCourses)].score}pts`}
                                    hours={`${courses[Math.floor(num * nCourses)].time} min`}
                                    backgroundImage={courses[Math.floor(num * nCourses)].image}
                                    title={courses[Math.floor(num * nCourses)].title}
                                    autor={courses[Math.floor(num * nCourses)].teacher}
                                />
                            ))
                        }

                    </HorizontalContainer>

                    <MidColumn>
                        {nQuizes !== 0 &&
                            <Quizz
                                title={quizes[Math.floor(random[5] * nQuizes)].title}
                                points={`+${quizes[Math.floor(random[5] * nQuizes)].score}pts`}
                                funct={() => updatePoints(quizes[Math.floor(random[5] * nQuizes)].score, quizes[Math.floor(random[5] * nQuizes)]._id)}
                            />
                        }
                        {nVideos !== 0 &&
                            //console.log(nVideos) &&
                            <SpotlightVideo
                                title={videos[Math.floor(random[5] * nVideos)].title}
                                autor={videos[Math.floor(random[5] * nVideos)].teacher}
                                points={`+${videos[Math.floor(random[5] * nVideos)].score}pts`}
                                hours={`${videos[Math.floor(random[5] * nVideos)].time} min`}
                                img={videos[Math.floor(random[5] * nVideos)].image}
                            />
                        }
                    </MidColumn>

                    <HorizontalContainer mainTitle="Nossos Vídeos">
                        {
                            nVideos !== 0 &&
                            !isNaN(nextLevel.id) &&
                            Object.keys(nextLevel).length !== 0 &&
                            Object.keys(myUser).length !== 0 &&
                            random.map((num, index) => (
                                <Course
                                    key={index}
                                    inactive={videos[Math.floor(num * nVideos)].levelRequired > myUser.level + 1}
                                    done={myUser.activities.includes(videos[Math.floor(num * nVideos)].id)}
                                    status={nextLevel.mandatoryActivities.includes(videos[Math.floor(num * nVideos)]) ? 'Obrigatório' : 'Opcional'}
                                    points={`+${videos[Math.floor(num * nVideos)].score}pts`}
                                    hours={`${videos[Math.floor(num * nVideos)].time} min`}
                                    backgroundImage={videos[Math.floor(num * nVideos)].image}
                                    title={videos[Math.floor(num * nVideos)].title}
                                    autor={videos[Math.floor(num * nVideos)].teacher}
                                />
                            ))
                        }
                    </HorizontalContainer>
                </div>

                <div>
                    <RankContainer style={{ position: 'sticky', top: 0, }}>
                        {/*<LastGrup
                            lastGrup='Os Bagunceiros'              //Users.length
                        />*/}
                        <Rank alunos={Users}
                            myId={myUser._id}                   //myUser.id
                        />
                    </RankContainer>
                </div>
            </ContentStyle>
        </HomeStyle>
    );
}

export default Home;
