import React from "react";
import s from './AddPostForm.module.css';
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from "formik"
import FormErrorMessage from "../../Common/FormsControls/FormErrorMessage";

let initValue = {
    postText: ""
}

let validationSchema = Yup.object({
        postText: Yup.string().max(10, "Post must not exceed 10 characters")
    }
)

const AddPostForm = ({onSubmit}) => {
    return (

        <Formik initialValues={initValue} validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    onSubmit(values)
                    setSubmitting(false);
                    resetForm();
                }}>
            {({isSubmitting}) => (
                <Form>
                    <div className={s.addPost}>
                        <Field as="textarea" name="postText" id="postText" placeholder="Enter your post"/>
                        <ErrorMessage name="postText" component={FormErrorMessage}/>
                    </div>

                    <div className={s.button}>
                        <button disabled={isSubmitting} type="submit">Add post</button>
                    </div>

                </Form>)

            }


        </Formik>

    )
}
export default AddPostForm