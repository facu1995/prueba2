import style from "./ZeusIcon.module.css"

interface Props {
  className?: string
  onClick?: () => void
}

const ZeusIcon = ({ className = "", onClick }: Props) => {
  return (
    <>
      <svg
        className={`${className ? className : style.default}`}
        viewBox="0 0 193 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.49505 13.9615C1.13534 12.3085 0.838189 10.6325 0.606164 8.93616C0.206431 6.01365 0 3.0306 0 0H131.278L178.673 66.0844H66.8594C34.7724 66.0844 7.97692 43.7482 1.49505 13.9615ZM151.481 52.1229H66.8594C42.4474 52.1229 22.0469 35.8727 15.876 13.9615H124.113L151.481 52.1229Z"
          fill="url(#paint0_linear_0_108)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M191.089 162.288C191.43 163.897 191.713 165.528 191.936 167.179C192.336 170.137 192.542 173.157 192.542 176.225L61.2636 176.225L13.8694 109.325L125.683 109.325C157.839 109.325 184.681 132.035 191.089 162.288ZM40.8411 123.262L125.683 123.262C150.062 123.262 170.626 139.789 176.736 162.288L68.4877 162.288L40.8411 123.262Z"
          fill="url(#paint1_linear_0_108)"
        />
        <path
          d="M56.9004 70.9796C56.9004 70.9796 86.5436 75.7508 88.9287 109.325L13.8699 109.325L56.9004 70.9796Z"
          fill="url(#paint2_linear_0_108)"
        />
        <path
          d="M135.643 105.245C135.643 105.245 105.999 100.373 103.614 66.0844L178.673 66.0844L135.643 105.245Z"
          fill="url(#paint3_linear_0_108)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_108"
            x1="-2.39925"
            y1="2.7198"
            x2="178.589"
            y2="66.8759"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6A00A7" />
            <stop offset="1" stopColor="#00CDCD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_108"
            x1="192.542"
            y1="176.261"
            x2="13.4471"
            y2="109.976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6A00A7" />
            <stop offset="1" stopColor="#00CDCD" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_108"
            x1="51.3993"
            y1="109.325"
            x2="51.3993"
            y2="70.9796"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#002955" />
            <stop offset="1" stopColor="#00CDCD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_0_108"
            x1="141.144"
            y1="66.0844"
            x2="141.144"
            y2="105.245"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#002955" />
            <stop offset="1" stopColor="#00CDCD" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default ZeusIcon
