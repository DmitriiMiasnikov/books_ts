import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { setLiderboardList } from "../../../store/liderboardReducer";

import DefaultTemplate from "../../../components/shared/templates/DefaultTemplate";
import LiderboardForm from "./components/LiderboardForm";

import {} from "./styled";

interface Props {
  setLiderboardList: (list: [{ name: string; rating: number }]) => void;
}

const HomePage = ({ setLiderboardList }: Props): JSX.Element => {
  useEffect(() => {
    setLiderboardList([{ name: "asd", rating: 12 }]);
  }, []);

  return (
    <DefaultTemplate>
      <LiderboardForm />
    </DefaultTemplate>
  );
};

const mapStatesToProps = ({
  liderboard: { liderboard },
}: {
  liderboard: { liderboard: { name: string; rating: number }[] };
}) => {
  return {
    lidearboard: liderboard,
  };
};

export default compose(connect(mapStatesToProps, { setLiderboardList }))(
  HomePage
);
