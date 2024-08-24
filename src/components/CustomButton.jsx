import { MouseEventHandler } from "react";

const CustomButton = ({
  title,
  buttonStyle,
  btnType,
  clickHandler,
  isDisabled,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${buttonStyle}`}
      type={btnType}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <img src={rightIcon} alt="arrow-left" className="object-contain w-full h-full"/>
        </div>
      )}
    </button>
  );
}

export default CustomButton;
