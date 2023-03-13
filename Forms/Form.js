import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
function Form() {
  const defaultValues = {
    firstName: "sashank",
    lastName: "",
    chekbox: false,
    gender: "",
    input: ""
  };
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("hyfhygggujugjugug")
      .max(15, "max length")
      .min(2, "minlength"),
    lastName: yu
      .string()
      .required("enter name")
      .max(15, "max length")
      .min(5, "minlength"),
    input: yup
      .string()
      .required("enter name")
      .max(15, "max length")
      .min(5, "minlength"),
    checkbox: yup.bool().oneOf([true], "checkbox error"),
    gender: yup.string().required()
  });

  const {
    control,
    register,
    watch,
    setValue,
    getValues,
    formState,
    trigger,
    formState: {
      isDirty,
      touchedFields,
      dirtyFields,
      isValidating,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      errors
    },
    reset,
    ...methods
  } = useForm({
    defaultValues,
    mode: "onBlur",
    //resolver: //yupResolver(validationSchema)
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("came heres");
      //reset({ firstName: "", lastName: "" });
      reset({ ...getValues(), lastName: "x" });

      /**to partilly reset fields use ...getValues function and reset other fields */
    }
  }, [isSubmitSuccessful, reset, getValues]);
  // const { errors } = formState;
  const save = (formValues) => {
    console.log(formValues, { ...errors }, methods, "get", getValues());
    // it wont re render if shouldtouch is not passed
    setValue("input", "sashank", { shouldtouch: true });
  };
  /** want to condidiotnal render something based on change... use watch api
   * always use default form values if u want to use dirtyFields ,is dirty...
   * by default react hook form is un controlled form but with watch api on every key stroke the  entire form will rerender which will make it fully controlled
   * always destructure form state
   * so if u dont want to re render at root for every chnage go for useWatch
   * https://codesandbox.io/s/react-hook-form-v7-usewatch-forked-zp59we?file=/src/first.js
   */
  console.log(
    // "isvlidating",
    // isValidating,
    // isDirty,
    // "isDirty",
    touchedFields,
    dirtyFields
    // watch()
  );
  return (
    <form onSubmit={methods.handleSubmit(save)}>
      <input type="text" placeholder="lastname" {...register("lastName")} />
      <input type="text" placeholder="firstname" {...register("firstName")} />
      <input type="checkbox" {...register("checkbox")} />
      <select
        {...register("gender")}
        defaultValue="default"
        placeholder="hello"
      >
        <option selected value="default" disabled>
          select..
        </option>
        <option value="male">male..</option>
        <option value="female">female..</option>
      </select>

      <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
      <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
      <p style={{ color: "red" }}>{errors?.checkbox?.message}</p>
      <input type="text" {...register("input")} />
      {/* to programaticLLY update some field use setValue function

  pass name and shouldtouch option so that it will re render the form as if user touched it */}
      <button type="submit">submit</button>
      {/** u can reset using reset function and by default it will reset both default value as weel as value in UI

     try to reset on unmounting if need ed and pass other params like formstate.issubmitsuccessful to reset once submit is done
      */}
      <button
        type="button"
        onClick={
          () => reset()
          // { firstName: "heii", lastName: "hii" },
          // { keepDefaultValues: true }
        }
      >
        reset
      </button>
      <button
        onClick={async () => {
          const output = await trigger(["firstName", "input", "lastName"], {
            shouldFocus: true
          });
          console.log("output", output); // true if valid
        }}
      >
        trigger validation
      </button>
    </form>
  );
}


const InputBox = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <>
      <div>
        <input {...props} ref={ref} />
        <p>{props.error}</p>
      </div>
    </>
  );
});

export default {InputBox,Form};
/* <form onSubmit={handleSubmit(save)}>
        <Controller
          render={(props) => (
            <InputBox {...props} placeholder="type here" minLength="3" />
          )}
          control={control}
          name="type"
          label="type"
          defaultValue=""
          rules={{ required: true }}
        />
        <button type="submit">sub</button>
      </form>*/