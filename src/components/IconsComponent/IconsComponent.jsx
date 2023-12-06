import React from "react";
import { IconsComponentStyled } from "./IconsComponent.styled";
import { Icon } from "@iconify/react";

export const IconsComponent = () => {
  return (
    <IconsComponentStyled>
      <div>
        <Icon
          icon="fluent:drink-wine-20-regular"
          style={{ fontSize: "4em", position: "absolute", top: "-15%" }}
        />
        <Icon
          icon="ep:cold-drink"
          style={{ fontSize: "4em", position: "absolute", left: "21%" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="144"
          height="144"
          viewBox="0 0 144 144"
          fill="none"
        >
          <circle cx="72" cy="72" r="72" fill="#FFDE59" fillOpacity="0.5" />
        </svg>
        <svg
          style={{ position: "absolute", right: "5em", bottom: "1em" }}
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
        >
          <circle
            cx="21.5"
            cy="21.5"
            r="21.5"
            fill="#FFDE59"
            fillOpacity="0.7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", right: "2em", bottom: "4em" }}
          width="20"
          height="20"
          viewBox="0 0 43 43"
          fill="none"
        >
          <circle
            cx="21.5"
            cy="21.5"
            r="21.5"
            fill="#FFDE59"
            fillOpacity="0.7"
          />
        </svg>
      </div>
    </IconsComponentStyled>
  );
};
