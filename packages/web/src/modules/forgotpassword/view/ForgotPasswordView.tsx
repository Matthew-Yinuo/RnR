import * as React from "react";
import { Form as FormA, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { realEmailSchema } from "@airbnb/common";
import { InputField } from "../../shared/inputField";
import { Link } from "react-router-dom";

const FormItem = FormA.Item;

interface FormValues {
  email: string;
}

interface Props {
  submit: (
    values: FormValues
  ) => Promise<{
    [key: string]: string;
  } | null>;
}

class RC extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            }
            placeholder="Email"
            component={InputField}
          />
        </div>
      </Form>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: realEmailSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RC);
