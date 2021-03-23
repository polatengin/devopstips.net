import React from 'react';

import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share';

import { FacebookLogoIcon, TwitterIcon, LinkedInLogoIcon, RedditLogoIcon, WhatsAppLogoIcon } from './icons';

export const Share = ({ socialConfig, tags }) => (
  <div className="flex justify-between border-t py-4 text-gray-800 dark:text-gray-50">
    <div className="border border-gray-400 rounded-full py-1 px-3 flex items-stretch">
      <FacebookShareButton url={socialConfig.config.url} className="flex items-center outline-none focus:outline-none">
        <FacebookLogoIcon className="w-4 h-4 mr-1" />
        <span>Share</span>
        <span className="hidden lg:inline whitespace-nowrap ml-1">on Facebook</span>
      </FacebookShareButton>
    </div>
    <div className="border border-gray-400 rounded-full py-1 px-3">
      <TwitterShareButton url={socialConfig.config.url} className="flex items-center outline-none focus:outline-none" title={socialConfig.config.title} via="devops_tips" hashtags={tags} >
        <TwitterIcon className="w-4 h-4 mr-1 text-blue-500" />
        <span>Share</span>
        <span className="hidden lg:inline whitespace-nowrap ml-1">on Twitter</span>
      </TwitterShareButton>
    </div>
    <div className="border border-gray-400 rounded-full py-1 px-3">
      <LinkedinShareButton url={socialConfig.config.url} className="flex items-center outline-none focus:outline-none" title={socialConfig.config.title} >
        <LinkedInLogoIcon className="w-4 h-4 mr-1" />
        <span>Share</span>
        <span className="hidden lg:inline whitespace-nowrap ml-1">on LinkedIn</span>
      </LinkedinShareButton>
    </div>
    <div className="border border-gray-400 rounded-full py-1 px-3">
      <RedditShareButton url={socialConfig.config.url} className="flex items-center outline-none focus:outline-none" title={socialConfig.config.title} >
        <RedditLogoIcon className="w-4 h-4 mr-1" />
        <span>Share</span>
        <span className="hidden lg:inline whitespace-nowrap ml-1">on Reddit</span>
      </RedditShareButton>
    </div>
    <div className="border border-gray-400 rounded-full py-1 px-3">
      <WhatsappShareButton url={socialConfig.config.url} className="flex items-center outline-none focus:outline-none" title={socialConfig.config.title} >
        <WhatsAppLogoIcon className="w-4 h-4 mr-1" />
        <span>Share</span>
        <span className="hidden lg:inline whitespace-nowrap ml-1">on WhatsApp</span>
      </WhatsappShareButton>
    </div>
  </div>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};
