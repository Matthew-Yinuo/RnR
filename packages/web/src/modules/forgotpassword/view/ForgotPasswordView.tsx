import * as React from "react";
import { Form as FormA, Icon } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { InputField } from "../../shared/inputField";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@airbnb/controller";

const FormItem = FormA.Item;

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
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
          <FormItem>
            Or <Link to="/login">Return to login!</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(RC);
