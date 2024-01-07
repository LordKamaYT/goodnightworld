import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';
import { LandingPage } from './LandingPage/LandingPage.js';

interface Props {
  className?: string;
}
/* @figmaId 19:32 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <LandingPage />
    </div>
  );
});
