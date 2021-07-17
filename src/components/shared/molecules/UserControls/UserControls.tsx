import Button from '../../atoms/Button';
import {
  Wrapper,
  customButtonStyles
} from './styled';

const UserControls = () => {
  const user = null;

  return (
    <Wrapper>
      {user ? <></> : (
        <>
          <Button customStyles={customButtonStyles}>Sign in</Button>
          <Button>Sign up</Button>
        </>
      )}
    </Wrapper>
  )
}

export default UserControls;