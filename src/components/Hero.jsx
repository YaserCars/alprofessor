import CustomButton from "./CustomButton";
import { TextGenerateEffect } from "../ui/TextGenerationEffect";

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto">
            <div className="flex-1 pt-36 px-6 sm:px-16">
                <TextGenerateEffect
                    words="Safe Driving Starts with a Safe Vehicle"
                    className="font-extrabold" />
                <p className="font-light text-[27px] mt-5 text-black-100">
                    Comprehensive Car Inspections in Abu Dhabi. Schedule Your Inspection Today.
                </p>
                <div className="flex gap-4 mt-10">
                    <a href="https://maps.app.goo.gl/pCJaz6oGmEgim6gk6" target="_blank" rel="noopener noreferrer">
                        <CustomButton title="Visit Us"
                            buttonStyle="bg-primary-blue cursor-default text-white rounded-full" />
                    </a>
                    <a href="https://wa.me/00971561868236?text=I'd%20like%20to%20book%20an%20inspection%20for%20my%20vehicle." target="_blank" rel="noopener noreferrer">
                        <CustomButton title="Book Inspection"
                            buttonStyle="bg-gray-400 cursor-default text-white rounded-full" />
                    </a>
                </div>
            </div>

            <div className="flex xl:flex-[1.5] justify-end items-end xl:h-screen w-full">
                <div className="relative z-0 xl:w-full w-[90%] h-[590px] xl:h-full">
                    <img src='https://multienergyportal.com/wp-content/uploads/2024/02/ls-MPE-DTP7500-320DV-title-02.png' alt="hero" className="object-contain w-full h-full" />
                </div>
                <div className="bg-hero-bg absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
            </div>
        </div>
    );
}

export default Hero;
