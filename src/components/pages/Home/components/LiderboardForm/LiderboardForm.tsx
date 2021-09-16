import { Formik, Form as FormikForm } from 'formik';

import {
  FormWrapper,
  Row,
  Name,
  Rating,
} from './styled';

interface Props {
  form: { onSubmit: () => void, initialValues: {}, validationSchema: any  },
  liderboard: { name: string, rating: number }[]
}

const LiderboardForm = ({ form, liderboard }: Props): JSX.Element => {
  const { onSubmit, initialValues, validationSchema } = form;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, status, setFieldValue, values }) => (
        <FormikForm>
          <FormWrapper>
            {liderboard.map(({ name, rating }, i) => {
              return (
                <Row key={i}>
                  <Name>{name}</Name>
                  <Rating>{rating}</Rating>
                </Row>
              )
            })}
          </FormWrapper>
        </FormikForm>
      )}
      </Formik>
  )
}

export default LiderboardForm;
