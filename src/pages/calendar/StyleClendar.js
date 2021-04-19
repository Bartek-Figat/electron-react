import calendarHeaderSummerImage from '../../img/calendar/summer.jpg';
import calendarHeaderSpringImage from '../../img/calendar/spring.jpg';
import calendarHeaderAutumnImage from '../../img/calendar/autumn.jpg';
import calendarHeaderWinterImage from '../../img/calendar/winter.jpg';
export const styleCalendar = {
  main: {},
  calendarHeader: {
    display: 'flex',
    flex: '1',
    height: '20vh',
    backgroundImage: `url(${calendarHeaderSummerImage})`,
    backgroundPosition: '0 10%',
    backgroundRepeat: 'no-repeat',
  },
};

const calendarMoth = [
  {
    '&.Jan': {
      backgroundImage: "url('/assets/images/calendar/winter.jpg')",
      backgroundPosition: '0 85%',
    },
    '&.Feb': {
      backgroundImage: "url('/assets/images/calendar/winter.jpg')",
      backgroundPosition: '0 85%',
    },
    '&.Mar': {
      backgroundImage: "url('/assets/images/calendar/spring.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Apr': {
      backgroundImage: "url('/assets/images/calendar/spring.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.May': {
      backgroundImage: "url('/assets/images/calendar/spring.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Jun': {
      backgroundImage: "url('/assets/images/calendar/summer.jpg')",
      backgroundPosition: '0 80%',
    },
    '&.Jul': {
      backgroundImage: "url('/assets/images/calendar/summer.jpg')",
      backgroundPosition: '0 80%',
    },
    '&.Aug': {
      backgroundImage: "url('/assets/images/calendar/summer.jpg')",
      backgroundPosition: '0 80%',
    },
    '&.Sep': {
      backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Oct': {
      backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Nov': {
      backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
      backgroundPosition: '0 40%',
    },
    '&.Dec': {
      backgroundImage: "url('/assets/images/calendar/winter.jpg')",
      backgroundPosition: '0 85%',
    },
  },
];

const useMonthStyleImag = (id, image, position) => {};
