import LoginForm from '../../features/auth/Components/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-page-form">
        <LoginForm />
      </div>
      <div className="login-page-image">
        <img
          src={'../../../assets/images/malaga-view-login.webp'}
          alt="Malaga view"
        />
      </div>
    </div>
  );
};

export default LoginPage;
