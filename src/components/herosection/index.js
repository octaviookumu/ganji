import React, { useState } from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroTitle,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg
                        autoPlay
                        loop
                        muted
                        src={Video}
                        type='video/mp4'
                    ></VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroTitle>Virtual Banking Made Easy</HeroTitle>
                    <HeroP>
                        Sign up for a new account today and receive $250 in
                        credit towards your next payment
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                        >
                            Get started
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    );
};

export default Hero;
