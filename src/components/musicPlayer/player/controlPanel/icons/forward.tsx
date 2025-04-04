import { PATH_CONFIG } from "../../consts/pathConfig";

export const ForwardIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="white" className="w-6" id="icon">
      <path
        d="M 2 6
            V 18
            C 3 21 5 20 18 15
            C 21 14 21 12 18 10.5
            C 5 4 3 3 2 6
            "
        {...PATH_CONFIG}
        fill="white"
      >
        <animateTransform
          id="hit"
          attributeName="transform"
          type="translate"
          to="2,0"
          dur="0.1s"
          fill="freeze"
          begin="icon.click"
        />
        <animateTransform
          id="hit"
          attributeName="transform"
          type="translate"
          to="0,0"
          dur="0.1s"
          fill="freeze"
          begin="hit.end"
        />
      </path>
      <path
        d="M 24 8
          C 24 11 24 16 24 18"
        {...PATH_CONFIG}
        strokeWidth="1.5"
      >
        <animate
          attributeName="d"
          id="bend"
          to="M 24 8
              C 28 11 28 16 24 18"
          begin="hit.end"
          dur="0.1s"
          fill="freeze"
        />
        <animate
          attributeName="d"
          to="M 24 8
          C 24 11 24 16 24 18"
          dur="0.1s"
          fill="freeze"
          begin="bend.end"
        />
      </path>
    </svg>
  );
};
