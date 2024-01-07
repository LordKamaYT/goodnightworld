import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.9945 2.07369e-05C18.2979 -0.00490182 12.7856 2.0722 8.44549 5.85916C4.10535 9.64612 1.22097 14.8954 0.309152 20.6666C-0.602667 26.4377 0.517668 32.3535 3.46942 37.3539C6.42117 42.3544 11.0114 46.1127 16.4177 47.9555C17.6136 48.1683 17.9933 47.4471 17.9933 46.7976C17.9933 46.2086 18.0064 44.5781 17.9933 42.5199C11.3222 44.0025 9.94515 39.2769 9.94515 39.2769C9.50484 37.7894 8.56046 36.5128 7.2828 35.6777C5.10708 34.1503 7.44647 34.1794 7.44647 34.1794C8.2062 34.2867 8.93203 34.5706 9.56854 35.0096C10.2051 35.4486 10.7354 36.031 11.1192 36.7125C11.4439 37.3194 11.8827 37.8543 12.41 38.2863C12.9374 38.7182 13.5429 39.0386 14.1917 39.229C14.8404 39.4193 15.5194 39.4758 16.1896 39.3952C16.8597 39.3147 17.5076 39.0986 18.0959 38.7595C18.2059 37.5154 18.7454 36.3526 19.6169 35.4806C14.2944 34.8558 8.6969 32.7483 8.6969 23.3148C8.66307 20.87 9.5477 18.5056 11.1672 16.7123C10.4334 14.5909 10.517 12.262 11.4007 10.2017C11.4007 10.2017 13.4171 9.54095 17.9911 12.728C21.9215 11.6216 26.0697 11.6216 30.0001 12.728C34.5872 9.54319 36.5862 10.2017 36.5862 10.2017C37.47 12.2621 37.5551 14.5914 36.824 16.7123C38.444 18.5068 39.3273 20.8733 39.29 23.3193C39.29 32.7774 33.6838 34.8535 28.3438 35.4582C28.9179 36.0499 29.3615 36.7612 29.6446 37.5441C29.9277 38.3269 30.0438 39.163 29.9848 39.9958V46.8066C29.9848 47.465 30.3711 48.1929 31.5888 47.9533C36.9949 46.1088 41.5843 42.3488 44.5347 37.347C47.485 32.3452 48.6034 26.4287 47.6894 20.6575C46.7755 14.8864 43.8889 9.63791 39.547 5.85256C35.205 2.06721 29.6916 -0.00756672 23.9945 2.07369e-05Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
