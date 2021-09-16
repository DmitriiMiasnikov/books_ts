import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as Yup from 'yup';

import { setLiderboardList } from "../../../store/liderboardReducer";

import DefaultTemplate from "../../../components/shared/templates/DefaultTemplate";
import LiderboardForm from "./components/LiderboardForm";

import {} from "./styled";

interface Props {
  setLiderboardList: (list: [{ name: string; rating: number }]) => void,
  liderboard: { name: string, rating: number }[]
}

const HomePage = ({ setLiderboardList, liderboard }: Props): JSX.Element => {

  const onSubmit = () => {};

  const initialValues = {};

  const validationSchema = Yup.object().shape({})

  useEffect(() => {
    setLiderboardList([{ name: "asd", rating: 12 }]);
  }, []);

  const form = {
    onSubmit,
    initialValues,
    validationSchema
  }

  return (
    <DefaultTemplate>
      <LiderboardForm form={form} liderboard={liderboard} />
    </DefaultTemplate>
  );
};

const mapStatesToProps = ({
  liderboard: { liderboard },
}: {
  liderboard: { liderboard: { name: string; rating: number }[] };
}) => {
  return {
    liderboard: liderboard,
  };
};

export default compose(connect(mapStatesToProps, { setLiderboardList }))(
  HomePage
);
