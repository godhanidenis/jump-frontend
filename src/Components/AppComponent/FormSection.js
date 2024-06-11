import React from "react";
import LogoCarousel from "./LogoCarousel";
import { FormInputField } from "../CustomFormFields";
import { useForm } from "react-hook-form";
import { CustomFormSelect } from "../CustomFormSelect";

const FormSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      company_email: "",
      company_size: "",
      marketing_challenges: [],
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Data -->!", data);
      if (data.company_size === "50+") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "size50plus",
          employeeSize: data.company_size,
        });
      }

      const urlParams = new URLSearchParams(window.location.search);
      const dataWithUrlParams = {
        ...data,
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
      };

      await fetch("https://hooks.zapier.com/hooks/catch/19123535/2o6gibp/", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(dataWithUrlParams),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error("Error Occurred !!", e);
    }
  };

  const onError = (errors) => console.log("Errors Occurred !! :", errors);

  return (
    <div className="lg:w-[40%] w-full md:pr-5 flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <span className="text-[#fff] text-[18px] not-italic font-normal leading-[28px]">
          What is your name?
        </span>
        <FormInputField
          type="text"
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          placeholder="i.e John Ford"
        />
        {errors?.name && (
          <p className="text-[#FF0000] font-semibold text-[12px]">
            {errors?.name?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[#fff] text-[18px] not-italic font-normal leading-[28px]">
          What is your company email?
        </span>
        <FormInputField
          type="email"
          name="company_email"
          control={control}
          rules={{
            required: "Company email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          }}
          placeholder="Type your answer"
        />
        {errors?.company_email && (
          <p className="text-[#FF0000] font-semibold text-[12px]">
            {errors?.company_email?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[#fff] text-[18px] not-italic font-normal leading-[28px]">
          How large is your company?
        </span>
        <CustomFormSelect
          name="company_size"
          control={control}
          rules={{ required: "Company size is required" }}
          placeholder="Total Employee Size"
          options={["0-10", "10-25", "25-49", "50+"]}
        />
        {errors?.company_size && (
          <p className="text-[#FF0000] font-semibold text-[12px]">
            {errors?.company_size?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[#fff] text-[18px] not-italic font-normal leading-[28px]">
          Current Marketing Challenges
        </span>
        <CustomFormSelect
          name="marketing_challenges"
          control={control}
          rules={{ required: "Marketing Challenges is required" }}
          placeholder="Choose multiple options"
          multiple
          options={[
            "Difficulty in attracting new customers",
            "Limited brand recognition",
            "Low volume of high-quality leads",
            "Ineffective lead generation strategies",
          ]}
        />
        {errors?.marketing_challenges && (
          <p className="text-[#FF0000] font-semibold text-[12px]">
            {errors?.marketing_challenges?.message}
          </p>
        )}
      </div>
      <div className="w-auto sm:mx-[25px] mt-5 md:mt-[55.5px]">
        <button
          className="w-full rounded-[5px] text-[#32327A] text-center text-[15px] not-italic font-normal leading-[60px] hover:scale-95 transition-all duration-300"
          style={{
            background:
              "var(--yellow-peach, linear-gradient(90deg, #FFC958 0%, #FE7B94 100%))",
          }}
          onClick={handleSubmit(onSubmit, onError)}
        >
          VIEW THE PMAX OPTIMIZATION BIBLE
        </button>
      </div>

      <LogoCarousel />
    </div>
  );
};

export default FormSection;
