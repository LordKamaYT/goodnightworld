import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BubblesFrameIcon } from './BubblesFrameIcon.js';
import { InstagramIcon } from './InstagramIcon.js';
import classes from './LandingPage.module.css';
import { LogoIcon } from './LogoIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 13:3 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.bubblesFrame}>
        <BubblesFrameIcon className={classes.icon} />
      </div>
      <div className={classes.header}></div>
      <div className={classes.buttonGitHub}></div>
      <div className={classes.viewTheProject}>View the project</div>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon2} />
      </div>
      <div className={classes.githubLogo2}></div>
      <div className={classes.instagram}>
        <InstagramIcon className={classes.icon3} />
      </div>
      <div className={classes.headline}>A project ran by Kama, to destroy everything...</div>
      <div className={classes.description}>
        The first Neural Network having a working environment and being simulated on a website. Because YOU are the
        master of our code.
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
    </div>
  );
});
