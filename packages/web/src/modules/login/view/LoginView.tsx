import * as React from "react";
import { Form as FormA, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { loginUserSchema } from "@airbnb/common";
import { InputField } from "../../shared/inputField";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@airbnb/controller";

const FormItem = FormA.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
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
          <Field
            name="password"
            type="password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any
            }
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <Link to="/forgotpassword">Forgot password</Link>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/register">Register!</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RC);
