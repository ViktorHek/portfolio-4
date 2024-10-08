function AlignAnimation({ type }) {
  switch (type) {
    case "left":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="6.5"
            width="15"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="12.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="18.5"
            width="15"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
        </svg>
      );
    case "center":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.5"
            y="6.5"
            width="15"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="12.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="5.5"
            y="18.5"
            width="15"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
        </svg>
      );
    case "right":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10.5"
            y="6.5"
            width="15"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="12.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="10.5"
            y="18.5"
            width="15"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
        </svg>
      );
    case "strech":
      return (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="6.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="12.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="18.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="3"
            rx="1.5"
            fill="#070425"
            stroke="black"
          />
        </svg>
      );
    default:
      break;
  }
}

export default AlignAnimation;
