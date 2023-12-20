import PasswordImage from '../assets/images/PasswordImage.svg';
import ForgotPasswordFormGrid from '../components/common/ForgotPasswordFormGrid';
import styled from 'styled-components';
 
const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 10px;
    background: #F6F6F6;
`;
 
const Image = styled.img`
    width: 80%;
    height: 85%;
    @media only screen and (max-width: 1024px) {
        height: 100%;
    }
`;
 
function ForgotPassword() {
    return (
        <Container className="ForgotPassword">
            <ForgotPasswordFormGrid />
            <Image className='gridItem PasswordImage' src={PasswordImage} alt='ForgotPasswordImage'></Image>
        </Container>
    )
}
 
export default ForgotPassword;