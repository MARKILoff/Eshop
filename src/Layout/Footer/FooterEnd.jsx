import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const FooterEnd = () => {
    return (
        <>
            <div className="grid grid-cols-3 p-5">
                <div></div>
                <div className="flex justify-between">
                    <a href="https://facebookIcon.com" target="_blank"><FacebookIcon className="text-blue-900 cursor-pointer" /></a>
                    <a href="https://twitterIcon.com" target="_blank"><TwitterIcon className="text-blue-600 cursor-pointer" /></a>
                    <a href="https://pinterestIcon.com" target="_blank"><PinterestIcon className="text-green-900 cursor-pointer" /></a>
                    <a href="https://youTubeIcon" target="_blank"><YouTubeIcon className="text-red-700 cursor-pointer" /></a>
                    <a href="https://InstagramIcon" target="_blank"><InstagramIcon className="text-pink-500 cursor-pointer" /></a>
                </div>
                <div></div>
            </div>
            <hr />
        </>
    )
};

export default FooterEnd;