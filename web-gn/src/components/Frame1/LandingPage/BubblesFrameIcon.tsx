import { memo, SVGProps } from 'react';

const BubblesFrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1440 810' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_25_133)'>
      <circle cx={55.2188} cy={570.469} r={148.219} fill='#181818' />
      <circle cx={1325.44} cy={810.188} r={296.438} fill='#181818' />
      <circle cx={1172.86} cy={-0.140625} r={74.1094} fill='#181818' />
      <circle cx={457.359} cy={155.859} r={142.5} fill='#181818' />
    </g>
    <defs>
      <clipPath id='clip0_25_133'>
        <rect width={1440} height={810} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(BubblesFrameIcon);
export { Memo as BubblesFrameIcon };
