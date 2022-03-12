import "./App.css";
import { Form, Formik, Field, FormikHelpers } from "formik";
import { FormValues } from "./interfaces/FormValues";
import { postData } from "./api/postData";

const App: React.FC<{}> = () => {
  const initialValues: FormValues = {
    email: "",
    subject: "",
    sender_name: "",
    receiver_name: "",
    html_text: "",
  };
  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: FormValues,
          actions: FormikHelpers<FormValues>
        ): void => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          postData(import.meta.env.VITE_REACT_APP_API_URL as string, {
            sender_name: values.sender_name,
            receiver_name: values.receiver_name,
            sender_email: import.meta.env.VITE_REACT_APP_EMAIL,
            receiver_email: values.email,
            subject: values.subject,
            text: "",
            html_text: values.html_text,
          }).then((data: object) => {
            console.log(data);
            alert(JSON.stringify(data, null, 2));
          });
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field
            type="email"
            name="email"
            required
            placeholder="Recipient Email"
          />
          <br />
          <Field type="text" required name="subject" placeholder="Subject" />
          <br />
          <Field
            type="text"
            required
            name="sender_name"
            placeholder="Your Name"
          />
          <br />
          <Field
            type="text"
            required
            name="receiver_name"
            placeholder="Recipient Name"
          />
          <br />
          <Field
            required
            component="textarea"
            name="html_text"
            placeholder="HTML Text"
          ></Field>
          <br />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
