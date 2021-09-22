// log the pageview with their URL
export const pageview = (url: string): void => {
  if (process.env.NODE_ENV === 'development') return;
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

interface EventProps {
  action: string;
  params: string;
}

// log specific events happening.
export const event = ({ action, params }: EventProps): void => {
  if (process.env.NODE_ENV === 'development') return;
  window.gtag('event', action, params);
};
